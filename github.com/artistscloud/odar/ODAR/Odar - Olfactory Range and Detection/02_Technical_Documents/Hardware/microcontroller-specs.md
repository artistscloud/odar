# OdAR System: Microcontroller System Technical Specifications

## 1. Core Microcontroller

### 1.1 Module Specifications
- **Model**: ESP32-WROOM-32E
- **MCU**: Espressif ESP32-D0WD-V3 dual-core processor
- **Processor**: Xtensa® dual-core 32-bit LX6 microprocessor
- **Clock Speed**: Up to 240 MHz
- **Memory**:
  - **RAM**: 520 KB SRAM
  - **Flash**: 4 MB onboard SPI flash
  - **External Flash Interface**: Supports up to 16 MB
- **Operating Voltage**: 3.0V to 3.6V (nominal 3.3V)
- **Operating Temperature**: -40°C to +85°C
- **Physical Dimensions**: 18.00mm × 25.50mm × 3.10mm
- **PCB Layout Requirements**: 
  - 4-layer PCB recommended 
  - Ground plane under module
  - Minimum trace width: 0.2mm for signals, 0.3mm for power

### 1.2 Peripheral Interfaces
- **GPIO**: 34 programmable GPIOs (some shared with other functions)
- **ADC**: Two 12-bit SAR ADCs, supporting 18 channels
- **DAC**: Two 8-bit channels
- **Touch Sensor**: 10 capacitive touch sensors
- **SPI**: 4 interfaces (2 dedicated for flash and PSRAM)
- **I²C**: 2 interfaces with master/slave mode
- **I²S**: 2 interfaces for digital audio
- **UART**: 3 interfaces
- **Ethernet MAC**: IEEE 802.3 10/100 Mbps
- **SD/SDIO/MMC Host Controller**: 1 interface
- **PWM**: LED PWM controller, 16 channels
- **MCPWM**: 2 interfaces with 6 PWM channels
- **RMT**: 8 channels for infrared remote control
- **Pulse Counter**: 8 units for pulse counting
- **Timer**: 4 × 64-bit general-purpose timers

### 1.3 Wireless Connectivity
- **Wi-Fi**:
  - **Standards**: 802.11 b/g/n (2.4 GHz)
  - **Bandwidth**: HT40 (40 MHz bandwidth)
  - **Range**: Up to 400m open air
  - **Maximum TX Power**: 20 dBm
  - **Antenna**: PCB trace antenna or external U.FL connector
  - **Security**: WPA/WPA2/WPA3/WEP
  - **Network Protocols**: IPv4, IPv6, SSL/TLS, TCP/IP
- **Bluetooth**:
  - **Version**: Bluetooth v4.2 BR/EDR and BLE
  - **Class**: Class 1 (maximum range)
  - **Audio**: A2DP profile support
  - **Data Rate**: Up to 2 Mbps

### 1.4 Low Power Modes
- **Active Mode**: 240mA typical at 240MHz
- **Modem-sleep Mode**: 20mA with CPU operational
- **Light-sleep Mode**: 800µA with ULP co-processor operational
- **Deep-sleep Mode**: 10µA with RTC operational
- **Hibernation Mode**: 5µA with RTC memory retention
- **Power-up Time**: <1ms from deep sleep

## 2. PCB Design Specifications

### 2.1 Board Specifications
- **PCB Dimensions**: 80mm × 60mm × 1.6mm
- **Material**: FR-4, TG150
- **Layers**: 4-layer stackup
- **Trace Width/Spacing**:
  - **Signal Traces**: 0.20mm min width, 0.20mm min spacing
  - **Power Traces**: 0.50mm min width, 0.30mm min spacing
- **Via Specifications**:
  - **Via Diameter**: 0.6mm pad, 0.3mm hole
  - **Micro Vias**: 0.4mm pad, 0.2mm hole (for ESP32 connections)
- **Copper Weight**: 1oz outer layers, 0.5oz inner layers
- **Solder Mask**: Green LPI
- **Silkscreen**: White
- **Surface Finish**: ENIG (Electroless Nickel Immersion Gold)
- **Minimum Annular Ring**: 0.125mm

### 2.2 Circuit Zones
- **Power Management Zone**: Upper left corner
- **Microcontroller Zone**: Center of board
- **Analog Sensor Interface Zone**: Lower left
- **Digital I/O and Communication Zone**: Upper right
- **Expansion and Debug Zone**: Lower right
- **Ground Planes**: Dedicated on layer 2, with strategic splits for analog/digital isolation

### 2.3 Thermal Management
- **Ground Vias**: 0.3mm vias under thermal pads for heat dissipation
- **Thermal Relief**: 4-spoke thermal relief for power pads
- **Critical Components**: >30mil clearance around components that generate heat
- **Thermal Zones**: Copper pours under high-power components

## 3. Power System Specifications

### 3.1 Power Supply Requirements
- **Input Power Options**:
  - **Battery**: 3.7V Li-Ion/Li-Po battery (3000mAh minimum)
  - **USB**: 5V from USB Type-C port
- **Power Management IC**: TI BQ25895 or equivalent
- **Battery Management**:
  - **Charging Current**: Programmable, 1A maximum
  - **Charging Voltage**: 4.2V ±0.5%
  - **Undervoltage Protection**: 3.0V cutoff
  - **Overcurrent Protection**: 2A limit
  - **Temperature Monitoring**: NTC thermistor (10kΩ at 25°C)

### 3.2 Voltage Regulation
- **3.3V Rail**:
  - **Regulator**: TPS62160 or equivalent buck converter
  - **Output Current**: 1A continuous
  - **Efficiency**: >90% at typical loads
  - **Ripple**: <20mVpp
- **2.5V Reference**:
  - **Regulator**: REF3025 or equivalent
  - **Accuracy**: ±0.05%
  - **Temperature Coefficient**: <5ppm/°C
  - **Output Current**: 50mA maximum
- **5V Sensor Supply**:
  - **Regulator**: TPS61021A or equivalent boost converter
  - **Output Current**: 500mA continuous
  - **Efficiency**: >85% at typical loads
  - **Enable Control**: GPIO-controlled for power saving

### 3.3 Power Consumption Budget

| Component | Active Mode | Sleep Mode |
|-----------|-------------|------------|
| ESP32 Core | 240mA | 10µA |
| Wi-Fi Subsystem | 120mA | 0 |
| Bluetooth Subsystem | 30mA | 0 |
| Sensor Array | 140mA | 10µA |
| Temperature Control | 400mA | 0 |
| Ranging System | 100mA | 0 |
| Display & UI | 30mA | 0 |
| **Total (Typical)** | **940mA** | **20µA** |

### 3.4 Power Optimization Features
- **Dynamic Frequency Scaling**: Automatically adjust CPU frequency based on processing load
- **Peripheral Power Control**: Individual power gates for all major subsystems
- **Activity Detection**: Accelerometer-based wake-up
- **Scheduled Operation**: RTC-controlled deep sleep and wake-up cycles
- **Battery Monitoring**: Voltage and current monitoring with 1% accuracy

## 4. Memory Architecture

### 4.1 External Memory Expansion
- **PSRAM**: 8MB QSPI PSRAM (ESP-PSRAM64H or equivalent)
- **Configuration**: Connected via dedicated QSPI interface
- **Access Speed**: 80MHz clock, ~40MB/s throughput
- **Purpose**: Storage of sensor data arrays and ML model parameters

### 4.2 Data Storage
- **Flash Filesystem**: LittleFS for configuration and logs
- **Onboard Flash Allocation**:
  - **Bootloader**: 0x1000-0x8000 (28KB)
  - **Partition Table**: 0x8000-0x9000 (4KB)
  - **NVS**: 0x9000-0xF000 (24KB)
  - **Application**: 0x10000-0x300000 (3MB)
  - **Storage**: 0x300000-0x400000 (1MB)
- **Wear Leveling**: Enabled for flash longevity
- **Backup**: Critical configuration parameters stored in two redundant areas

## 5. Software Architecture

### 5.1 Real-Time Operating System
- **RTOS**: FreeRTOS v10.4.3 or later
- **Task Configuration**:
  - **Main Control Task**: Priority 5, 8KB stack
  - **Sensor Acquisition Task**: Priority 4, 4KB stack
  - **Temperature Control Task**: Priority 4, 2KB stack
  - **Data Processing Task**: Priority 3, 16KB stack
  - **Communication Task**: Priority 2, 4KB stack
  - **User Interface Task**: Priority 1, 4KB stack
- **Inter-Task Communication**: Queue-based with event flags
- **Timing**: Hardware timer-based, 1ms tick rate

### 5.2 Firmware Update Mechanism
- **OTA Updates**: Support for over-the-air firmware updates
- **Update Authentication**: RSA-2048 signature verification
- **Backup Recovery**: Fallback to previous firmware version on update failure
- **Update Security**: Encrypted update package transmission
- **Version Control**: Semantic versioning with build number

### 5.3 Development Requirements
- **IDE**: ESP-IDF v4.4 or later
- **Compiler**: GCC for Xtensa architecture
- **Build System**: CMake-based
- **Debugging Interface**: JTAG via dedicated debug port
- **Code Standards**:
  - **Language**: C/C++
  - **Documentation**: Doxygen-compatible comments
  - **Unit Testing**: Google Test framework
  - **Static Analysis**: Integration with cppcheck

## 6. Peripheral Connections

### 6.1 Sensor Interface
- **Analog Sensors**:
  - **Interface**: 16-bit ADS1115 ADC
  - **Channels**: 8 differential or 16 single-ended
  - **Sample Rate**: 20 SPS per channel
  - **Resolution**: 16-bit effective
  - **Input Range**: Programmable (±0.256V to ±6.144V)
  - **Connector**: 2.54mm pitch header, 20-pin

### 6.2 Ranging Sensor Interface
- **Ultrasonic Sensors**:
  - **Interface**: Digital GPIO (2 pins per sensor - Trigger/Echo)
  - **Timing Precision**: 1µs
  - **Power Control**: Individual enable lines
  - **Connector**: JST PH 2.0mm, 4-pin per sensor

- **ToF Sensor (Optional)**:
  - **Interface**: I²C (address 0x29)
  - **Data Rate**: 400 kHz Fast Mode
  - **Interrupt**: Dedicated GPIO
  - **Connector**: JST SH 1.0mm, 5-pin

### 6.3 User Interface Connections
- **Display**:
  - **Type**: 0.96" OLED
  - **Resolution**: 128×64 pixels
  - **Interface**: I²C (address 0x3C)
  - **Connector**: 4-pin, 2.54mm pitch

- **Buttons**:
  - **Type**: 3 tactile switches with debounce
  - **Interface**: GPIO with pull-up
  - **Connector**: 5-pin, 2.54mm pitch

- **Status LEDs**:
  - **Type**: 3 LEDs (Power, Status, Error)
  - **Interface**: GPIO through current-limiting resistors
  - **Current**: 5mA per LED

### 6.4 Communication Interfaces
- **USB**:
  - **Type**: USB Type-C
  - **Controller**: CP2102N USB-to-UART bridge
  - **Speed**: 921600 baud
  - **Functionality**: Device programming, debugging, data transfer
  - **Protection**: ESD and overcurrent

- **Expansion Port**:
  - **Interface**: 2.54mm pitch header, 10-pin
  - **Signals**: I²C, SPI, UART, 2×GPIO, 3.3V, GND
  - **Protection**: All signals ESD protected

## 7. Temperature Control Specifications

### 7.1 Heating System
- **Heater Type**: Polyimide film heater
- **Heater Resistance**: 10Ω ±5%
- **Power Rating**: 2W maximum
- **Voltage**: 5V
- **Control Method**: PWM via MOSFET (IRLML6344)
- **PWM Frequency**: 20kHz
- **Thermal Coupling**: Direct attachment to sensor substrate
- **Safety**: Thermal fuse (70°C cutoff)

### 7.2 Temperature Sensors
- **Primary Sensor**: LM35 precision temperature sensor
- **Secondary Sensor**: Thermistor (10kΩ at 25°C) for redundancy
- **Measurement Resolution**: 0.1°C
- **Accuracy**: ±0.5°C
- **Sampling Rate**: 10Hz

### 7.3 PID Controller
- **Control Loop Rate**: 10Hz
- **Algorithm**: Digital PID with anti-windup
- **Tunable Parameters**:
  - **Proportional Gain**: 20
  - **Integral Gain**: 0.5
  - **Derivative Gain**: 5
  - **Deadband**: ±0.2°C
- **Response Time**: <5 seconds to reach target temperature
- **Stability**: ±0.5°C at steady state

## 8. Debugging and Testing Interfaces

### 8.1 Debug Port
- **Interface**: 6-pin JST SH 1.0mm
- **Protocol**: JTAG
- **Signals**: TCK, TMS, TDI, TDO, RESET, GND
- **Protection**: ESD protection on all lines

### 8.2 Test Points
- **Power Rails**: 4 (VBAT, 5V, 3.3V, 2.5V)
- **Critical Signals**: 6 (Sensor Enable, Heater Control, I²C Clock/Data, Echo Test)
- **System Status**: 2 (MCU Reset, WDT Output)
- **Form Factor**: 1.5mm circular pads

### 8.3 Production Testing
- **Boundary Scan**: JTAG access for board test
- **Manufacturing Test Mode**: Enabled via boot pin combination
- **Self-Test Procedure**: Automated internal check of all subsystems
- **Test Duration**: <60 seconds for complete verification

## 9. Compliance and Certifications

- **EMC Standards**:
  - CISPR 32/EN 55032 Class B (Emissions)
  - EN 61000-4-2 (ESD Immunity)
  - EN 61000-4-3 (Radiated Immunity)
  - EN 61000-4-4 (Electrical Fast Transient)
  
- **Certifications**:
  - CE (Europe)
  - FCC (USA)
  - IC (Canada)
  - RoHS Compliant
  - REACH Compliant

- **Environmental**:
  - **Operating Temperature**: -10°C to +50°C
  - **Storage Temperature**: -20°C to +60°C
  - **Humidity**: 20% to 90% RH (non-condensing)
  - **Atmospheric Pressure**: 700 to 1060 hPa

- **Reliability**:
  - **MTBF**: >50,000 hours at 25°C
  - **Design Life**: 5 years under normal operating conditions