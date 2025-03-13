
import React from 'react';

const MicrocontrollerSystemContent: React.FC = () => {
  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold mb-3">1. Core Microcontroller</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium mb-2">1.1 Module Specifications</h4>
          <ul className="list-disc pl-5 text-odar-gray-700 space-y-1">
            <li><strong>Model</strong>: ESP32-WROOM-32E</li>
            <li><strong>MCU</strong>: Espressif ESP32-D0WD-V3 dual-core processor</li>
            <li><strong>Processor</strong>: Xtensa® dual-core 32-bit LX6 microprocessor</li>
            <li><strong>Clock Speed</strong>: Up to 240 MHz</li>
            <li><strong>Memory</strong>:
              <ul className="list-disc pl-5">
                <li>RAM: 520 KB SRAM</li>
                <li>Flash: 4 MB onboard SPI flash</li>
                <li>External Flash Interface: Supports up to 16 MB</li>
              </ul>
            </li>
            <li><strong>Operating Voltage</strong>: 3.0V to 3.6V (nominal 3.3V)</li>
            <li><strong>Operating Temperature</strong>: -40°C to +85°C</li>
            <li><strong>Physical Dimensions</strong>: 18.00mm × 25.50mm × 3.10mm</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MicrocontrollerSystemContent;
