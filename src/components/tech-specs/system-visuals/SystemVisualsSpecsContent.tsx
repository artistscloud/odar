
import React from 'react';

const SystemVisualsSpecsContent: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="glass-card p-4">
          <h4 className="text-lg font-medium mb-2">Physical Specifications</h4>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>Dimensions</strong>: 100mm × 60mm × 30mm (L × W × H)</li>
            <li><strong>Weight</strong>: 210g ±10g (fully assembled)</li>
            <li><strong>Material</strong>: Polycarbonate with UV-resistant coating</li>
            <li><strong>Environmental Rating</strong>: IP65 (dust-tight, water-resistant)</li>
            <li><strong>Operating Temperature</strong>: -10°C to +50°C</li>
          </ul>
        </div>
        
        <div className="glass-card p-4">
          <h4 className="text-lg font-medium mb-2">System Integration</h4>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>Power</strong>: 3.7V Li-Ion battery (3000mAh)</li>
            <li><strong>Sensor Array</strong>: 8 sensors (MOS and CP technologies)</li>
            <li><strong>Ranging</strong>: Ultrasonic sensors with 0.2m to 4.0m range</li>
            <li><strong>Temperature Control</strong>: Active 10-40°C with PID precision</li>
            <li><strong>Data Interface</strong>: USB-C and wireless (Wi-Fi/BLE)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SystemVisualsSpecsContent;
