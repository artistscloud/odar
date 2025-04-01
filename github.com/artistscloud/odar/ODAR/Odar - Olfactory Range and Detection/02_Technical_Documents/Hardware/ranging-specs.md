# OdAR System: Ranging System Technical Specifications

## 1. System Overview

### 1.1 Functional Description
The OdAR Ranging System provides spatial awareness and source localization capabilities through multi-point distance measurement. The system employs ultrasonic ranging as the primary technology, with optional Time-of-Flight (ToF) enhancement for improved accuracy.

### 1.2 Core Capabilities
- **Detection Range**: 0.2m to 4.0m (ultrasonic), up to 4.0m (ToF)
- **Angular Coverage**: 360° horizontal through strategic sensor placement
- **Source Localization**: Triangulation-based positioning with ±20cm accuracy
- **Sampling Rate**: 1-10Hz, adjustable based on application requirements
- **Integration**: Fully integrated with olfactory detection for combined chemical-spatial mapping

## 2. Hardware Components

### 2.1 Primary Ultrasonic Sensors
- **Model**: HC-SR04 or equivalent
- **Quantity**: 3 sensors minimum configuration
- **Dimensions**: 45mm × 20mm × 15mm per sensor
- **Weight**: 10g per sensor
- **Operating Voltage**: 5V DC ±5%
- **Current Consumption**:
  - Active: 15mA typical
  - Standby: <2mA
  - Peak: 20mA during ping transmission

#### 2.1.1 Sensor Specifications
- **Transducer Frequency**: 40 kHz ±1kHz
- **Beam Angle**: 15° (effective), 30° (total)
- **Range**: 
  - Minimum: 2cm (hardware limit)
  - Maximum: 4m (in optimal conditions)
  - Reliable: 2cm to 3m (±2cm accuracy)
- **Resolution**: 3mm theoretical, 1cm practical
- **Accuracy**: ±2cm in controlled environments
- **Temperature Compensation**: Software-based correction factors
- **Sampling Rate**: Up to 20Hz per sensor (50ms cycle)
- **Interface**: Digital (Trigger/Echo) direct to microcontroller
- **Connector**: 4-pin JST PH 2.0mm (VCC, Trigger, Echo, GND)

#### 2.1.2 Sensor Placement
- **Front Sensor**: Center front of device, facing forward (0°)
- **Left Sensor**: Left side of device, facing 90° counter-clockwise from front
- **Right Sensor**: Right side of device, facing 90° clockwise from front
- **Mounting**: Recessed 2mm from outer enclosure surface
- **Alignment**: ±1° mechanical alignment tolerance
- **Isolation**: Vibration-damping mounting to prevent mechanical crosstalk

### 2.2 Optional Time-of-Flight (ToF) Sensor
- **Model**: VL53L1X or equivalent
- **Quantity**: 1 sensor
- **Dimensions**: 4.9mm × 2.5mm × 1.56mm
- **Weight**: <1g
- **Operating Voltage**: 3.3V DC
- **Current Consumption**:
  - Active: 20mA typical
  - Standby: 5μA
  - Peak: 40mA

#### 2.2.1 ToF Sensor Specifications
- **Technology**: Time-of-Flight (ToF) with 940nm VCSEL emitter
- **Range**: 
  - Minimum: 4cm
  - Maximum: 4m
  - Optimal: 10cm to 2m (±1cm accuracy)
- **Field of View**: 27° diagonal
- **Resolution**: 1mm theoretical
- **Accuracy**: ±1cm in optimal conditions
- **Maximum Update Rate**: 50Hz
- **Interface**: I²C (400kHz Fast Mode)
- **Address**: 0x29 (7-bit)
- **Connector**: 5-pin JST SH 1.0mm (VCC, GND, SCL, SDA, INT)

#### 2.2.2 ToF Sensor Placement
- **Location**: Center front of device, adjacent to front ultrasonic sensor
- **Orientation**: Parallel to front ultrasonic sensor axis
- **Mounting**: Surface mount on PCB with optical aperture

### 2.3 Signal Conditioning Hardware
- **Ultrasonic Trigger Circuit**:
  - **Buffer**: 74HC125 or equivalent
  - **Pulse Generation**: Microcontroller GPIO with 10μs pulse width
  - **Timing Accuracy**: ±0.5μs
  
- **Ultrasonic Echo Circuit**:
  - **Protection**: Schottky diode clamp to 3.3V
  - **Pull-down Resistor**: 10kΩ
  - **Filter**: RC low-pass filter (1kΩ / 10nF) for noise reduction

- **ToF Interface Circuit**:
  - **Level Shifter**: Required if microcontroller is 5V
  - **Pull-up Resistors**: 4.7kΩ on SCL/SDA lines
  - **Interrupt Line**: Direct to ESP32 GPIO with 10kΩ pull-up

## 3. Ranging System Software

### 3.1 Ultrasonic Measurement Algorithm
- **Measurement Technique**: Pulse-echo time measurement
- **Speed of Sound Calibration**:
  - Base value: 343.2 m/s at 20°C
  - Temperature compensation: +0.6 m/s per °C
  - Formula: v = 331.3 + 0.606 × T (where T is temperature in °C)
- **Sampling Sequence**:
  - Sequential triggering to prevent crosstalk
  - 60ms minimum delay between adjacent sensor triggers
  - Complete 3-sensor cycle in 180ms (5.5Hz maximum update rate)
- **Distance Calculation**:
  ```
  Distance (m) = (Echo_pulse_width_μs × Speed_of_sound_m_per_s) / 2 / 1,000,000
  ```
- **Minimum Valid Pulse Width**: 150μs (corresponds to minimum range)
- **Maximum Valid Pulse Width**: 25,000μs (corresponds to maximum range)
- **Timeout Handling**: Echo timeout after 30ms (assumes out of range)

### 3.2 ToF Measurement Configuration
- **Ranging Mode**: Continuous ranging, timed throttled
- **Distance Mode**: Long distance mode (up to 4m)
- **Timing Budget**: 33ms (optimization for range over speed)
- **Intermeasurement Period**: 50ms (20Hz maximum update rate)
- **Region of Interest (ROI)**:
  - X-center: 8
  - Y-center: 8
  - Width: 16
  - Height: 16
- **Signal Threshold**: 15 MCPS (Mega Counts Per Second)
- **Sigma Threshold**: 15mm standard deviation

### 3.3 Sensor Fusion
- **Data Pre-processing**:
  - Moving average filter: 3-sample window for ultrasonic data
  - Outlier rejection: Discard measurements outside 3σ
  - Confidence metrics: Based on signal strength and consistency

- **Multi-Sensor Fusion**:
  - Primary Algorithm: Triangulation based on multiple distance measurements
  - Weighting: Inversely proportional to measurement variance
  - ToF Integration: Higher weight given to ToF measurements when available
  - Fusion Rate: 5Hz standard, configurable up to 10Hz

### 3.4 Triangulation Algorithm
- **Position Estimation Technique**: Trilateration from fixed sensor positions
- **Coordinate System**:
  - Origin: Center of device
  - X-axis: Forward direction
  - Y-axis: Left direction
  - Z-axis: Upward direction (not actively used)
- **Algorithm Implementation**:
  - Non-linear least squares optimization
  - Gauss-Newton or Levenberg-Marquardt method
  - Initial guess: Point in direction of sensor with minimum distance
  - Convergence criteria: <1cm position change or maximum 10 iterations
- **Error Handling**:
  - Fallback to last known position if triangulation fails
  - Progressive degradation of position certainty when sensors disagree
  - Kalman filtering for tracking moving sources

## 4. Calibration Procedures

### 4.1 Factory Calibration
- **Calibration Jig Requirements**:
  - Precision target positions at 50cm, 100cm, 200cm, 300cm
  - Target materials: Flat acrylic for consistent ultrasonic reflection
  - Temperature monitoring: ±0.5°C accuracy
  - Humidity monitoring: ±3% RH accuracy

- **Ultrasonic Calibration Procedure**:
  1. Measure ambient temperature and humidity
  2. Place calibration targets at precise known distances
  3. Perform 100 measurements at each distance
  4. Calculate scale factor and offset for each sensor
  5. Store calibration parameters in non-volatile memory

- **ToF Calibration Procedure**:
  1. Cross-Talk Calibration: Cover sensor with specific calibration material
  2. Offset Calibration: Measure against reference target at 10cm
  3. Xtalk and offset parameters stored in non-volatile memory

### 4.2 Field Calibration
- **Temperature Compensation**:
  - Automatic adjustment based on internal temperature sensor
  - Recalibration triggered by >10°C temperature change

- **Environmental Adaptation**:
  - Background calibration during idle periods
  - Automatic sensitivity adjustment for different environments
  - Manual calibration mode accessible through device menu

- **Calibration Verification**:
  - Built-in self-test on startup
  - Automatic detection of significant sensor drift
  - Warning indication when recalibration recommended

## 5. Performance Specifications

### 5.1 Static Measurement Performance
- **Static Range Accuracy**:
  - Ultrasonic: ±2cm from 20cm to 3m (ideal conditions)
  - ToF (when equipped): ±1cm from 10cm to 2m (ideal conditions)
  - Combined system: ±1.5cm when all sensors functional
- **Range Resolution**:
  - Ultrasonic: 1cm practical resolution
  - ToF: 1mm practical resolution
- **Angular Resolution**: Approximately 15° horizontal
- **False Detection Rate**: <0.1% at SNR >20dB
- **Environmental Performance**:
  - Temperature impact: <1mm/°C from calibrated condition
  - Humidity impact: <2mm/10% RH from calibrated condition
  - Airflow impact: <5mm with 2m/s airflow

### 5.2 Dynamic Tracking Performance
- **Maximum Tracking Speed**: 0.5 m/s
- **Tracking Latency**: <200ms (end-to-end)
- **Position Update Rate**: 5Hz standard, 10Hz maximum
- **Dynamic Accuracy**: ±20cm for objects moving at 0.5 m/s
- **Multi-target Discrimination**:
  - Minimum separation: 50cm between targets
  - Maximum targets: 3 simultaneous targets
- **Noise Immunity**:
  - Ultrasonic rejection of 40kHz cross-talk >20dB
  - Optical interference rejection for ToF >10dB

### 5.3 Source Localization Performance
- **Localization Accuracy**:
  - Within 1m range: ±10cm
  - Within 2m range: ±20cm
  - Within 3m range: ±30cm
- **Confidence Metrics**:
  - High confidence: 3 sensors with consistent readings
  - Medium confidence: 2 sensors with consistent readings
  - Low confidence: Single sensor or inconsistent readings
- **Moving Source Characterization**:
  - Direction of movement: ±15° accuracy
  - Velocity estimation: ±0.2 m/s accuracy

## 6. System Integration

### 6.1 Hardware Integration
- **Mechanical Integration**:
  - Sensor housings: Integrated into enclosure with waterproof design
  - Cable routing: Internal channels for sensor connections
  - Structural support: Rigid mounting to prevent vibration interference

- **Electrical Integration**:
  - Power Supply: 5V for ultrasonic sensors, 3.3V for ToF sensor
  - Signal Connections: Direct to ESP32 GPIO pins
  - EMI Protection: Shielded cables for signal lines
  - Ground design: Star grounding to prevent ground loops

- **Thermal Management**:
  - Maximum operating temperature: 70°C
  - Thermal isolation: Sensors separated from heat-generating components
  - Temperature monitoring: Dedicated temperature sensor for compensation

### 6.2 Software Integration
- **Firmware Structure**:
  - Dedicated Ranging Module in firmware
  - RTOS task with priority 4, 2KB stack
  - 10ms execution cycle for ranging control
  - Data sharing via message queues to data processing task

- **Data Structures**:
  - Raw distance measurements stored in circular buffer
  - Processed position estimates with timestamp and confidence
  - Combined olfactory-spatial data structure for mapping

- **API Endpoints**:
  - Distance queries: Get latest distance to nearest object
  - Position queries: Get estimated position of odor source
  - Tracking history: Get trajectory of moving object
  - Raw data access: For diagnostic and development purposes

### 6.3 Olfactory-Spatial Data Fusion
- **Combined Data Format**:
  - Timestamp: millisecond precision
  - Coordinates: (x, y) in device-relative coordinates
  - Chemical concentration: Normalized 0-100 scale
  - Confidence: 0-100 scale for position and chemical detection
  - Temperature: From sensor array temperature control

- **Spatial Mapping Formats**:
  - Grid-based representation: 10cm × 10cm cells
  - Point cloud: Dynamic points with concentration values
  - Heat map: Interpolated concentration visualization
  - Vector field: Direction estimation for source tracking

- **Storage Requirements**:
  - Raw measurement data: 20 bytes per sample
  - Processed map data: ~10KB for 10m² area
  - Historical tracking: Circular buffer, configurable depth

## 7. Power Management

### 7.1 Power Consumption
- **Ultrasonic Sensors**:
  - Active mode (all sensors): 45mA @ 5V (225mW)
  - Per-sensor active: 15mA @ 5V (75mW)
  - Standby mode: <6mA @ 5V (30mW)
  - Duty cycle: 25% typical operation

- **ToF Sensor** (when equipped):
  - Active mode: 20mA @ 3.3V (66mW)
  - Standby mode: 5μA @ 3.3V (16.5μW)
  - Duty cycle: 35% typical operation

- **Total Ranging System**:
  - Peak power: 291mW (all sensors active)
  - Average power: ~100mW (typical operation)
  - Sleep mode: <2mW

### 7.2 Power Optimization Strategies
- **Duty Cycling**:
  - Dynamic measurement rate based on activity detection
  - Reduced rate (1Hz) when device stationary
  - Increased rate (5-10Hz) when motion detected

- **Selective Activation**:
  - Sequential sensor activation to reduce peak current
  - Sector-based activation when direction is known
  - Sensor hibernation during extended idle periods

- **Low-Power Modes**:
  - Sleep mode: All sensors powered down except for wake trigger
  - Wake conditions: Motion detection, timer expiry, user interaction
  - Wake-up time: <100ms from sleep to active ranging

## 8. Testing and Validation Methods

### 8.1 Factory Testing
- **Functional Test Sequence**:
  1. Power-on self-test of all sensors
  2. Distance measurement verification at 50cm fixed target
  3. Multi-sensor correlation check
  4. Temperature compensation validation
  5. Communication interface verification
  6. Power consumption measurement

- **Test Equipment Requirements**:
  - Ultrasonic test fixture with precision distance targets
  - Power analyzer with 1mA resolution
  - Environmental chamber for temperature variation testing
  - Automated test software with pass/fail criteria

- **Quality Control Metrics**:
  - 100% functional testing of all units
  - Statistical process control for sensor performance
  - Acceptance criterion: ±3cm accuracy at 1m target

### 8.2 Field Validation
- **Supplied Validation Tool**:
  - Calibration target with precise reference points
  - Instructions for field verification procedure

- **Validation Procedure**:
  1. Place target at known distance (1m recommended)
  2. Activate calibration mode from device menu
  3. Record multiple measurements in different orientations
  4. Review validation results on device display
  5. Apply calibration correction if outside tolerances

- **Performance Monitoring**:
  - Built-in diagnostics with sensor health indicators
  - Logging of calibration drift over time
  - Automatic alerts for sensor degradation

## 9. Environmental Considerations

### 9.1 Operating Environment
- **Temperature Range**:
  - Specification range: 0°C to +40°C
  - Extended operation: -10°C to +50°C with reduced accuracy
  - Storage range: -20°C to +60°C

- **Humidity Tolerance**:
  - Specification range: 20% to 90% RH, non-condensing
  - Temporary exposure: Up to 95% RH for 30 minutes
  - Recovery time: <10 minutes after condensation event

- **Air Quality Factors**:
  - Dust tolerance: Protected by IP65 enclosure
  - Chemical resistance: Sensors protected from direct exposure
  - Pollutant effects: Minimal impact on ultrasonic, moderate on ToF

### 9.2 Interference Management
- **Acoustic Interference**:
  - Ultrasonic noise rejection: Bandpass filtering around 40kHz
  - Cross-talk prevention: Sequential sensor activation
  - Background noise adaptation: Dynamic threshold adjustment

- **Optical Interference** (ToF sensor):
  - Ambient light rejection: VCSEL pulse coding
  - Optical filtering: 940nm bandpass filter
  - Cover glass: IR-transparent for ToF aperture

- **Electromagnetic Compatibility**:
  - EMI shielding: Enclosure provides >20dB attenuation
  - Signal filtering: Low-pass filters on all sensor lines
  - Grounding: Star ground topology to minimize interference

## 10. Known Limitations and Constraints

### 10.1 Detection Limitations
- **Surface Properties**:
  - Highly absorbent materials (e.g., soft fabric, foam) reduce effective range by up to 50%
  - Specular surfaces (e.g., flat glass) may cause false readings at certain angles
  - Minimum detectable object size: 5cm × 5cm at 2m distance

- **Environmental Limitations**:
  - Heavy precipitation may reduce effective range by up to 30%
  - Temperature gradients >10°C/m may cause beam refraction
  - Strong wind (>5m/s) may reduce accuracy by up to 5cm

- **Range Constraints**:
  - Minimum detection distance: 2cm (hardware limitation)
  - Reliable maximum range: 3m (ultrasonic), 4m (ToF)
  - Dead zones: 10° between adjacent sensor coverage areas

### 10.2 System Constraints
- **Update Rate Limitations**:
  - Maximum update rate: 10Hz with all sensors
  - Minimum measurement cycle: 100ms for complete 3-sensor scan
  - Processing latency: 50ms typical for triangulation calculation

- **Power Constraints**:
  - Continuous operation reduces battery life by approximately 15-20%
  - Peak current during simultaneous sensor operation: 100mA
  - Thermal constraints limit duty cycle to 50% in high-temperature environments

- **Physical Constraints**:
  - Sensor positioning limits angular resolution
  - Enclosure design creates potential blind spots
  - Minimum spacing between sensors limited by cross-talk concerns