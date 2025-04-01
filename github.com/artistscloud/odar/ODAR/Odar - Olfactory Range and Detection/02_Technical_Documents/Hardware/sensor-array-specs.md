# OdAR System: Sensor Array Technical Specifications

## 1. Overview

The OdAR system employs a sophisticated multi-sensor array designed to detect and discriminate between various volatile compounds. The array combines different sensor technologies to achieve broad-spectrum detection capabilities while maintaining high sensitivity and selectivity.

## 2. Sensor Configuration

### 2.1 Sensor Array Layout

- **Number of Sensors**: 8 sensors total
- **Array Configuration**: 2 × 4 grid pattern with 5mm spacing between sensors
- **PCB Dimensions**: 40mm × 25mm × 1.6mm FR4 material
- **Sensor Mounting**: Surface mounted with gold-plated pads
- **Signal Traces**: 0.25mm width, impedance-controlled
- **Connection Interface**: 10-pin FFC/FPC connector (0.5mm pitch)

### 2.2 Sensor Types and Quantities

| Sensor Type | Material | Quantity | Target Compounds | Part Number |
|-------------|----------|----------|------------------|-------------|
| MOS | SnO₂ | 2 | Hydrocarbons, VOCs | TGS2602 |
| MOS | ZnO | 1 | Alcohols, Ethanol | TGS2620 |
| MOS | WO₃ | 1 | Oxidizing gases (NO₂, O₃) | MICS-4514 |
| CP | Polyaniline | 2 | Ammonia, Amines | POLYSEN-NH3 |
| CP | Polypyrrole | 2 | Organic acids, Aldehydes | POLYSEN-ALD |

## 3. Sensor Specifications

### 3.1 Metal Oxide Semiconductor (MOS) Sensors

#### SnO₂ Sensors (TGS2602)
- **Dimensions**: 8.5mm × 9.5mm × 8mm
- **Operating Voltage**: 5.0V ± 0.2V DC
- **Power Consumption**: 280mW (typical)
- **Operating Temperature**: -10°C to +50°C
- **Detection Range**: 1-30 ppm for most VOCs
- **Response Time (T90)**: < 30 seconds
- **Recovery Time**: < 60 seconds
- **Lifespan**: > 5 years under normal operating conditions
- **Heater Resistance**: 83Ω ± 8.3Ω at room temperature
- **Sensitivity**: Rs(air)/Rs(10ppm ethanol) > 3
- **Baseline Stability**: < 5% drift per month

#### ZnO Sensors (TGS2620)
- **Dimensions**: 8.5mm × 9.5mm × 8mm
- **Operating Voltage**: 5.0V ± 0.2V DC
- **Power Consumption**: 210mW (typical)
- **Operating Temperature**: -10°C to +50°C
- **Detection Range**: 50-5000 ppm for alcohol
- **Response Time (T90)**: < 30 seconds
- **Recovery Time**: < 60 seconds
- **Heater Resistance**: 83Ω ± 8.3Ω at room temperature
- **Sensitivity**: Rs(air)/Rs(300ppm ethanol) > 4.8
- **Baseline Stability**: < 5% drift per month

#### WO₃ Sensors (MICS-4514)
- **Dimensions**: 5mm × 7mm × 1.55mm
- **Operating Voltage**: 3.3V ± 0.1V DC
- **Power Consumption**: 85mW (typical)
- **Operating Temperature**: -30°C to +85°C
- **Detection Range**: 0.05-10 ppm for NO₂, 1-1000 ppm for CO
- **Response Time (T90)**: < 30 seconds
- **Recovery Time**: < 60 seconds
- **Heater Resistance**: 50Ω ± 5Ω at room temperature
- **Sensitivity**: Rs(air)/Rs(10ppm NO₂) > 2
- **Baseline Stability**: < 10% drift per month

### 3.2 Conducting Polymer (CP) Sensors

#### Polyaniline Sensors (POLYSEN-NH3)
- **Dimensions**: 10mm × 10mm × 1mm
- **Operating Voltage**: 3.3V DC
- **Power Consumption**: < 30mW
- **Operating Temperature**: 5°C to 40°C
- **Detection Range**: 5-100 ppm for ammonia
- **Response Time (T90)**: < 120 seconds
- **Recovery Time**: < 240 seconds
- **Sensitivity**: > 0.5% resistance change per ppm
- **Baseline Stability**: < 15% drift per month
- **Humidity Range**: 20% to 90% RH (non-condensing)

#### Polypyrrole Sensors (POLYSEN-ALD)
- **Dimensions**: 10mm × 10mm × 1mm
- **Operating Voltage**: 3.3V DC
- **Power Consumption**: < 30mW
- **Operating Temperature**: 5°C to 40°C
- **Detection Range**: 1-50 ppm for aldehydes
- **Response Time (T90)**: < 90 seconds
- **Recovery Time**: < 180 seconds
- **Sensitivity**: > 0.8% resistance change per ppm
- **Baseline Stability**: < 12% drift per month
- **Humidity Range**: 20% to 90% RH (non-condensing)

## 4. Temperature Cycling Specifications

### 4.1 Temperature Cycle Profile

| Stage | Temperature | Duration | Purpose |
|-------|-------------|----------|---------|
| Baseline | 20°C | 10 seconds | Initial reference point |
| Heat Ramp | 20°C to 40°C | 15 seconds | Linear temperature increase |
| High Temp Hold | 40°C | 10 seconds | Enhanced VOC desorption |
| Cool Ramp | 40°C to 10°C | 20 seconds | Linear temperature decrease |
| Low Temp Hold | 10°C | 10 seconds | Enhanced VOC adsorption |
| Return to Baseline | 10°C to 20°C | 15 seconds | Return to reference point |

- **Total Cycle Time**: 80 seconds
- **Measurement Points**: Data collected at each temperature stage
- **Temperature Accuracy**: ± 1°C
- **Temperature Rate of Change**: 1.33°C/second (heat ramp), 1.5°C/second (cool ramp)

### 4.2 Temperature Control Components

- **Heater Type**: Polyimide film heater with integrated thermistor
- **Heater Dimensions**: 20mm × 15mm × 0.2mm
- **Heater Power**: 2W maximum
- **Cooling Method**: Passive combined with micro-fan (5V, 20mm)
- **Temperature Sensor**: LM35 precision centigrade sensor
- **Controller**: PID control loop with 10Hz sampling rate

## 5. Signal Conditioning Requirements

### 5.1 Analog Front End

- **Amplifier Type**: Instrumentation amplifier (INA326 or equivalent)
- **Gain Range**: Adjustable from 1 to 100
- **Input Impedance**: > 10MΩ
- **Low-Pass Filter**: 2nd order Butterworth, 10Hz cutoff
- **Offset Calibration**: Digital potentiometer controlled
- **Reference Voltage**: 2.5V precision reference

### 5.2 Analog-to-Digital Conversion

- **ADC Resolution**: 16-bit
- **Sampling Rate**: 20 samples per second per sensor
- **Input Range**: 0-3.3V
- **SNR**: > 85dB
- **Effective Number of Bits (ENOB)**: > 14 bits
- **Interface**: SPI or I²C to microcontroller

## 6. Sensor Array Integration Requirements

### 6.1 Environmental Isolation

- **Sensor Chamber**: Sealed PTFE or PPS chamber with 2mm wall thickness
- **Inlet Port**: 3mm diameter with filtration mesh (50μm)
- **Outlet Port**: Connected to micro-pump system
- **Sealing**: O-ring gaskets, EPDM material, 1mm cross-section
- **Cross-Contamination Prevention**: Sensor spacing and internal baffles

### 6.2 Connection to System

- **Electrical Connection**: FFC/FPC cable, 10-pin, 0.5mm pitch, 50mm length
- **Air Sampling Connection**: 2mm ID PTFE tubing
- **Mounting Points**: 4× M2 mounting holes at corners
- **Alignment Features**: Keyed connector and positioning pins

## 7. Manufacturing and Assembly Notes

1. All sensors must be handled with ESD protection measures
2. MOS sensors should be pre-aged for 48 hours at operating temperature before calibration
3. Polymer sensors must be stored in sealed packages until assembly
4. Apply thermal paste between heater and temperature sensor for proper thermal coupling
5. Conformal coating must not cover sensing elements or temperature sensor
6. For volume manufacturing, 100% functional testing of array before integration

## 8. Calibration Procedure

1. Stabilize sensor array at 20°C for 30 minutes in clean air
2. Record baseline readings for all sensors
3. Expose to 10ppm, 50ppm, and 100ppm ethanol standard for MOS sensors
4. Expose to 10ppm, 25ppm, and 50ppm ammonia standard for polymer sensors
5. Record responses at each temperature stage in the cycle
6. Calculate and store calibration coefficients in non-volatile memory
7. Validate with mixed gas standard (5ppm ethanol + 5ppm ammonia)

## 9. Compliance and Certifications

- **RoHS Compliance**: All components must be RoHS compliant
- **Operating Temperature Range**: -10°C to +50°C
- **Storage Temperature Range**: -20°C to +60°C
- **Humidity Range**: 20% to 90% RH (non-condensing)
- **EMC Compatibility**: IEC 61000-4-2 (ESD), IEC 61000-4-3 (RF)
- **MTBF**: > 50,000 hours