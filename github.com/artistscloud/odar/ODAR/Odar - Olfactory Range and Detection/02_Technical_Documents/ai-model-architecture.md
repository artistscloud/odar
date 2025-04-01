# OdAR AI Model Architecture

## 1. CNN-LSTM Hybrid Model

### Input Layer
- Shape: `[batch_size, 8, 4, 1]`
- 8 sensors × 4 temperature points × 1 channel
- Normalization: Min-max scaling to [0,1] range

### Feature Extraction (CNN)
```python
# Convolutional layers
Conv1D(32, kernel_size=3, activation='relu')
BatchNormalization()
MaxPooling1D(pool_size=2)
Dropout(0.2)

Conv1D(64, kernel_size=3, activation='relu')
BatchNormalization()
MaxPooling1D(pool_size=2)
Dropout(0.2)

Conv1D(128, kernel_size=3, activation='relu')
BatchNormalization()
Dropout(0.3)
```

### Temporal Processing (LSTM)
```python
# Bidirectional LSTM layers
Reshape([time_steps, features])
Bidirectional(LSTM(64, return_sequences=True))
Dropout(0.3)
Bidirectional(LSTM(64, return_sequences=False))
Dropout(0.3)
```

### Multi-task Output
```python
# Shared Dense Layer
Dense(64, activation='relu')
Dropout(0.4)

# Classification Branch
Dense(32, activation='relu')
Dense(num_classes, activation='softmax')

# Concentration Branch
Dense(32, activation='relu')
Dense(1, activation='linear')
```

## 2. Training Configuration

### Data Preprocessing
- Temperature cycle normalization
- Baseline correction
- Feature scaling
- Data augmentation:
  - Random sensor noise (±2%)
  - Temperature variations (±0.5°C)
  - Baseline drift simulation

### Training Parameters
```python
optimizer = Adam(learning_rate=0.001)
classification_loss = CategoricalCrossentropy()
concentration_loss = MeanSquaredError()
combined_loss = 0.7 * classification_loss + 0.3 * concentration_loss

epochs = 200
batch_size = 16
early_stopping = EarlyStopping(patience=20)
```

## 3. Model Optimization for Embedded Deployment

### Quantization Process
1. Post-training quantization
   - Weights: FP32 → INT8
   - Activations: FP32 → INT8
   - Calibration using representative dataset

2. Model Pruning
   - 30% weight pruning
   - Iterative magnitude-based pruning
   - Fine-tuning after pruning

3. Layer Fusion
   - Batch normalization folding
   - Activation fusion
   - Convolution-ReLU fusion

### Performance Metrics
- Original model size: 1.35 MB
- Quantized model size: 0.98 MB
- Inference time: 720ms on ESP32
- RAM usage: 420 KB
- Classification accuracy: 90.2%
- Concentration MAE: 8.2 ppm

## 4. Inference Pipeline

### Real-time Processing
```python
def process_sensor_data(sensor_readings):
    # Normalize readings
    normalized = (sensor_readings - sensor_min) / (sensor_max - sensor_min)
    
    # Apply temperature compensation
    temp_compensated = apply_temperature_compensation(normalized)
    
    # Reshape for model input
    model_input = temp_compensated.reshape(1, 8, 4, 1)
    
    # Run inference
    classification, concentration = model.predict(model_input)
    
    # Apply confidence thresholding
    if max(classification[0]) > DETECTION_THRESHOLD:
        return get_compound_name(argmax(classification[0])), concentration[0]
    else:
        return None, 0.0
```

### Post-processing
```python
def post_process_results(classification, concentration):
    # Apply exponential moving average for temporal smoothing
    smoothed_concentration = EMA_ALPHA * concentration + (1 - EMA_ALPHA) * prev_concentration
    
    # Apply decision rules for detection confidence
    confidence = calculate_confidence(classification, smoothed_concentration)
    
    # Generate detection event if confidence exceeds threshold
    if confidence > CONFIDENCE_THRESHOLD:
        generate_detection_event(classification, smoothed_concentration, confidence)
```
