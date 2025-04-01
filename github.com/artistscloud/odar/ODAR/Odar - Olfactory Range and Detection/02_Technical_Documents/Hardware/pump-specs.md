# OdAR System: Pump Mechanism Technical Specifications

## 1. General Overview

### 1.1 System Purpose
The micro pump subsystem actively delivers ambient air samples to the olfactory sensor array, enhancing odor detection efficiency and response time. This active sampling approach enables more precise chemical detection and concentration measurements compared to passive diffusion methods.

### 1.2 Functional Description
The pump creates negative pressure at the sensor chamber, drawing external air through inlet ports across the sensor array in a controlled manner. This forced airflow ensures consistent sample delivery, reduces response latency, and enables spatial mapping of odor sources when combined with the ranging system.

### 1.3 Key Performance Metrics
- **Dimensions**: 15mm × 15mm × 10mm
- **Flow Rate**: 200-800 mL/min, adjustable
- **Operating Voltage**: 3.3V DC
- **Power Consumption**: 80-250 mW (depending on flow rate)
- **Noise Level**: <35 dBA at 1m distance
- **Lifespan**: >5,000 operating hours
- **Response Time**: Sensor response improved by 40-60% compared to passive diffusion

## 2. Mechanical Specifications

### 2.1 Pump Technology
- **Type**: Diaphragm micropump
- **Operation Principle**: Piezoelectric actuation
- **Displacement Volume**: 11.5 μL per stroke
- **Maximum Pressure**: 
  - **Pressure Mode**: 350 mbar
  - **Vacuum Mode**: -200 mbar
- **Operating Frequency**: 25-100 Hz
- **Self-Priming**: Yes, to -150 mbar
- **Wetted Materials**: 
  - Polyphenylsulfone (PPSU) pump body
  - EPDM diaphragm
  - PTFE valve seats
  - Stainless steel 316L components (where applicable)

### 2.2 Dimensional Specifications
- **External Dimensions**: 15mm × 15mm × 10mm
- **Weight**: 3.8g ±0.2g
- **Inlet/Outlet Port Dimensions**: 
  - Internal diameter: 1.0mm
  - External diameter: 2.0mm (barbed)
- **Mounting Holes**: 4× M1.6 threaded inserts at corners (12mm × 12mm pattern)
- **Clearance Requirements**: 1mm minimum on all sides, 5mm recommended above outlet
- **Orientation Tolerance**: Functions in any orientation

### 2.3 Mechanical Integration
- **Mounting Method**: Secured to enclosure with 4× M1.6 screws
- **Vibration Isolation**: Silicone mounting grommets, 40 Shore A durometer
- **Alignment Features**: Keyed bottom surface for correct orientation
- **Serviceability**: Field-replaceable as complete module
- **Tubing Connection**: Push-fit with 2mm ID × 3mm OD PTFE tubing

### 2.4 Airflow Path
- **Intake Location**: Front of device through filtered inlet port
- **Outlet Path**: Internal tubing to sensor chamber
- **Sensor Chamber Volume**: 5cm³
- **Total Airflow System Volume**: ~10cm³
- **Flow Restriction**: Calibrated orifice (0.8mm diameter) to maintain pressure
- **Air Filter**: Sintered PTFE, 10μm pore size, 10mm diameter

## 3. Electrical Specifications

### 3.1 Electrical Requirements
- **Operating Voltage**: 3.3V DC ±5%
- **Current Consumption**:
  - Startup peak: 120mA for 50ms
  - Minimum flow rate: 25mA at 200 mL/min
  - Maximum flow rate: 75mA at 800 mL/min
  - Standby: <1mA
- **Power Consumption**:
  - Typical operation: 120mW (average)
  - Maximum: 250mW at full flow rate
- **Protection Features**:
  - Reverse polarity protection
  - Overcurrent protection (100mA limit)
  - Thermal shutdown at 85°C

### 3.2 Driver Circuit
- **Driver Type**: H-bridge driver with PWM control
- **Controller IC**: DRV8836 or equivalent
- **PWM Frequency**: 25 kHz (outside audible range)
- **Control Interface**: 
  - PWM input for speed control
  - Direction input for flow reversal (if needed)
  - Enable input for on/off control
- **Feedback**: Current sensing for stall detection
- **Connectors**: 6-pin JST PH 2.0mm (Power, GND, PWM, DIR, EN, FB)

### 3.3 Control System
- **Control Method**: Closed-loop PWM control
- **PWM Resolution**: 8-bit (256 levels)
- **Flow Rate Control**: 
  - 10 discrete levels available through firmware
  - Linear mapping from 20% to 100% duty cycle
- **Feedback Mechanism**:
  - Current monitoring for motor load
  - Optional differential pressure sensor for flow verification
- **Fault Detection**:
  - Stall detection: Current spike >100mA
  - Open circuit: Current <10mA when enabled
  - Blockage: Current increase without flow increase

## 4. Performance Characteristics

### 4.1 Flow Performance
- **Flow Rate Range**: 
  - Minimum: 200 mL/min at 20% PWM
  - Maximum: 800 mL/min at 100% PWM
  - Typical operation: 400 mL/min at 50% PWM
- **Flow Rate Accuracy**: ±10% of setpoint
- **Flow Stability**: <5% variation over operating temperature range
- **Back Pressure Performance**:
  - 800 mL/min at 0 mbar
  - 400 mL/min at 100 mbar
  - 200 mL/min at 200 mbar
  - 0 mL/min at 350 mbar (stall point)

### 4.2 Temporal Characteristics
- **Startup Time**: <100ms from command to stable flow
- **Response Time**: <50ms to change between any two flow rates
- **Warm-up Time**: None required
- **Cool-down Period**: None required
- **Duty Cycle Limitation**: Continuous operation permitted at ≤80% of maximum flow
- **Cycle Life**: >500,000 on/off cycles

### 4.3 Environmental Performance
- **Operating Temperature**: 0°C to +50°C
- **Storage Temperature**: -20°C to +60°C
- **Humidity Range**: 0% to 95% RH, non-condensing
- **Altitude Range**: Sea level to 3,000m
- **Ingress Protection**: IP50 (pump unit only, system provides additional protection)
- **Shock Resistance**: Functional after 50g shock for 11ms
- **Vibration Tolerance**: Functional with 2g sinusoidal vibration (10-500Hz)

### 4.4 Acoustic Performance
- **Sound Pressure Level**:
  - <25 dBA at 30cm (minimum flow)
  - <35 dBA at 30cm (maximum flow)
- **Frequency Characteristics**: 
  - Primary frequency: 25-100 Hz (below typical human hearing)
  - Harmonics: Minimized through balanced mechanism design
- **Vibration Isolation**: >60% attenuation through mounting grommets

## 5. Operational Modes and Control

### 5.1 Standard Operating Modes
- **Continuous Mode**: Constant flow at selected rate
- **Pulsed Mode**: Periodic on/off cycling to reduce power consumption
- **Sampling Mode**: Brief high-flow period followed by analysis period
- **Sleep Mode**: Pump disabled, minimal power consumption

### 5.2 Control Integration
- **Software Control Interface**:
  - `pump_set_flow_rate(uint8_t level)`: Set flow rate (0-10)
  - `pump_get_status(void)`: Return operational status and errors
  - `pump_set_mode(pump_mode_t mode)`: Set operational mode
  - `pump_calibrate(void)`: Run self-calibration sequence
- **Automatic Control Features**:
  - Temperature-based flow compensation
  - Automatic flow increase during critical detection events
  - Scheduled sampling for long-term monitoring

### 5.3 Flow Profiles
- **Standard Profile**: 400 mL/min continuous operation
- **Energy-saving Profile**: 200 mL/min with 50% duty cycle (5s on, 5s off)
- **High-sensitivity Profile**: 800 mL/min for 2s, then 300 mL/min
- **Custom Profiles**: User-configurable via firmware update

## 6. Integration with Sensor System

### 6.1 Physical Integration
- **Location**: Mounted above main PCB near temperature control system
- **Airflow Path**:
  - Intake: Filtered port on device exterior
  - Output: Direct connection to sensor chamber
  - Tubing: 2mm ID PTFE, 80mm total length
- **Vibration Isolation**: Silicone grommets to minimize mechanical noise transfer to sensors
- **Thermal Considerations**: 
  - Pump isolated from temperature-controlled sensor chamber
  - Minimum 5mm clearance from heat-generating components

### 6.2 Electrical Integration
- **Power Source**: Shared 3.3V rail with separate LDO regulator
- **Control Connection**: Direct to microcontroller GPIO pins
  - PWM control: Timer output (25 kHz)
  - Enable control: Standard GPIO
  - Feedback: ADC input for current monitoring
- **EMI Considerations**:
  - Shielded cable for motor connections
  - Local bypass capacitors (10μF + 0.1μF)
  - EMI suppression ferrite on power lines

### 6.3 Functional Integration
- **Synchronization with Sensing Cycle**:
  - Pump activated during sampling phase
  - Deactivated during temperature stabilization
  - Customizable timing relative to temperature cycle
- **Data Integration**:
  - Flow rate recorded with each sensor reading
  - Compensation algorithms for flow rate variations
  - Diagnostic data logged for system health monitoring

## 7. Manufacturing and Assembly

### 7.1 Manufacturing Process
- **Pump Body**: Injection molded PPSU
- **Diaphragm**: Precision molded EPDM
- **Valves**: Insert-molded PTFE in PP carrier
- **Assembly Process**: Automated with 100% functional testing
- **Quality Control**:
  - Dimensional inspection: ±0.05mm tolerance
  - Flow rate verification: Each unit tested to specification
  - Leakage test: Pressure decay <5% over 30 seconds at 200 mbar

### 7.2 Assembly Integration
- **Installation Sequence**:
  1. Mount pump to enclosure with vibration isolation grommets
  2. Connect inlet filter assembly
  3. Connect outlet tube to sensor chamber
  4. Connect electrical harness to control PCB
  5. Perform system flow test
- **Required Tools**:
  - Torque screwdriver (0.2 N·m for M1.6 screws)
  - Tube cutter for precise PTFE tube lengths
  - System flow meter for verification
- **Critical Assembly Parameters**:
  - Torque specification: 0.15-0.2 N·m for mounting screws
  - Tube seating: Full insertion + 1mm into barbed ports
  - Connector orientation: Keyed to prevent reverse connection

### 7.3 Test Specifications
- **Functional Test Points**:
  - Flow verification: ±10% of target at 3 setpoints
  - Current consumption: Within 20% of nominal at each setpoint
  - Noise level: <35 dBA at 30cm at maximum flow
  - Pressure generation: >250 mbar at maximum flow
- **Acceptance Criteria**:
  - All flow rates within specified tolerance
  - Current draw within limits
  - No audible rattling or irregular sounds
  - No fluid leakage under pressure

## 8. Reliability and Maintenance

### 8.1 Reliability Specifications
- **Design Life**: 5,000 hours of operation
- **MTBF**: >15,000 hours at 25°C ambient
- **Failure Modes and Effects**:
  - Diaphragm fatigue: Gradual flow reduction
  - Valve wear: Reduced pressure generation
  - Motor failure: Sudden stoppage (rare)
  - Controller failure: Erratic operation (rare)
- **Environmental Durability**:
  - Humidity: No degradation up to 95% RH
  - Temperature cycling: Rated for 1,000 cycles 0°C to 50°C
  - Chemical resistance: Compatible with ambient air contaminants

### 8.2 Maintenance Requirements
- **Preventive Maintenance**:
  - Inlet filter replacement: Every 500 hours of operation
  - Performance verification: Every 1,000 hours of operation
  - Recommended replacement: After 5,000 hours of operation
- **Service Indicators**:
  - Filter change indicator: Based on accumulated runtime
  - Performance degradation alert: Based on current/flow relationship
  - End-of-life prediction: Based on operational statistics
- **Serviceability Features**:
  - Tool-less filter replacement
  - Quick-disconnect tubing connectors
  - Modular replacement of entire pump assembly

### 8.3 Fault Handling
- **Automatic Fault Responses**:
  - Stall condition: Auto-retry 3 times, then disable
  - Overheat condition: Reduce duty cycle, then disable if persistent
  - Current limit: PWM reduction to maintain safe operation
- **Error Reporting**:
  - Status code returned to main controller
  - Detailed diagnostics available via debug interface
  - LED indication of fault conditions on main display

## 9. Packaging and Storage

### 9.1 Packaging Requirements
- **ESD Protection**: Conductive bag with moisture barrier
- **Humidity Indicator**: Included in sealed package
- **Shock Protection**: Minimum 2cm foam cushioning on all sides
- **Component Storage**: -20°C to +40°C, <60% RH
- **Shelf Life**: 2 years in original packaging

### 9.2 Handling Precautions
- **ESD Precautions**: Standard ESD protocols during assembly
- **Cleanliness Requirements**: ISO Class 8 (100,000) or better
- **Pressure Precautions**: Avoid applying >500 mbar pressure during handling
- **Installation Precautions**: Verify flow direction before operation

## 10. Documentation and Support

### 10.1 Supplied Documentation
- **Mechanical Drawings**: 3D CAD files and 2D engineering drawings
- **Electrical Schematics**: Reference design for controller circuit
- **Performance Curves**: Flow vs. pressure and flow vs. PWM
- **Integration Guide**: Step-by-step installation procedure
- **Test Procedures**: Verification and validation guidelines

### 10.2 Support Resources
- **Firmware Library**: API functions for pump control
- **Troubleshooting Guide**: Common issues and resolutions
- **Replacement Parts**: Filter kits and complete pump assemblies
- **Design Consultation**: Application engineering support for integration
- **Customization Options**: Flow profiles and control algorithms