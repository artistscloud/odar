# OdAR Testing Chamber Blueprint Specifications

## I. Chamber Overview

### A. Core Specifications
- **Dimensions**: 5.0m × 5.0m × 3.0m (internal)
- **Purpose**: Controlled environment for olfactory and ranging calibration/testing
- **Construction**: Modular panels with sealed joints
- **Air Quality**: HEPA-filtered, VOC-scrubbed supply air
- **Access**: Airlock entry system with contamination control

### B. Environmental Control Capabilities
- **Temperature Range**: 0°C to 40°C
- **Temperature Control Precision**: ±0.5°C
- **Temperature Ramp Rate**: 0.5-5.0°C/minute (programmable)
- **Humidity Range**: 20% to 80% RH
- **Humidity Control Precision**: ±2% RH
- **Air Exchange Rate**: 5-20 air changes per hour (configurable)
- **Background VOC Level**: Maintained below 0.1 ppm total
- **Airflow Control**: 0.1 to 1.0 m/s (laminar flow option)

## II. Major Chamber Subsystems

### A. Entry and Airlock System
1. **Entry Airlock**
   - **Dimensions**: 1.2m × 2.0m × 2.1m
   - **Door System**: Interlocked double-door system with status indicators
   - **Pressure Control**: Positive pressure differential (adjustable 5-15 Pa)
   - **Purge Cycle**: Programmable 30-300 second purge cycle
   - **Construction**: Same material as main chamber
   - **Equipment**: Status display, emergency override, intercom

2. **Contamination Control**
   - **Personnel Protocols**: Cleanroom garments (minimum Class 100,000)
   - **Equipment Decontamination**: UV sterilization option in airlock
   - **Sticky Mat**: Replaceable adhesive floor mat at entry
   - **HEPA Filtration**: Overhead HEPA filter in airlock

### B. Robotic XYZ Positioning System
1. **Gantry System**
   - **Coverage Area**: 4.0m × 4.0m
   - **X-Axis**: Floor-mounted linear rail system (ball screw drive)
   - **Y-Axis**: Bridge-mounted linear rail system (ball screw drive)
   - **Z-Axis**: Vertical column with linear actuator
   - **Position Accuracy**: ±1.0mm throughout working volume
   - **Maximum Speed**: 1.0 m/s (X,Y); 0.5 m/s (Z)
   - **Maximum Acceleration**: 0.5 m/s² (X,Y); 0.25 m/s² (Z)
   - **Safety Features**: Limit switches, emergency stop, software boundaries

2. **End Effector Options**
   - **OdAR Device Mount**: Adjustable cradle with power/data connections
   - **Gas Release System**: Programmable odor release nozzle
   - **Reference Instrument Mount**: Platform for PID/other analyzers
   - **Calibration Target Mount**: Various surface materials
   - **Tool Changer**: Automatic end effector exchange system

3. **Control System**
   - **Controller**: Industrial motion controller with real-time OS
   - **Programming**: G-code compatible with trajectory planning
   - **Interface**: Touch-screen operator terminal
   - **Remote Control**: Network interface for test automation
   - **Safety Interlocks**: E-stop buttons at multiple locations

### C. Gas Delivery System
1. **Gas Source Cabinet**
   - **Location**: External to chamber, pipe penetration to chamber
   - **Capacity**: 4 compressed gas cylinders
   - **Safety Features**: Gas detection, ventilation, auto-shutdown
   - **Cylinder Types**: Test compounds, zero air, calibration gases
   - **Pressure Regulation**: Two-stage regulation with digital display

2. **Compound Delivery Network**
   - **Distribution System**: 316 stainless steel or PTFE tubing
   - **Delivery Points**: 6 programmable locations throughout chamber
   - **Flow Control**: Mass flow controllers (0.1-10 L/min per channel)
   - **Mixing System**: Dynamic dilution system for concentration control
   - **Concentration Range**: 5 ppb to 500 ppm (compound dependent)
   - **Concentration Accuracy**: ±5% of setpoint
   - **Release Profiles**: Programmable steady-state, pulsed, or ramped release

3. **Control System**
   - **User Interface**: Touchscreen with recipe storage
   - **Logging**: Automatic logging of all delivery parameters
   - **Calibration**: Auto-calibration routines for MFCs
   - **Safety**: Automatic purge cycles, leak detection
   - **Integration**: API for automated test sequences

### D. Environmental Control System
1. **HVAC System**
   - **Cooling Capacity**: 15 kW
   - **Heating Capacity**: 10 kW
   - **Air Handling**: Variable speed ECM blowers
   - **Filtration**: MERV 14 pre-filter, HEPA final filter, carbon VOC scrubber
   - **Humidity Control**: Ultrasonic humidifier, desiccant dehumidifier
   - **Ducting**: Stainless steel with damper control
   - **Air Distribution**: Perforated ceiling diffusers, low wall returns

2. **Control System**
   - **Temperature Control**: PID control with feedforward compensation
   - **Humidity Control**: Adaptive multi-variable control
   - **Monitoring Points**: 10 distributed T/RH sensors for mapping
   - **User Interface**: Touchscreen with graphical display
   - **Data Logging**: 1-minute interval standard, 1-second available
   - **Remote Access**: Web-based monitoring and control
   - **Alarming**: Out-of-range conditions with email/text notification

### E. Data Acquisition and Monitoring System
1. **Central DAQ System**
   - **Channels**: 64 analog, 32 digital, 16 thermocouple
   - **Sample Rate**: 100 Hz standard, up to 10 kHz for specialized tests
   - **Resolution**: 16-bit ADC
   - **Interface**: Ethernet to control room
   - **Storage**: Local 1 TB SSD, network backup
   - **Synchronization**: GPS time reference option

2. **Monitoring Points**
   - **Environmental**: 10 distributed T/RH/P sensors
   - **Gas Concentration**: 10 fixed PID/MOS sensor locations
   - **Airflow**: 6 anemometer positions
   - **Ranging Reference**: 8 ultrasonic/optical distance reference points
   - **Video Monitoring**: 4 high-resolution cameras with IR capability

3. **Control Room Integration**
   - **Monitoring Stations**: 3 workstations with multi-display capability
   - **Video Wall**: 2×2 55" display array
   - **Communication**: Chamber intercom system
   - **Data Processing**: Real-time analysis workstation
   - **Test Automation**: Scripting system for automated test sequences

## III. OdAR Device Testing Stations

### A. Static Testing Station
1. **Calibration Fixture**
   - **Location**: Center of chamber (default)
   - **Mounting**: Adjustable height platform with precise leveling
   - **Orientation Control**: 3-axis gimbal for device positioning
   - **Reference Points**: Calibrated distance markers (0.5m to 4.0m)
   - **Materials Library**: Reference surfaces (wood, metal, fabric, glass)

2. **Gas Exposure System**
   - **Delivery**: Precision placement of gas introduction point
   - **Control**: Programmable concentration profiles
   - **Measurement**: Reference PID analyzer adjacent to OdAR
   - **Purge**: Localized extraction system for rapid clearing

### B. Dynamic Testing Station
1. **Moving Source Rig**
   - **Motion System**: Secondary robotic arm for odor source movement
   - **Speed Range**: 0.1 to 1.0 m/s
   - **Patterns**: Linear, circular, random path programming
   - **Gas Delivery**: Mobile gas release system
   - **Position Tracking**: Optical tracking system for ground truth

2. **Multi-Source Testing**
   - **Configuration**: Up to 3 independent odor sources
   - **Separation Testing**: Variable distance between sources
   - **Compound Selection**: Different compounds at each source
   - **Concentration Control**: Independent control of each source
   - **Verification**: Multiple reference analyzers

### C. Reference Instrumentation
1. **Analytical Equipment**
   - **PID Analyzers**: ppb-level photoionization detectors (2)
   - **Multi-Gas Analyzers**: FTIR or GC-based analyzers (1)
   - **Particle Counters**: 0.3-10µm particle size detection (1)
   - **Anemometers**: Ultrasonic 3D airflow measurement (2)

2. **Calibration Reference**
   - **Distance Standards**: Laser-calibrated reference points
   - **Gas Standards**: NIST-traceable calibration gases
   - **Environmental References**: NIST-traceable T/RH/P instruments
   - **Maintenance**: 6-month calibration interval for all references

## IV. Safety Systems

### A. Emergency Systems
1. **Fire Suppression**
   - **Type**: Clean agent (FM-200 or Novec 1230)
   - **Activation**: Automatic via smoke/heat detection or manual pull
   - **Coverage**: Complete chamber protection
   - **Alarms**: Audio/visual pre-discharge warning

2. **Gas Detection**
   - **Monitors**: VOC, O₂, CO, and specific toxic gas monitors
   - **Locations**: Chamber interior, gas cabinet, ambient room
   - **Response**: Tiered response (warning, ventilation boost, shutdown)
   - **Maintenance**: Monthly bump testing, quarterly calibration

3. **Emergency Egress**
   - **Exit Marking**: Illuminated exit signs with backup power
   - **Emergency Lighting**: Battery-backed lighting system
   - **Door Release**: Pneumatic fail-safe on power loss
   - **Emergency Procedures**: Posted at entry and inside chamber

### B. Operational Safety
1. **Access Control**
   - **System**: Keycard access with logging
   - **Training Requirement**: Documented training for all users
   - **Buddy System**: Two-person rule for certain operations
   - **Remote Monitoring**: Camera coverage of all areas

2. **Lockout/Tagout**
   - **Power Disconnects**: Accessible outside chamber
   - **Gas Shutoffs**: External emergency shutoff valves
   - **Procedures**: Documented LOTO procedures for maintenance
   - **Training**: Required LOTO training for maintenance personnel

## V. Utilities and Support Infrastructure

### A. Electrical System
1. **Power Requirements**
   - **Total Connected Load**: 45 kVA
   - **Supply**: 208V 3-phase, 60Hz
   - **Distribution**: Separate panels for HVAC, robotics, instrumentation
   - **Backup Power**: 30 kVA UPS for critical systems
   - **Emergency Shutdown**: Multiple E-stop locations

2. **Data/Communications**
   - **Network**: 10 Gb/s Ethernet backbone
   - **Wi-Fi**: Secure wireless network for mobile devices
   - **Fiber Optic**: Connections to server room and data center
   - **Patch Panels**: Structured cabling throughout facility

### B. Mechanical Utilities
1. **Compressed Air**
   - **Supply**: 100 psi clean, dry compressed air
   - **Flow Rate**: 50 SCFM peak, 20 SCFM sustained
   - **Filtration**: Oil removal, desiccant drying, particulate filtration
   - **Distribution**: Drop points throughout chamber

2. **Process Exhaust**
   - **Capacity**: 2000 CFM maximum flow
   - **Filtration**: HEPA and carbon final filtration
   - **Monitoring**: Flow verification and filter monitoring
   - **Controls**: Variable speed control for energy management

3. **Chilled Water**
   - **Capacity**: 20 tons cooling capacity
   - **Temperature**: 45°F supply, 55°F return
   - **Flow Rate**: 40 GPM maximum
   - **Connections**: Isolation valves and flexible connections
   - **Monitoring**: Flow meters and temperature sensors

## VI. Testing Protocols and Procedures

### A. Environmental Preparation
1. **Pre-Test Conditioning**
   - **Purge Cycle**: Minimum 60-minute full air exchange
   - **Temperature Stabilization**: ±0.5°C of target for minimum 30 minutes
   - **Humidity Stabilization**: ±2% RH of target for minimum 30 minutes
   - **Background VOC Check**: <0.1 ppm total VOCs confirmed
   - **Particulate Count**: Class 100,000 or better verified

2. **Reference Equipment Setup**
   - **Instrument Warm-up**: Minimum 1 hour for all reference instruments
   - **Calibration Check**: Pre-test verification of all reference equipment
   - **Placement Verification**: Confirmation of critical measurement positions
   - **Data Logging**: Confirmation of data acquisition system readiness
   - **Synchronization**: Time synchronization of all logging systems

### B. OdAR Device Preparation
1. **Device Pre-Test**
   - **Full Charge**: >95% battery charge confirmed
   - **Diagnostics**: Self-test routine executed and passed
   - **Firmware Check**: Verification of correct firmware version
   - **Sensor Check**: Baseline sensor readings within specification
   - **Ranging Verification**: Quick-check calibration confirmed

2. **Mounting and Positioning**
   - **Standard Position**: Device mounted at 1.5m height, level orientation
   - **Angular Testing**: Gimbal-mounted for precise angular control
   - **Position Verification**: Laser measurement of exact position
   - **Connection Setup**: Data logging connection established if required
   - **Pre-Test Documentation**: Photographs of setup configuration

### C. Test Execution Protocols

1. **Olfactory Performance Testing**
   - **Baseline Acquisition**: Minimum 5-minute clean air baseline
   - **Compound Introduction**: Controlled release at specified concentration
   - **Exposure Duration**: Maintained for test-specific duration (typically 2-10 minutes)
   - **Purge Cycle**: Complete purge between different compounds
   - **Recovery Monitoring**: Post-exposure recovery to baseline
   - **Repeatability Testing**: Minimum 3 repetitions of each test condition

2. **Ranging Performance Testing**
   - **Static Target Protocol**: Measurement at fixed distances in 0.5m increments
   - **Angular Protocol**: Measurements at 15° increments through 180° arc
   - **Material Testing**: Sequential testing of standard material panel array
   - **Dynamic Protocol**: Tracking of targets moving at defined speeds and patterns
   - **Multi-Target Protocol**: Discrimination testing with multiple simultaneous targets

3. **Integrated Performance Testing**
   - **Source Localization**: Combined odor detection and source ranging
   - **Multi-Source Protocol**: Discrimination of different compounds at different locations
   - **Dynamic Tracking**: Following of moving odor sources
   - **Concentration Gradient Mapping**: 3D mapping of concentration field
   - **Environmental Variation**: Performance across temperature and humidity ranges

### D. Data Collection and Analysis

1. **Primary Metrics**
   - **Detection Accuracy**: Percentage of correct compound identifications
   - **Concentration Accuracy**: Error between measured and actual concentration
   - **Response Time**: Time from introduction to detection/classification
   - **Distance Accuracy**: Error between measured and actual distance
   - **Angular Accuracy**: Error between measured and actual angle
   - **Source Localization**: Combined position and identification accuracy

2. **Statistical Analysis**
   - **Repeatability**: Standard deviation across multiple test runs
   - **Environmental Impact**: Regression analysis of environmental factors
   - **Cross-Sensitivity**: Analysis of compound discrimination performance
   - **Range Limitations**: Determination of effective operational limits
   - **Confidence Intervals**: 95% confidence intervals for all key metrics

3. **Reporting Requirements**
   - **Test Conditions**: Complete documentation of all environmental parameters
   - **Raw Data**: Archiving of all raw sensor and reference data
   - **Statistical Summary**: Analysis of performance metrics with uncertainties
   - **Visualization**: Graphical presentation of key performance indicators
   - **Comparison**: Performance relative to specification requirements
   - **Recommendations**: Suggested improvements or calibration adjustments

## VII. Quality Control and Certification

### A. Chamber Qualification
1. **Installation Qualification (IQ)**
   - **Construction Verification**: Confirmation of build to specifications
   - **Utility Connections**: Verification of all utility connections
   - **Component Documentation**: Inventory of all installed components
   - **Drawing Verification**: As-built drawings compared to design
   - **Safety System Check**: Verification of all safety systems

2. **Operational Qualification (OQ)**
   - **System Functions**: Verification of all system functionalities
   - **Control Ranges**: Confirmation of environmental control ranges
   - **Response Times**: Measurement of system response characteristics
   - **Software Validation**: Validation of all control and data systems
   - **Alarm Testing**: Verification of all alarm conditions and responses

3. **Performance Qualification (PQ)**
   - **Environmental Uniformity**: Mapping of temperature and humidity
   - **Stability Testing**: Long-term stability of environmental conditions
   - **Contamination Control**: Verification of particulate and VOC control
   - **Reference Standard Testing**: Comparison to traceable standards
   - **Method Validation**: Validation of testing protocols

### B. Reference Standards and Traceability
1. **Calibration Program**
   - **Reference Equipment**: NIST-traceable calibration of all reference instruments
   - **Gas Standards**: Certified reference materials with certificates of analysis
   - **Dimensional Standards**: Laser-calibrated reference distances
   - **Environmental Standards**: NIST-traceable temperature and humidity references
   - **Calibration Schedule**: Documented calibration intervals for all equipment

2. **Quality Assurance Program**
   - **SOPs**: Standard Operating Procedures for all chamber operations
   - **Training**: Documented training requirements for all personnel
   - **Proficiency Testing**: Periodic testing of operator proficiency
   - **Audit Program**: Regular internal and external audits
   - **Corrective Action**: Formal corrective action program

### C. Documentation and Record Keeping
1. **Required Documentation**
   - **User Manuals**: Complete documentation for all systems
   - **Maintenance Records**: Documentation of all maintenance activities
   - **Calibration Certificates**: Records of all calibration activities
   - **Training Records**: Documentation of personnel training
   - **Test Records**: Complete records of all testing activities

2. **Electronic Records System**
   - **Data Storage**: Secure, backed-up storage of all electronic records
   - **Retention Policy**: Minimum 5-year retention of all records
   - **Access Control**: Controlled access to records based on role
   - **Audit Trail**: Complete audit trail of all data modifications
   - **Reporting System**: Automated report generation capabilities

## VIII. Maintenance and Support

### A. Preventive Maintenance Program
1. **Daily Maintenance**
   - **Visual Inspection**: Check of all accessible components
   - **System Verification**: Verification of normal operation
   - **Cleanliness Check**: Inspection of chamber cleanliness
   - **Supply Check**: Verification of gas and other supplies
   - **Log Review**: Review of system logs for anomalies

2. **Monthly Maintenance**
   - **Filter Inspection**: Inspection and replacement as needed
   - **Sensor Check**: Verification of all monitoring sensors
   - **Calibration Check**: Verification of calibration status
   - **Mechanical Inspection**: Inspection of all mechanical systems
   - **Software Backup**: Backup of all system software

3. **Annual Maintenance**
   - **Comprehensive Inspection**: Complete inspection of all systems
   - **Recalibration**: Recalibration of all sensors and instruments
   - **HVAC Service**: Complete service of HVAC system
   - **Robotic System Service**: Complete service of robotic systems
   - **Software Update**: Update of all system software

### B. Spare Parts and Consumables
1. **Critical Spares Inventory**
   - **Sensors**: Replacement sensors for all monitoring points
   - **Controllers**: Spare controllers for critical systems
   - **Motors/Drives**: Replacement motors and drives for robotics
   - **Power Supplies**: Spare power supplies for critical systems
   - **Specialty Components**: Unique or long-lead time components

2. **Consumables Management**
   - **Filter Inventory**: 3-month supply of all filters
   - **Gas Cylinders**: Minimum 2 full cylinders of each required gas
   - **Calibration Standards**: Current calibration standards
   - **Cleaning Supplies**: Approved cleaning materials
   - **PPE**: Appropriate personal protective equipment

### C. Support Services
1. **Technical Support**
   - **On-call Support**: 24/7 emergency technical support
   - **Remote Diagnostics**: Remote access for troubleshooting
   - **Service Contracts**: Maintenance service agreements
   - **Training**: Ongoing training for operators and maintainers
   - **Documentation Updates**: Regular updates to documentation

2. **Facility Support Requirements**
   - **HVAC Support**: Temperature-controlled environment for the chamber room
   - **Power Stability**: Clean, stable power supply
   - **Network Infrastructure**: Reliable network connections
   - **Physical Security**: Controlled access to the chamber facility
   - **Fire Protection**: Appropriate fire detection and suppression