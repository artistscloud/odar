/**
 * OdAR System Firmware
 * 
 * Main firmware implementation for the Olfactory Detection and Ranging System
 * Hardware: ESP32-WROOM-32E
 * 
 * This firmware implements all core functionality including:
 * - Temperature cycle control for metal oxide sensors
 * - Pump control for active sampling
 * - Sensor data acquisition from MOS and polymer sensors
 * - Ranging measurement using ultrasonic/ToF sensors
 * - AI model inference for compound detection
 * - User interface management
 * - Power management and battery monitoring
 * - Data logging and communication
 * 
 * The system uses FreeRTOS for task management with prioritization.
 */

#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include <freertos/semphr.h>
#include <EEPROM.h>
#include "esp_adc_cal.h"
#include "driver/adc.h"
#include "esp_pm.h"
#include "driver/gpio.h"
#include "driver/i2c.h"
#include "esp_sleep.h"

// Third-party libraries
#include "TFT_eSPI.h" // Display
#include "SSD1306.h"  // OLED display alternative
#include "Adafruit_BME280.h" // Environmental sensor

// Include AI model headers (TensorFlow Lite Micro)
#include "tensorflow/lite/micro/all_ops_resolver.h"
#include "tensorflow/lite/micro/micro_error_reporter.h"
#include "tensorflow/lite/micro/micro_interpreter.h"
#include "tensorflow/lite/schema/schema_generated.h"
#include "tensorflow/lite/version.h"
#include "odar_model.h" // Converted model header

// Project-specific headers
#include "sensor_array.h"
#include "ranging.h"
#include "power_management.h"
#include "ui_manager.h"
#include "data_logger.h"
#include "calibration.h"

//==============================================================================
// Configuration Parameters
//==============================================================================

// Hardware pins
#define I2C_SDA                 21
#define I2C_SCL                 22
#define SPI_MOSI                23
#define SPI_MISO                19
#define SPI_CLK                 18
#define SPI_CS                  5
#define HEATER_PWM_PIN          25
#define BATTERY_ADC_PIN         35
#define STATUS_LED_PIN          2
#define TEMP_SENSOR_PIN         34
#define BUTTON_MENU_PIN         13
#define BUTTON_SELECT_PIN       12
#define BUTTON_BACK_PIN         14

// Pump control pins and settings
#define PUMP_PWM_PIN            16
#define PUMP_PWM_CHANNEL        0
#define PUMP_PWM_FREQ           5000
#define PUMP_PWM_RES            8

// Ultrasonic ranging pins
#define US_FRONT_TRIG_PIN       26
#define US_FRONT_ECHO_PIN       27
#define US_LEFT_TRIG_PIN        32
#define US_LEFT_ECHO_PIN        33
#define US_RIGHT_TRIG_PIN       15
#define US_RIGHT_ECHO_PIN       4

// Sensor array configuration
#define NUM_MOS_SENSORS         4
#define NUM_CP_SENSORS          4
#define TOTAL_SENSORS           (NUM_MOS_SENSORS + NUM_CP_SENSORS)
#define TEMP_CYCLE_POINTS       4  // Number of temperature points for cycling

// Ranging configuration
#define MAX_RANGE_CM            400 // 4 meters
#define RANGING_INTERVAL_MS     500

// Model inference settings
#define MODEL_INPUT_SIZE        (TOTAL_SENSORS * TEMP_CYCLE_POINTS)
#define DETECTION_THRESHOLD     0.75
#define INFERENCE_INTERVAL_MS   1000

// Temperature cycling parameters
#define TEMP_CYCLE_LOW_C        10
#define TEMP_CYCLE_HIGH_C       40
#define TEMP_CYCLE_STEP_C       10
#define TEMP_CYCLE_HOLD_MS      2000
#define TEMP_PID_KP             2.0
#define TEMP_PID_KI             0.1
#define TEMP_PID_KD             0.5

// Power management
#define BATTERY_LOW_THRESHOLD   3.3  // Volts
#define BATTERY_CRITICAL_THRESHOLD 3.0  // Volts
#define SLEEP_TIMEOUT_MS        300000  // 5 minutes

// Data logging
#define LOG_BUFFER_SIZE         10000
#define LOG_INTERVAL_MS         1000

// Task priorities
#define PRIORITY_TEMP_CONTROL   5
#define PRIORITY_DATA_ACQ       4
#define PRIORITY_INFERENCE      3
#define PRIORITY_RANGING        3
#define PRIORITY_UI             2
#define PRIORITY_LOGGING        1

// Flow rate settings (percentage of maximum)
#define FLOW_RATE_OFF           0
#define FLOW_RATE_LOW           25
#define FLOW_RATE_MEDIUM        50
#define FLOW_RATE_HIGH          75
#define FLOW_RATE_MAX           100

//==============================================================================
// Type Definitions
//==============================================================================

// Operating states
typedef enum {
  STATE_INIT,
  STATE_CALIBRATION,
  STATE_IDLE,
  STATE_ACTIVE_SENSING,
  STATE_TEMP_CYCLING,
  STATE_ERROR,
  STATE_LOW_POWER,
  STATE_SLEEP
} SystemState;

// Temperature cycle stages
typedef enum {
  TEMP_STAGE_HEATING,
  TEMP_STAGE_HOLDING,
  TEMP_STAGE_COOLING,
  TEMP_STAGE_COMPLETE
} TempCycleStage;

// Pump operating modes
typedef enum {
  PUMP_MODE_OFF,
  PUMP_MODE_CONTINUOUS,
  PUMP_MODE_DUTY_CYCLE,
  PUMP_MODE_ADAPTIVE
} PumpMode;

// Sensor data structure
typedef struct {
  float mosValues[NUM_MOS_SENSORS];
  float cpValues[NUM_CP_SENSORS];
  float cycleData[TEMP_CYCLE_POINTS][TOTAL_SENSORS];
  uint8_t tempCycleIndex;
  bool cycleComplete;
  float temperature;
  float humidity;
  float pressure;
} SensorData;

// Detection result structure
typedef struct {
  char compound[32];
  float confidence;
  float concentration;
  uint32_t timestamp;
  bool detected;
} DetectionResult;

// Ranging data structure
typedef struct {
  uint16_t frontDistance;
  uint16_t leftDistance;
  uint16_t rightDistance;
  int16_t angleToSource;
  uint16_t estimatedDistance;
  bool targetDetected;
} RangingData;

// System status structure
typedef struct {
  SystemState state;
  float batteryVoltage;
  float batteryPercentage;
  uint32_t uptime;
  float cpuTemperature;
  float internalTemperature;
  bool calibrated;
  bool errorFlag;
  char errorMessage[64];
} SystemStatus;

//==============================================================================
// Global Variables
//==============================================================================

// State variables
static SystemState currentState = STATE_INIT;
static TempCycleStage tempCycleStage = TEMP_STAGE_COMPLETE;
static PumpMode currentPumpMode = PUMP_MODE_OFF;
static bool systemInitialized = false;
static uint32_t lastUserActionTime = 0;
static bool displayOn = true;

// Sensor and detection data
static SensorData sensorData;
static DetectionResult latestResult;
static RangingData rangingData;
static SystemStatus systemStatus;

// Pump control variables
static uint8_t currentFlowRate = FLOW_RATE_OFF;
static uint32_t pumpOnTime = 0;
static uint32_t pumpOffTime = 0;
static uint32_t lastStateChange = 0;
static bool pumpRunning = false;

// Flags for task synchronization
static bool newDataAvailable = false;
static bool rangingComplete = false;
static bool inferenceComplete = false;
static bool displayUpdateRequired = true;

// FreeRTOS handles
static TaskHandle_t tempControlTaskHandle = NULL;
static TaskHandle_t dataAcquisitionTaskHandle = NULL;
static TaskHandle_t inferenceTaskHandle = NULL;
static TaskHandle_t rangingTaskHandle = NULL;
static TaskHandle_t uiTaskHandle = NULL;
static TaskHandle_t loggingTaskHandle = NULL;

static SemaphoreHandle_t dataAccessMutex = NULL;
static SemaphoreHandle_t i2cMutex = NULL;
static SemaphoreHandle_t displayMutex = NULL;

// TensorFlow Lite model variables
static tflite::MicroErrorReporter micro_error_reporter;
static tflite::ErrorReporter* error_reporter = &micro_error_reporter;
static const tflite::Model* model = nullptr;
static tflite::MicroInterpreter* interpreter = nullptr;
static TfLiteTensor* input = nullptr;
static TfLiteTensor* output = nullptr;
static constexpr int kTensorArenaSize = 128 * 1024;
static uint8_t tensor_arena[kTensorArenaSize];

// Hardware interfaces
static TFT_eSPI tft;  // Display instance
static Adafruit_BME280 bme;  // Environmental sensor

//==============================================================================
// Function Prototypes
//==============================================================================

// Initialization functions
void initHardware();
void initSensors();
void initTempControl();
void initRanging();
void initDisplay();
void initTFLiteModel();
void initPump();
void loadCalibrationData();

// Task functions
void tempControlTask(void* pvParameters);
void dataAcquisitionTask(void* pvParameters);
void inferenceTask(void* pvParameters);
void rangingTask(void* pvParameters);
void uiTask(void* pvParameters);
void loggingTask(void* pvParameters);

// Temperature control functions
void setHeaterTemperature(float tempC);
float readTemperature();
void startTempCycle();
void updateTempCycle();

// Sensor reading functions
void readSensorArray();
void processSensorData();
void saveCycleData();

// Pump control functions
void setPumpFlow(uint8_t flowRate);
void setPumpMode(PumpMode mode, uint32_t onTimeMs = 5000, uint32_t offTimeMs = 15000);
void updatePump();
void onDetectionEvent(float concentration);

// Inference functions
void runInference();
void processInferenceResults();

// Ranging functions
void measureDistances();
void triangulateSource();

// UI functions
void updateDisplay();
void drawStatusScreen();
void drawSensorScreen();
void drawResultScreen();
void handleButtonEvents();

// Power management
float readBatteryVoltage();
void calculateBatteryPercentage();
void checkLowPowerCondition();
void enterDeepSleep();

// Utility functions
void changeSystemState(SystemState newState);
void logEvent(const char* event);
void logError(const char* error);
void printSystemStatus();

//==============================================================================
// Initialization Functions
//==============================================================================

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  Serial.println("\nOdAR System Initializing...");
  
  // Create synchronization primitives
  dataAccessMutex = xSemaphoreCreateMutex();
  i2cMutex = xSemaphoreCreateMutex();
  displayMutex = xSemaphoreCreateMutex();
  
  if (!dataAccessMutex || !i2cMutex || !displayMutex) {
    Serial.println("Failed to create mutex objects!");
    while (1) { delay(1000); }  // Fatal error
  }
  
  // Initialize hardware components
  initHardware();
  initSensors();
  initTempControl();
  initRanging();
  initDisplay();
  initTFLiteModel();
  initPump();
  
  // Load calibration data
  loadCalibrationData();
  
  // Create FreeRTOS tasks
  xTaskCreatePinnedToCore(
    tempControlTask,
    "TempControl",
    4096,
    NULL,
    PRIORITY_TEMP_CONTROL,
    &tempControlTaskHandle,
    0  // Core 0
  );
  
  xTaskCreatePinnedToCore(
    dataAcquisitionTask,
    "DataAcq",
    4096,
    NULL,
    PRIORITY_DATA_ACQ,
    &dataAcquisitionTaskHandle,
    0  // Core 0
  );
  
  xTaskCreatePinnedToCore(
    inferenceTask,
    "Inference",
    8192,  // Larger stack for TFLite
    NULL,
    PRIORITY_INFERENCE,
    &inferenceTaskHandle,
    1  // Core 1
  );
  
  xTaskCreatePinnedToCore(
    rangingTask,
    "Ranging",
    4096,
    NULL,
    PRIORITY_RANGING,
    &rangingTaskHandle,
    0  // Core 0
  );
  
  xTaskCreatePinnedToCore(
    uiTask,
    "UI",
    4096,
    NULL,
    PRIORITY_UI,
    &uiTaskHandle,
    1  // Core 1
  );
  
  xTaskCreatePinnedToCore(
    loggingTask,
    "Logging",
    4096,
    NULL,
    PRIORITY_LOGGING,
    &loggingTaskHandle,
    1  // Core 1
  );
  
  // Initialize system status
  systemStatus.state = STATE_INIT;
  systemStatus.uptime = 0;
  systemStatus.calibrated = false;
  systemStatus.errorFlag = false;
  strcpy(systemStatus.errorMessage, "");
  
  // Update battery status
  systemStatus.batteryVoltage = readBatteryVoltage();
  calculateBatteryPercentage();
  
  // Set initial pump mode (duty cycle by default)
  setPumpMode(PUMP_MODE_DUTY_CYCLE, 5000, 15000);
  
  // System fully initialized
  systemInitialized = true;
  changeSystemState(STATE_IDLE);
  
  Serial.println("OdAR System Initialization Complete!");
}

void loop() {
  // Main loop is minimal with FreeRTOS tasks
  // Just perform system-level checks and feed the watchdog
  
  // Update system uptime
  systemStatus.uptime = millis() / 1000;  // seconds
  
  // Check for low power condition
  checkLowPowerCondition();
  
  // Sleep management
  if (currentState != STATE_SLEEP && 
      (millis() - lastUserActionTime > SLEEP_TIMEOUT_MS)) {
    changeSystemState(STATE_SLEEP);
  }
  
  // Print status periodically (for debugging)
  static uint32_t lastStatusPrint = 0;
  if (millis() - lastStatusPrint > 10000) {  // Every 10 seconds
    printSystemStatus();
    lastStatusPrint = millis();
  }
  
  delay(100);  // Short delay to prevent watchdog issues
}

void initHardware() {
  // Initialize I2C bus
  Wire.begin(I2C_SDA, I2C_SCL);
  Wire.setClock(400000);  // 400 kHz
  
  // Initialize SPI bus
  SPI.begin(SPI_CLK, SPI_MISO, SPI_MOSI, SPI_CS);
  
  // Configure GPIO pins
  pinMode(HEATER_PWM_PIN, OUTPUT);
  pinMode(STATUS_LED_PIN, OUTPUT);
  pinMode(BUTTON_MENU_PIN, INPUT_PULLUP);
  pinMode(BUTTON_SELECT_PIN, INPUT_PULLUP);
  pinMode(BUTTON_BACK_PIN, INPUT_PULLUP);
  
  // Configure ADC for battery monitoring
  adc1_config_width(ADC_WIDTH_BIT_12);
  adc1_config_channel_atten(ADC1_CHANNEL_7, ADC_ATTEN_DB_11);
  
  // Initial LED state
  digitalWrite(STATUS_LED_PIN, HIGH);
  
  Serial.println("Hardware initialized");
}

void initPump() {
  // Configure PWM for pump control
  ledcSetup(PUMP_PWM_CHANNEL, PUMP_PWM_FREQ, PUMP_PWM_RES);
  ledcAttachPin(PUMP_PWM_PIN, PUMP_PWM_CHANNEL);
  ledcWrite(PUMP_PWM_CHANNEL, 0); // Ensure pump is off on startup
  
  Serial.println("Pump control initialized");
}

void initSensors() {
  if (xSemaphoreTake(i2cMutex, portMAX_DELAY) == pdTRUE) {
    // Initialize BME280 environmental sensor
    if (!bme.begin(0x76)) {
      Serial.println("Could not find BME280 sensor!");
      strcpy(systemStatus.errorMessage, "BME280 initialization failed");
      systemStatus.errorFlag = true;
    } else {
      Serial.println("BME280 sensor initialized");
    }
    
    // Initialize MOS and CP sensors (via I2C or ADC)
    // Implementation depends on sensor interface
    
    xSemaphoreGive(i2cMutex);
  }
  
  // Initialize sensor data structure
  memset(&sensorData, 0, sizeof(SensorData));
  sensorData.tempCycleIndex = 0;
  sensorData.cycleComplete = false;
  
  Serial.println("Sensors initialized");
}

void initTempControl() {
  // Configure PWM for heater control
  ledcSetup(1, 5000, 8);  // Channel 1, 5 kHz, 8-bit resolution
  ledcAttachPin(HEATER_PWM_PIN, 1);
  ledcWrite(1, 0);  // Start with heater off
  
  Serial.println("Temperature control initialized");
}

void initRanging() {
  // Configure ultrasonic sensor pins
  pinMode(US_FRONT_TRIG_PIN, OUTPUT);
  pinMode(US_FRONT_ECHO_PIN, INPUT);
  pinMode(US_LEFT_TRIG_PIN, OUTPUT);
  pinMode(US_LEFT_ECHO_PIN, INPUT);
  pinMode(US_RIGHT_TRIG_PIN, OUTPUT);
  pinMode(US_RIGHT_ECHO_PIN, INPUT);
  
  // Initialize ranging data structure
  memset(&rangingData, 0, sizeof(RangingData));
  
  Serial.println("Ranging system initialized");
}

void initDisplay() {
  if (xSemaphoreTake(displayMutex, portMAX_DELAY) == pdTRUE) {
    // Initialize TFT display
    tft.init();
    tft.setRotation(0);
    tft.fillScreen(TFT_BLACK);
    tft.setTextSize(2);
    tft.setTextColor(TFT_WHITE, TFT_BLACK);
    tft.setCursor(0, 0);
    tft.println("OdAR System");
    tft.println("Initializing...");
    
    xSemaphoreGive(displayMutex);
  }
  
  Serial.println("Display initialized");
}

void initTFLiteModel() {
  // Set up logging
  Serial.println("Initializing TensorFlow Lite...");
  
  // Map the model into a usable data structure
  model = tflite::GetModel(odar_model_tflite);
  if (model->version() != TFLITE_SCHEMA_VERSION) {
    Serial.printf("Model version mismatch: Schema expects %d but model is %d\n",
                 TFLITE_SCHEMA_VERSION, model->version());
    return;
  }
  
  // Create an all-ops resolver
  static tflite::AllOpsResolver resolver;
  
  // Build an interpreter to run the model
  static tflite::MicroInterpreter static_interpreter(
      model, resolver, tensor_arena, kTensorArenaSize, error_reporter);
  interpreter = &static_interpreter;
  
  // Allocate memory from the tensor_arena for the model's tensors
  TfLiteStatus allocate_status = interpreter->AllocateTensors();
  if (allocate_status != kTfLiteOk) {
    Serial.println("AllocateTensors() failed");
    return;
  }
  
  // Get pointers to the model's input and output tensors
  input = interpreter->input(0);
  output = interpreter->output(0);
  
  Serial.println("TensorFlow Lite model initialized");
}

void loadCalibrationData() {
  // Load calibration data from EEPROM or flash
  // This is a placeholder and should be implemented based on your calibration data format
  
  EEPROM.begin(512);
  
  // Example: Read calibration flag
  uint8_t calibrated = EEPROM.read(0);
  if (calibrated == 0xFF) {
    Serial.println("No calibration data found, using defaults");
    systemStatus.calibrated = false;
  } else {
    // Read calibration data
    // Example: sensor offsets, temperature parameters, etc.
    systemStatus.calibrated = true;
    Serial.println("Calibration data loaded");
  }
  
  EEPROM.end();
}

//==============================================================================
// Task Functions
//==============================================================================

void tempControlTask(void* pvParameters) {
  TickType_t xLastWakeTime;
  const TickType_t xFrequency = pdMS_TO_TICKS(100);  // 10 Hz update rate
  
  // Initialize the xLastWakeTime variable with the current time
  xLastWakeTime = xTaskGetTickCount();
  
  while (true) {
    // Temperature control logic
    if (currentState == STATE_TEMP_CYCLING) {
      updateTempCycle();
    } else {
      // Default temperature when not cycling (ambient or idle)
      setHeaterTemperature(25.0);
    }
    
    // Read current temperature (for monitoring)
    float currentTemp = readTemperature();
    
    // Update sensor data structure with current temperature
    if (xSemaphoreTake(dataAccessMutex, portMAX_DELAY) == pdTRUE) {
      sensorData.temperature = currentTemp;
      xSemaphoreGive(dataAccessMutex);
    }
    
    // Wait for the next cycle
    vTaskDelayUntil(&xLastWakeTime, xFrequency);
  }
}

void dataAcquisitionTask(void* pvParameters) {
  TickType_t xLastWakeTime;
  const TickType_t xFrequency = pdMS_TO_TICKS(100);  // 10 Hz update rate
  
  // Initialize the xLastWakeTime variable with the current time
  xLastWakeTime = xTaskGetTickCount();
  
  while (true) {
    // Read sensor array
    readSensorArray();
    
    // Process sensor data
    processSensorData();
    
    // If in temperature cycling mode, save data at appropriate times
    if (currentState == STATE_TEMP_CYCLING && 
        tempCycleStage == TEMP_STAGE_HOLDING) {
      static uint32_t lastDataSave = 0;
      if (millis() - lastDataSave > TEMP_CYCLE_HOLD_MS / 2) {
        saveCycleData();
        lastDataSave = millis();
      }
    }
    
    // Update pump based on sensor data (if in adaptive mode)
    updatePump();
    
    // Flag that new data is available for inference
    newDataAvailable = true;
    
    // Wait for the next cycle
    vTaskDelayUntil(&xLastWakeTime, xFrequency);
  }
}

void inferenceTask(void* pvParameters) {
  TickType_t xLastWakeTime;
  const TickType_t xFrequency = pdMS_TO_TICKS(INFERENCE_INTERVAL_MS);
  
  // Initialize the xLastWakeTime variable with the current time
  xLastWakeTime = xTaskGetTickCount();
  
  while (true) {
    // Only run inference when new data is available and cycling is complete
    if (newDataAvailable && 
        (currentState == STATE_ACTIVE_SENSING || 
         (currentState == STATE_TEMP_CYCLING && sensorData.cycleComplete))) {
      
      // Run the inference
      runInference();
      
      // Process results
      processInferenceResults();
      
      // Reset flag
      newDataAvailable = false;
      
      // Flag for display update
      displayUpdateRequired = true;
      
      // Flag inference complete
      inferenceComplete = true;
    }
    
    // Wait for the next cycle
    vTaskDelayUntil(&xLastWakeTime, xFrequency);
  }
}

void rangingTask(void* pvParameters) {
  TickType_t xLastWakeTime;
  const TickType_t xFrequency = pdMS_TO_TICKS(RANGING_INTERVAL_MS);
  
  // Initialize the xLastWakeTime variable with the current time
  xLastWakeTime = xTaskGetTickCount();
  
  while (true) {
    // Only perform ranging when in active sensing mode or after detection
    if (currentState == STATE_ACTIVE_SENSING || 
        (currentState == STATE_IDLE && latestResult.detected)) {
      
      // Measure distances using ultrasonic sensors
      measureDistances();
      
      // Triangulate source position if a detection has occurred
      if (latestResult.detected) {
        triangulateSource();
      }
      
      // Flag for display update
      displayUpdateRequired = true;
      
      // Flag ranging complete
      rangingComplete = true;
    }
    
    // Wait for the next cycle
    vTaskDelayUntil(&xLastWakeTime, xFrequency);
  }
}

void uiTask(void* pvParameters) {
  TickType_t xLastWakeTime;
  const TickType_t xFrequency = pdMS_TO_TICKS(100);  // 10 Hz update rate
  
  // Initialize the xLastWakeTime variable with the current time
  xLastWakeTime = xTaskGetTickCount();
  
  while (true) {
    // Handle button events
    handleButtonEvents();
    
    // Update display if required
    if (displayUpdateRequired && displayOn) {
      updateDisplay();
      displayUpdateRequired = false;
    }
    
    // Wait for the next cycle
    vTaskDelayUntil(&xLastWakeTime, xFrequency);
  }
}

void loggingTask(void* pvParameters) {
  TickType_t xLastWakeTime;
  const TickType_t xFrequency = pdMS_TO_TICKS(LOG_INTERVAL_MS);
  
  // Initialize the xLastWakeTime variable with the current time
  xLastWakeTime = xTaskGetTickCount();
  
  while (true) {
    // Log sensor data and system status
    if (currentState != STATE_SLEEP) {
      // Create log entry with current timestamp
      String logEntry = String(millis()) + ",";
      
      // Add sensor data
      if (xSemaphoreTake(dataAccessMutex, portMAX_DELAY) == pdTRUE) {
        // Add sensor readings
        for (int i = 0; i < NUM_MOS_SENSORS; i++) {
          logEntry += String(sensorData.mosValues[i]) + ",";
        }
        for (int i = 0; i < NUM_CP_SENSORS; i++) {
          logEntry += String(sensorData.cpValues[i]) + ",";
        }
        
        // Add environmental data
        logEntry += String(sensorData.temperature) + ",";
        logEntry += String(sensorData.humidity) + ",";
        logEntry += String(sensorData.pressure) + ",";
        
        xSemaphoreGive(dataAccessMutex);
      }
      
      // Add detection result if available
      if (latestResult.detected) {
        logEntry += String(latestResult.compound) + ",";
        logEntry += String(latestResult.concentration) + ",";
        logEntry += String(latestResult.confidence) + ",";
      } else {
        logEntry += "N/A,0,0,";
      }
      
      // Add ranging data
      logEntry += String(rangingData.frontDistance) + ",";
      logEntry += String(rangingData.leftDistance) + ",";
      logEntry += String(rangingData.rightDistance) + ",";
      
      // Add system status
      logEntry += String(systemStatus.batteryVoltage) + ",";
      logEntry += String(currentState);
      
      // Write log entry (to Serial for now)
      Serial.println(logEntry);
      
      // In a real implementation, this data would be written to SD card
      // or sent over a communication channel
    }
    
    // Wait for the next cycle
    vTaskDelayUntil(&xLastWakeTime, xFrequency);
  }
}

//==============================================================================
// Temperature Control Functions
//==============================================================================

void setHeaterTemperature(float tempC) {
  // Read current temperature
  float currentTemp = readTemperature();
  
  // Simple PID control for heater
  static float integral = 0;
  static float prevError = 0;
  
  // Calculate error
  float error = tempC - currentTemp;
  
  // Update integral term with anti-windup
  integral += error;
  if (integral > 100) integral = 100;
  if (integral < -100) integral = -100;
  
  // Calculate derivative term
  float derivative = error - prevError;
  prevError = error;
  
  // Calculate PID output
  float output = TEMP_PID_KP * error + TEMP_PID_KI * integral + TEMP_PID_KD * derivative;
  
  // Constrain output to valid PWM range
  if (output < 0) output = 0;
  if (output > 255) output = 255;
  
  // Set heater PWM
  ledcWrite(1, (uint8_t)output);
}

float readTemperature() {
  // Read from temperature sensor (LM35 or similar)
  int adcValue = analogRead(TEMP_SENSOR_PIN);
  
  // Convert ADC reading to temperature
  // LM35 formula: Temp (°C) = ADC_Value * (3.3 / 4095) * 100
  float temperature = adcValue * 0.08058; // (3.3 / 4095) * 100
  
  return temperature;
}

void startTempCycle() {
  // Reset cycle data
  if (xSemaphoreTake(dataAccessMutex, portMAX_DELAY) == pdTRUE) {
    sensorData.tempCycleIndex = 0;
    sensorData.cycleComplete = false;
    memset(sensorData.cycleData, 0, sizeof(sensorData.cycleData));
    xSemaphoreGive(dataAccessMutex);
  }
  
  // Set initial temperature to lowest in cycle
  setHeaterTemperature(TEMP_CYCLE_LOW_C);
  
  // Set starting stage
  tempCycleStage = TEMP_STAGE_HEATING;
  
  // Log cycle start
  logEvent("Temperature cycle started");
  
  // Change system state
  changeSystemState(STATE_TEMP_CYCLING);
}

void updateTempCycle() {
  // Current temperature point we're targeting
  float targetTemp = TEMP_CYCLE_LOW_C + (sensorData.tempCycleIndex * TEMP_CYCLE_STEP_C);
  
  // Current actual temperature
  float currentTemp = readTemperature();
  
  // State machine for temperature cycling
  switch (tempCycleStage) {
    case TEMP_STAGE_HEATING:
      // Heat up to target temperature
      setHeaterTemperature(targetTemp);
      
      // Check if we've reached target temperature
      if (fabs(currentTemp - targetTemp) < 1.0) {
        // Move to holding stage
        tempCycleStage = TEMP_STAGE_HOLDING;
        logEvent("Reached target temperature, holding");
      }
      break;
      
    case TEMP_STAGE_HOLDING:
      // Maintain target temperature
      setHeaterTemperature(targetTemp);
      
      // Check if we've held for long enough
      static uint32_t holdStartTime = 0;
      if (holdStartTime == 0) {
        holdStartTime = millis();
      }
      
      if (millis() - holdStartTime >= TEMP_CYCLE_HOLD_MS) {
        // Move to next temperature point or finish cycle
        sensorData.tempCycleIndex++;
        
        if (sensorData.tempCycleIndex >= TEMP_CYCLE_POINTS) {
          // Cycle is complete
          tempCycleStage = TEMP_STAGE_COMPLETE;
          
          if (xSemaphoreTake(dataAccessMutex, portMAX_DELAY) == pdTRUE) {
            sensorData.cycleComplete = true;
            xSemaphoreGive(dataAccessMutex);
          }
          
          logEvent("Temperature cycle complete");
        } else {
          // Move to next temperature point
          tempCycleStage = TEMP_STAGE_HEATING;
          logEvent("Moving to next temperature point");
        }
        
        holdStartTime = 0;
      }
      break;
      
    case TEMP_STAGE_COMPLETE:
      // Cycle is complete, cool down to ambient
      setHeaterTemperature(25.0);
      
      // If we're cool enough, return to idle state
      if (currentTemp < 30.0) {
        // Return to idle state
        changeSystemState(STATE_IDLE);
      }
      break;
      
    default:
      // Should never reach here
      break;
  }
}

//==============================================================================
// Sensor Reading Functions
//==============================================================================

void readSensorArray() {
  // Read all sensors and update the sensor data structure
  if (xSemaphoreTake(dataAccessMutex, portMAX_DELAY) == pdTRUE) {
    // Read MOS sensors (ADC or I2C depending on hardware implementation)
    for (int i = 0; i < NUM_MOS_SENSORS; i++) {
      // Example for ADC reading (implementation depends on actual hardware)
      int adcValue = analogRead(36 + i);  // Assuming sequential ADC pins
      
      // Convert ADC reading to resistance or conductance value
      // This is a simplified example and the actual calculation depends on the sensor type
      float resistance = 10000.0 * (4095.0 / adcValue - 1.0);  // Voltage divider with 10K resistor
      
      // Store the value
      sensorData.mosValues[i] = resistance;
    }
    
    // Read conductive polymer sensors
    for (int i = 0; i < NUM_CP_SENSORS; i++) {
      // Example for ADC reading (implementation depends on actual hardware)
      int adcValue = analogRead(36 + NUM_MOS_SENSORS + i);  // Assuming sequential ADC pins
      
      // Convert ADC reading to resistance or conductance value
      float resistance = 10000.0 * (4095.0 / adcValue - 1.0);  // Voltage divider with 10K resistor
      
      // Store the value
      sensorData.cpValues[i] = resistance;
    }
    
    // Read environmental data from BME280
    if (xSemaphoreTake(i2cMutex, portMAX_DELAY) == pdTRUE) {
      sensorData.temperature = bme.readTemperature();
      sensorData.humidity = bme.readHumidity();
      sensorData.pressure = bme.readPressure() / 100.0F;  // Convert to hPa
      
      xSemaphoreGive(i2cMutex);
    }
    
    xSemaphoreGive(dataAccessMutex);
  }
}

void processSensorData() {
  // Process raw sensor data for anomalies, drifts, etc.
  if (xSemaphoreTake(dataAccessMutex, portMAX_DELAY) == pdTRUE) {
    // Example: Calculate baseline correction
    static float mosBaselines[NUM_MOS_SENSORS] = {0};
    static float cpBaselines[NUM_CP_SENSORS] = {0};
    static bool baselinesInitialized = false;
    
    // Initialize baselines if needed
    if (!baselinesInitialized) {
      for (int i = 0; i < NUM_MOS_SENSORS; i++) {
        mosBaselines[i] = sensorData.mosValues[i];
      }
      
      for (int i = 0; i < NUM_CP_SENSORS; i++) {
        cpBaselines[i] = sensorData.cpValues[i];
      }
      
      baselinesInitialized = true;
    }
    
    // Apply exponential moving average to update baselines (if in clean air)
    if (currentState == STATE_IDLE && !latestResult.detected) {
      float alpha = 0.01;  // Small alpha for slow baseline adaptation
      
      for (int i = 0; i < NUM_MOS_SENSORS; i++) {
        mosBaselines[i] = (alpha * sensorData.mosValues[i]) + ((1 - alpha) * mosBaselines[i]);
      }
      
      for (int i = 0; i < NUM_CP_SENSORS; i++) {
        cpBaselines[i] = (alpha * sensorData.cpValues[i]) + ((1 - alpha) * cpBaselines[i]);
      }
    }
    
    // Calculate relative changes from baseline (for display or analysis)
    float mosRelativeChange[NUM_MOS_SENSORS];
    float cpRelativeChange[NUM_CP_SENSORS];
    
    for (int i = 0; i < NUM_MOS_SENSORS; i++) {
      mosRelativeChange[i] = (sensorData.mosValues[i] / mosBaselines[i]) - 1.0;
    }
    
    for (int i = 0; i < NUM_CP_SENSORS; i++) {
      cpRelativeChange[i] = (sensorData.cpValues[i] / cpBaselines[i]) - 1.0;
    }
    
    // Check for significant deviations (potential detection)
    bool significantChange = false;
    float threshold = 0.10;  // 10% change threshold
    
    for (int i = 0; i < NUM_MOS_SENSORS; i++) {
      if (fabs(mosRelativeChange[i]) > threshold) {
        significantChange = true;
        break;
      }
    }
    
    if (!significantChange) {
      for (int i = 0; i < NUM_CP_SENSORS; i++) {
        if (fabs(cpRelativeChange[i]) > threshold) {
          significantChange = true;
          break;
        }
      }
    }
    
    // If significant change detected and we're not already sensing
    if (significantChange && currentState == STATE_IDLE) {
      changeSystemState(STATE_ACTIVE_SENSING);
      
      // Activate pump in adaptive mode based on the detection
      if (currentPumpMode == PUMP_MODE_ADAPTIVE) {
        setPumpFlow(FLOW_RATE_HIGH);
      }
    }
    
    xSemaphoreGive(dataAccessMutex);
  }
}

void saveCycleData() {
  // Save the current sensor values to the temperature cycle data structure
  if (xSemaphoreTake(dataAccessMutex, portMAX_DELAY) == pdTRUE) {
    if (sensorData.tempCycleIndex < TEMP_CYCLE_POINTS) {
      // Copy MOS sensor values
      for (int i = 0; i < NUM_MOS_SENSORS; i++) {
        sensorData.cycleData[sensorData.tempCycleIndex][i] = sensorData.mosValues[i];
      }
      
      // Copy CP sensor values
      for (int i = 0; i < NUM_CP_SENSORS; i++) {
        sensorData.cycleData[sensorData.tempCycleIndex][NUM_MOS_SENSORS + i] = sensorData.cpValues[i];
      }
      
      Serial.print("Saved data for temperature point ");
      Serial.print(sensorData.tempCycleIndex);
      Serial.print(" (");
      Serial.print(TEMP_CYCLE_LOW_C + (sensorData.tempCycleIndex * TEMP_CYCLE_STEP_C));
      Serial.println("°C)");
    }
    
    xSemaphoreGive(dataAccessMutex);
  }
}

//==============================================================================
// Pump Control Functions
//==============================================================================

void setPumpFlow(uint8_t flowRate) {
  if (flowRate > 100) {
    flowRate = 100;
  }
  
  currentFlowRate = flowRate;
  
  // Convert percentage to PWM value (0-255)
  uint8_t pwmValue = map(flowRate, 0, 100, 0, 255);
  ledcWrite(PUMP_PWM_CHANNEL, pwmValue);
  
  Serial.print("Pump flow rate set to ");
  Serial.print(flowRate);
  Serial.println("%");
}

void setPumpMode(PumpMode mode, uint32_t onTimeMs, uint32_t offTimeMs) {
  currentPumpMode = mode;
  
  switch (mode) {
    case PUMP_MODE_OFF:
      setPumpFlow(FLOW_RATE_OFF);
      Serial.println("Pump mode: OFF");
      break;
    
    case PUMP_MODE_CONTINUOUS:
      setPumpFlow(currentFlowRate > 0 ? currentFlowRate : FLOW_RATE_MEDIUM);
      Serial.println("Pump mode: CONTINUOUS");
      break;
    
    case PUMP_MODE_DUTY_CYCLE:
      pumpOnTime = onTimeMs;
      pumpOffTime = offTimeMs;
      lastStateChange = millis();
      pumpRunning = true;
      setPumpFlow(currentFlowRate > 0 ? currentFlowRate : FLOW_RATE_MEDIUM);
      Serial.print("Pump mode: DUTY_CYCLE (");
      Serial.print(onTimeMs);
      Serial.print("ms on, ");
      Serial.print(offTimeMs);
      Serial.println("ms off)");
      break;
    
    case PUMP_MODE_ADAPTIVE:
      // In adaptive mode, the pump will activate based on detection events
      setPumpFlow(FLOW_RATE_OFF);
      Serial.println("Pump mode: ADAPTIVE");
      break;
  }
}

void updatePump() {
  uint32_t currentTime = millis();
  
  // Handle duty cycle mode
  if (currentPumpMode == PUMP_MODE_DUTY_CYCLE) {
    if (pumpRunning && (currentTime - lastStateChange >= pumpOnTime)) {
      // Switch to off phase
      setPumpFlow(FLOW_RATE_OFF);
      lastStateChange = currentTime;
      pumpRunning = false;
    } else if (!pumpRunning && (currentTime - lastStateChange >= pumpOffTime)) {
      // Switch to on phase
      setPumpFlow(currentFlowRate > 0 ? currentFlowRate : FLOW_RATE_MEDIUM);
      lastStateChange = currentTime;
      pumpRunning = true;
    }
  }
  
  // Handle adaptive mode
  if (currentPumpMode == PUMP_MODE_ADAPTIVE) {
    // Pump flow rate is adjusted based on detection events
    // Logic is implemented in onDetectionEvent function
    
    // If we've been pumping for a while without a detection, reduce flow
    static uint32_t lastDetectionTime = 0;
    if (currentFlowRate > 0 && (currentTime - lastDetectionTime > 30000)) {
      // Gradually reduce flow rate if no recent detection
      uint8_t newRate = currentFlowRate * 0.8;
      if (newRate < FLOW_RATE_LOW) {
        newRate = FLOW_RATE_OFF;
      }
      setPumpFlow(newRate);
    }
    
    // If detection occurs, lastDetectionTime is updated in onDetectionEvent
  }
}

void onDetectionEvent(float concentration) {
  // This function is called when a detection occurs
  if (currentPumpMode == PUMP_MODE_ADAPTIVE) {
    // Adjust flow rate based on concentration
    if (concentration > 10.0) {
      setPumpFlow(FLOW_RATE_HIGH);
    } else if (concentration > 5.0) {
      setPumpFlow(FLOW_RATE_MEDIUM);
    } else if (concentration > 2.0) {
      setPumpFlow(FLOW_RATE_LOW);
    } else {
      setPumpFlow(FLOW_RATE_OFF);
    }
    
    // Update last detection time
    lastDetectionTime = millis();
  }
}

//==============================================================================
// Inference Functions
//==============================================================================

void runInference() {
  // Prepare input tensor with sensor data
  if (xSemaphoreTake(dataAccessMutex, portMAX_DELAY) == pdTRUE) {
    // If we have a complete temperature cycle, use the cycle data
    if (sensorData.cycleComplete) {
      // Flatten the cycle data into the input tensor
      int idx = 0;
      for (int t = 0; t < TEMP_CYCLE_POINTS; t++) {
        for (int s = 0; s < TOTAL_SENSORS; s++) {
          input->data.f[idx++] = sensorData.cycleData[t][s];
        }
      }
    } else {
      // Otherwise use the current sensor values
      // This will be less accurate but allows for real-time feedback
      int idx = 0;
      for (int t = 0; t < TEMP_CYCLE_POINTS; t++) {
        for (int i = 0; i < NUM_MOS_SENSORS; i++) {
          input->data.f[idx++] = sensorData.mosValues[i];
        }
        for (int i = 0; i < NUM_CP_SENSORS; i++) {
          input->data.f[idx++] = sensorData.cpValues[i];
        }
      }
    }
    
    xSemaphoreGive(dataAccessMutex);
  }
  
  // Run inference
  Serial.println("Running inference...");
  TfLiteStatus invoke_status = interpreter->Invoke();
  
  if (invoke_status != kTfLiteOk) {
    Serial.println("Invoke failed");
    return;
  }
  
  // Output tensor structure:
  // - First N values: compound classification probabilities (N = number of compounds)
  // - Last value: concentration estimation

  // Define compound names (must match model training order)
  const char* compounds[] = {"Ethanol", "Ethyl Acetate", "Benzaldehyde", "Acetone"};
  int numCompounds = sizeof(compounds) / sizeof(compounds[0]);
  
  // Find the compound with highest probability
  float maxProb = 0;
  int maxIdx = -1;
  
  for (int i = 0; i < numCompounds; i++) {
    if (output->data.f[i] > maxProb) {
      maxProb = output->data.f[i];
      maxIdx = i;
    }
  }
  
  // Get concentration estimate (last output value)
  float concentration = output->data.f[numCompounds];
  
  // Update detection result
  if (maxProb > DETECTION_THRESHOLD) {
    strncpy(latestResult.compound, compounds[maxIdx], sizeof(latestResult.compound) - 1);
    latestResult.confidence = maxProb;
    latestResult.concentration = concentration;
    latestResult.timestamp = millis();
    latestResult.detected = true;
    
    // Log detection
    char logMsg[64];
    snprintf(logMsg, sizeof(logMsg), "Detected %s (%.1f ppm, %.1f%% confidence)",
             latestResult.compound, latestResult.concentration, latestResult.confidence * 100);
    logEvent(logMsg);
    
    // Trigger adaptive pump if needed
    onDetectionEvent(concentration);
  } else {
    // No confident detection
    latestResult.detected = false;
  }
}

void processInferenceResults() {
  // Process the results from the inference
  // This could include filtering, tracking, notification, etc.
  
  // Example: Change system state based on detection
  if (latestResult.detected) {
    // If we're currently in temp cycling, don't change state
    if (currentState != STATE_TEMP_CYCLING) {
      // Enable active sensing mode for more frequent readings
      changeSystemState(STATE_ACTIVE_SENSING);
    }
    
    // Update display with new detection
    displayUpdateRequired = true;
  } else {
    // If no detection for a while, return to idle
    static uint32_t lastDetectionTime = 0;
    if (latestResult.detected) {
      lastDetectionTime = millis();
    } else if (currentState == STATE_ACTIVE_SENSING && 
               (millis() - lastDetectionTime > 30000)) {
      // No detection for 30 seconds, return to idle
      changeSystemState(STATE_IDLE);
    }
  }
}

//==============================================================================
// Ranging Functions
//==============================================================================

void measureDistances() {
  // Measure distances using ultrasonic sensors
  
  // Front sensor
  digitalWrite(US_FRONT_TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(US_FRONT_TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(US_FRONT_TRIG_PIN, LOW);
  
  // Measure echo pulse duration
  long frontDuration = pulseIn(US_FRONT_ECHO_PIN, HIGH, 30000);
  
  // Calculate distance in cm (sound speed = 343m/s = 34300cm/s)
  // Distance = (duration * speed of sound) / 2 (round trip)
  uint16_t frontDistance = (frontDuration * 343) / 20000;
  
  // Left sensor (similar measurement)
  digitalWrite(US_LEFT_TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(US_LEFT_TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(US_LEFT_TRIG_PIN, LOW);
  
  long leftDuration = pulseIn(US_LEFT_ECHO_PIN, HIGH, 30000);
  uint16_t leftDistance = (leftDuration * 343) / 20000;
  
  // Right sensor (similar measurement)
  digitalWrite(US_RIGHT_TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(US_RIGHT_TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(US_RIGHT_TRIG_PIN, LOW);
  
  long rightDuration = pulseIn(US_RIGHT_ECHO_PIN, HIGH, 30000);
  uint16_t rightDistance = (rightDuration * 343) / 20000;
  
  // Store the distance measurements
  rangingData.frontDistance = frontDistance;
  rangingData.leftDistance = leftDistance;
  rangingData.rightDistance = rightDistance;
  
  // Limit values to maximum range
  if (rangingData.frontDistance > MAX_RANGE_CM) rangingData.frontDistance = MAX_RANGE_CM;
  if (rangingData.leftDistance > MAX_RANGE_CM) rangingData.leftDistance = MAX_RANGE_CM;
  if (rangingData.rightDistance > MAX_RANGE_CM) rangingData.rightDistance = MAX_RANGE_CM;
  
  // Check if any valid readings were obtained
  rangingData.targetDetected = (rangingData.frontDistance < MAX_RANGE_CM ||
                               rangingData.leftDistance < MAX_RANGE_CM ||
                               rangingData.rightDistance < MAX_RANGE_CM);
}

void triangulateSource() {
  // Simple triangulation based on the three sensor readings
  
  // Check if we have valid readings
  if (!rangingData.targetDetected) {
    return;
  }
  
  // Calculate angle to source based on left-right difference
  // This is a simplified calculation
  if (rangingData.leftDistance < rangingData.rightDistance) {
    // Source is more towards the left
    float angleFactor = (float)(rangingData.rightDistance - rangingData.leftDistance) /
                        (rangingData.rightDistance + rangingData.leftDistance);
    rangingData.angleToSource = -90 * angleFactor;  // -90 to 0 degrees (left side)
  } else {
    // Source is more towards the right
    float angleFactor = (float)(rangingData.leftDistance - rangingData.rightDistance) /
                        (rangingData.leftDistance + rangingData.rightDistance);
    rangingData.angleToSource = 90 * angleFactor;  // 0 to 90 degrees (right side)
  }
  
  // Estimate distance based on the smallest reliable reading
  // or a weighted average of readings
  uint16_t minDistance = rangingData.frontDistance;
  if (rangingData.leftDistance < minDistance) minDistance = rangingData.leftDistance;
  if (rangingData.rightDistance < minDistance) minDistance = rangingData.rightDistance;
  
  rangingData.estimatedDistance = minDistance;
  
  // Log the result
  char logMsg[64];
  snprintf(logMsg, sizeof(logMsg), "Source located: %d cm at %d degrees",
           rangingData.estimatedDistance, rangingData.angleToSource);
  logEvent(logMsg);
}

//==============================================================================
// UI Functions
//==============================================================================

void updateDisplay() {
  if (xSemaphoreTake(displayMutex, portMAX_DELAY) == pdTRUE) {
    // Clear display
    tft.fillScreen(TFT_BLACK);
    
    // Draw appropriate screen based on system state
    switch (currentState) {
      case STATE_IDLE:
      case STATE_ACTIVE_SENSING:
        if (latestResult.detected) {
          drawResultScreen();
        } else {
          drawStatusScreen();
        }
        break;
        
      case STATE_TEMP_CYCLING:
        drawSensorScreen();
        break;
        
      case STATE_CALIBRATION:
        // Draw calibration screen
        tft.setCursor(0, 0);
        tft.println("Calibration Mode");
        // Additional calibration UI
        break;
        
      case STATE_ERROR:
        // Draw error screen
        tft.setCursor(0, 0);
        tft.println("ERROR");
        tft.println(systemStatus.errorMessage);
        break;
        
      default:
        drawStatusScreen();
        break;
    }
    
    xSemaphoreGive(displayMutex);
  }
}

void drawStatusScreen() {
  // Draw status screen with system information
  tft.setCursor(0, 0);
  tft.println("OdAR System");
  
  // Draw battery status
  tft.setCursor(0, 30);
  tft.print("Battery: ");
  tft.print(systemStatus.batteryPercentage, 0);
  tft.println("%");
  
  // Draw environmental data
  tft.setCursor(0, 50);
  tft.print("Temp: ");
  tft.print(sensorData.temperature, 1);
  tft.println("C");
  
  tft.setCursor(0, 70);
  tft.print("Humidity: ");
  tft.print(sensorData.humidity, 1);
  tft.println("%");
  
  // Draw system state
  tft.setCursor(0, 100);
  tft.print("State: ");
  switch (currentState) {
    case STATE_IDLE: tft.println("Idle"); break;
    case STATE_ACTIVE_SENSING: tft.println("Active"); break;
    case STATE_TEMP_CYCLING: tft.println("Temp Cycle"); break;
    case STATE_CALIBRATION: tft.println("Calibration"); break;
    case STATE_ERROR: tft.println("ERROR"); break;
    default: tft.println("Unknown"); break;
  }
  
  // Draw uptime
  tft.setCursor(0, 120);
  tft.print("Uptime: ");
  uint32_t hours = systemStatus.uptime / 3600;
  uint32_t minutes = (systemStatus.uptime % 3600) / 60;
  uint32_t seconds = systemStatus.uptime % 60;
  tft.printf("%02lu:%02lu:%02lu", hours, minutes, seconds);
}

void drawSensorScreen() {
  // Draw sensor data screen
  tft.setCursor(0, 0);
  tft.println("Sensor Data");
  
  // Draw temperature cycle information
  tft.setCursor(0, 30);
  tft.print("Cycle: ");
  tft.print(sensorData.tempCycleIndex + 1);
  tft.print("/");
  tft.println(TEMP_CYCLE_POINTS);
  
  tft.setCursor(0, 50);
  tft.print("Temp: ");
  tft.print(sensorData.temperature, 1);
  tft.println("C");
  
  // Draw sensor values (abbreviated)
  tft.setCursor(0, 80);
  tft.println("MOS Sensors:");
  
  for (int i = 0; i < NUM_MOS_SENSORS; i++) {
    tft.setCursor(10, 100 + i * 20);
    tft.print(i + 1);
    tft.print(": ");
    
    // Format based on magnitude (kOhm)
    if (sensorData.mosValues[i] > 1000000) {
      tft.print(sensorData.mosValues[i] / 1000000.0, 2);
      tft.println(" MOhm");
    } else if (sensorData.mosValues[i] > 1000) {
      tft.print(sensorData.mosValues[i] / 1000.0, 2);
      tft.println(" kOhm");
    } else {
      tft.print(sensorData.mosValues[i], 2);
      tft.println(" Ohm");
    }
  }
}

void drawResultScreen() {
  // Draw detection result screen
  tft.setCursor(0, 0);
  tft.println("Detection Result");
  
  // Draw compound information
  tft.setCursor(0, 30);
  tft.print("Compound: ");
  tft.println(latestResult.compound);
  
  tft.setCursor(0, 50);
  tft.print("Concentration: ");
  tft.print(latestResult.concentration, 1);
  tft.println(" ppm");
  
  tft.setCursor(0, 70);
  tft.print("Confidence: ");
  tft.print(latestResult.confidence * 100, 1);
  tft.println("%");
  
  // Draw ranging information if available
  if (rangingData.targetDetected) {
    tft.setCursor(0, 100);
    tft.println("Source Location:");
    
    tft.setCursor(10, 120);
    tft.print("Distance: ");
    tft.print(rangingData.estimatedDistance);
    tft.println(" cm");
    
    tft.setCursor(10, 140);
    tft.print("Angle: ");
    tft.print(rangingData.angleToSource);
    tft.println(" deg");
  }
  
  // Draw time since detection
  uint32_t timeSinceDetection = (millis() - latestResult.timestamp) / 1000;
  tft.setCursor(0, 170);
  tft.print("Detected ");
  tft.print(timeSinceDetection);
  tft.println("s ago");
}

void handleButtonEvents() {
  // Read button states
  static bool prevMenuBtn = true;
  static bool prevSelectBtn = true;
  static bool prevBackBtn = true;
  
  bool menuBtn = digitalRead(BUTTON_MENU_PIN);
  bool selectBtn = digitalRead(BUTTON_SELECT_PIN);
  bool backBtn = digitalRead(BUTTON_BACK_PIN);
  
  // Detect button presses (HIGH to LOW transitions)
  if (prevMenuBtn && !menuBtn) {
    // Menu button pressed
    Serial.println("Menu button pressed");
    
    // Cycle through display modes or menu options
    // This could be expanded to a full menu system
    displayUpdateRequired = true;
    
    // Update last user action time for sleep timeout
    lastUserActionTime = millis();
  }
  
  if (prevSelectBtn && !selectBtn) {
    // Select button pressed
    Serial.println("Select button pressed");
    
    // Action depends on current state
    switch (currentState) {
      case STATE_IDLE:
        // Start temperature cycling from idle
        startTempCycle();
        break;
        
      case STATE_TEMP_CYCLING:
        // No action during temp cycling
        break;
        
      case STATE_ERROR:
        // Acknowledge error
        if (systemStatus.errorFlag) {
          systemStatus.errorFlag = false;
          strcpy(systemStatus.errorMessage, "");
          changeSystemState(STATE_IDLE);
        }
        break;
        
      default:
        break;
    }
    
    displayUpdateRequired = true;
    lastUserActionTime = millis();
  }
  
  if (prevBackBtn && !backBtn) {
    // Back button pressed
    Serial.println("Back button pressed");
    
    // Action depends on current state
    switch (currentState) {
      case STATE_ACTIVE_SENSING:
        // Return to idle from active sensing
        changeSystemState(STATE_IDLE);
        break;
        
      case STATE_SLEEP:
        // Wake from sleep
        if (!displayOn) {
          displayOn = true;
          displayUpdateRequired = true;
        }
        break;
        
      default:
        break;
    }
    
    lastUserActionTime = millis();
  }
  
  // Update previous button states
  prevMenuBtn = menuBtn;
  prevSelectBtn = selectBtn;
  prevBackBtn = backBtn;
}

//==============================================================================
// Power Management Functions
//==============================================================================

float readBatteryVoltage() {
  // Read the battery voltage from ADC
  uint32_t adcReading = 0;
  
  // Take multiple readings and average
  const int numReadings = 10;
  for (int i = 0; i < numReadings; i++) {
    adcReading += analogRead(BATTERY_ADC_PIN);
    delay(1);
  }
  adcReading /= numReadings;
  
  // Convert ADC reading to voltage
  // Assuming voltage divider to scale battery voltage to ADC range
  // Example: 2:1 voltage divider for 3.7V Li-Ion battery
  // ADC Reference = 3.3V, Resolution = 12 bits (0-4095)
  float voltage = (adcReading / 4095.0) * 3.3 * 2.0;
  
  return voltage;
}

void calculateBatteryPercentage() {
  // Calculate battery percentage based on voltage
  float voltage = systemStatus.batteryVoltage;
  
  // Li-Ion battery voltage range: ~3.0V (empty) to ~4.2V (full)
  float percentage = (voltage - 3.0) / (4.2 - 3.0) * 100.0;
  
  // Constrain to 0-100%
  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;
  
  systemStatus.batteryPercentage = percentage;
}

void checkLowPowerCondition() {
  // Update battery voltage reading periodically
  static uint32_t lastBatteryCheck = 0;
  if (millis() - lastBatteryCheck > 60000) {  // Check every minute
    systemStatus.batteryVoltage = readBatteryVoltage();
    calculateBatteryPercentage();
    lastBatteryCheck = millis();
  }
  
  // Check for low battery
  if (systemStatus.batteryVoltage < BATTERY_LOW_THRESHOLD) {
    if (currentState != STATE_LOW_POWER) {
      // Enter low power state
      changeSystemState(STATE_LOW_POWER);
      logEvent("Low battery warning");
    }
    
    // If battery is critically low, prepare for shutdown
    if (systemStatus.batteryVoltage < BATTERY_CRITICAL_THRESHOLD) {
      logEvent("Critical battery level, entering deep sleep");
      delay(1000);  // Ensure log message is processed
      enterDeepSleep();
    }
  }
}

void enterDeepSleep() {
  // Prepare for deep sleep
  
  // Disable all sensors
  // Specific implementation depends on sensor hardware
  
  // Turn off display
  if (xSemaphoreTake(displayMutex, portMAX_DELAY) == pdTRUE) {
    // Display goodbye message
    tft.fillScreen(TFT_BLACK);
    tft.setCursor(0, 0);
    tft.println("Shutting down...");
    tft.println("Low battery");
    
    delay(2000);  // Show message for 2 seconds
    
    // Turn off display (if hardware supports it)
    // Implementation depends on display hardware
    
    xSemaphoreGive(displayMutex);
  }
  
  // Turn off all peripherals to save power
  // Implementation depends on hardware configuration
  
  // Configure wake sources (e.g., button press)
  esp_sleep_enable_ext0_wakeup((gpio_num_t)BUTTON_MENU_PIN, 0);  // Wake on button press (LOW)
  
  // Enter deep sleep
  Serial.println("Entering deep sleep mode");
  delay(100);  // Ensure serial message is sent
  
  esp_deep_sleep_start();
  
  // Execution will not reach here until after wake from deep sleep
}

//==============================================================================
// Utility Functions
//==============================================================================

void changeSystemState(SystemState newState) {
  // Update system state and log the change
  SystemState oldState = currentState;
  currentState = newState;
  
  // Log state change
  char logMsg[64];
  snprintf(logMsg, sizeof(logMsg), "State change: %d -> %d", oldState, newState);
  logEvent(logMsg);
  
  // Perform state-specific actions
  switch (newState) {
    case STATE_IDLE:
      // Enter idle mode
      // Reduce sampling rates, duty cycle, etc.
      break;
      
    case STATE_ACTIVE_SENSING:
      // Enter active sensing mode
      // Increase sampling rates, etc.
      break;
      
    case STATE_TEMP_CYCLING:
      // This is handled by startTempCycle()
      break;
      
    case STATE_CALIBRATION:
      // Enter calibration mode
      // Specific actions depend on calibration procedure
      break;
      
    case STATE_ERROR:
      // System error state
      // Log and display error message
      break;
      
    case STATE_LOW_POWER:
      // Enter low power mode
      // Reduce functionality to conserve power
      break;
      
    case STATE_SLEEP:
      // Enter sleep mode
      displayOn = false;
      // Specific sleep implementation depends on hardware
      break;
      
    default:
      break;
  }
  
  // Update display to reflect new state
  displayUpdateRequired = true;
}

void logEvent(const char* event) {
  // Log an event with timestamp
  Serial.print(millis());
  Serial.print(" [INFO] ");
  Serial.println(event);
  
  // In a real implementation, this would also write to SD card
  // or other persistent storage
}

void logError(const char* error) {
  // Log an error with timestamp
  Serial.print(millis());
  Serial.print(" [ERROR] ");
  Serial.println(error);
  
  // Update system status
  systemStatus.errorFlag = true;
  strncpy(systemStatus.errorMessage, error, sizeof(systemStatus.errorMessage) - 1);
  
  // Change to error state
  changeSystemState(STATE_ERROR);
  
  // In a real implementation, this would also write to SD card
  // or other persistent storage
}

void printSystemStatus() {
  // Print current system status to serial (for debugging)
  Serial.println("=== OdAR System Status ===");
  Serial.print("State: ");
  Serial.println(currentState);
  
  Serial.print("Battery: ");
  Serial.print(systemStatus.batteryVoltage);
  Serial.print("V (");
  Serial.print(systemStatus.batteryPercentage);
  Serial.println("%)");
  
  Serial.print("Uptime: ");
  Serial.print(systemStatus.uptime);
  Serial.println(" seconds");
  
  Serial.print("Temperature: ");
  Serial.print(sensorData.temperature);
  Serial.println("°C");
  
  Serial.print("Humidity: ");
  Serial.print(sensorData.humidity);
  Serial.println("%");
  
  Serial.print("Error flag: ");
  Serial.println(systemStatus.errorFlag);
  
  if (systemStatus.errorFlag) {
    Serial.print("Error message: ");
    Serial.println(systemStatus.errorMessage);
  }
  
  Serial.println("===========================");
}