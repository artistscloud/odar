
import React from 'react';

interface TechSpecsContentProps {
  activeSection: string;
}

const TechSpecsContent: React.FC<TechSpecsContentProps> = ({ activeSection }) => {
  return (
    <div className="flex-1 glass-card p-6">
      {activeSection === 'pump' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Pump Mechanism</h2>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. General Overview</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">1.1 System Purpose</h4>
                <p className="text-odar-gray-700">
                  The micro pump subsystem actively delivers ambient air samples to the olfactory sensor array, 
                  enhancing odor detection efficiency and response time. This active sampling approach enables 
                  more precise chemical detection and concentration measurements compared to passive diffusion methods.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">1.2 Functional Description</h4>
                <p className="text-odar-gray-700">
                  The pump creates negative pressure at the sensor chamber, drawing external air through inlet ports 
                  across the sensor array in a controlled manner. This forced airflow ensures consistent sample delivery, 
                  reduces response latency, and enables spatial mapping of odor sources when combined with the ranging system.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">1.3 Key Performance Metrics</h4>
                <ul className="list-disc pl-5 text-odar-gray-700 space-y-1">
                  <li><strong>Dimensions</strong>: 15mm × 15mm × 10mm</li>
                  <li><strong>Flow Rate</strong>: 200-800 mL/min, adjustable</li>
                  <li><strong>Operating Voltage</strong>: 3.3V DC</li>
                  <li><strong>Power Consumption</strong>: 80-250 mW (depending on flow rate)</li>
                  <li><strong>Noise Level</strong>: &lt;35 dBA at 1m distance</li>
                  <li><strong>Lifespan</strong>: &gt;5,000 operating hours</li>
                  <li><strong>Response Time</strong>: Sensor response improved by 40-60% compared to passive diffusion</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">2. Mechanical Specifications</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">2.1 Pump Technology</h4>
                <ul className="list-disc pl-5 text-odar-gray-700 space-y-1">
                  <li><strong>Type</strong>: Diaphragm micropump</li>
                  <li><strong>Operation Principle</strong>: Piezoelectric actuation</li>
                  <li><strong>Displacement Volume</strong>: 11.5 μL per stroke</li>
                  <li><strong>Maximum Pressure</strong>: 
                    <ul className="list-disc pl-5">
                      <li>Pressure Mode: 350 mbar</li>
                      <li>Vacuum Mode: -200 mbar</li>
                    </ul>
                  </li>
                  <li><strong>Operating Frequency</strong>: 25-100 Hz</li>
                  <li><strong>Self-Priming</strong>: Yes, to -150 mbar</li>
                  <li><strong>Wetted Materials</strong>: 
                    <ul className="list-disc pl-5">
                      <li>Polyphenylsulfone (PPSU) pump body</li>
                      <li>EPDM diaphragm</li>
                      <li>PTFE valve seats</li>
                      <li>Stainless steel 316L components (where applicable)</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              {/* Add more sections as needed for comprehensive documentation */}
            </div>
          </section>
          
          {/* Continue with additional pump mechanism sections */}
        </div>
      )}
      
      {activeSection === 'ranging' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Ranging System</h2>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. System Overview</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">1.1 Functional Description</h4>
                <p className="text-odar-gray-700">
                  The OdAR Ranging System provides spatial awareness and source localization capabilities 
                  through multi-point distance measurement. The system employs ultrasonic ranging as the 
                  primary technology, with optional Time-of-Flight (ToF) enhancement for improved accuracy.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">1.2 Core Capabilities</h4>
                <ul className="list-disc pl-5 text-odar-gray-700 space-y-1">
                  <li><strong>Detection Range</strong>: 0.2m to 4.0m (ultrasonic), up to 4.0m (ToF)</li>
                  <li><strong>Angular Coverage</strong>: 360° horizontal through strategic sensor placement</li>
                  <li><strong>Source Localization</strong>: Triangulation-based positioning with ±20cm accuracy</li>
                  <li><strong>Sampling Rate</strong>: 1-10Hz, adjustable based on application requirements</li>
                  <li><strong>Integration</strong>: Fully integrated with olfactory detection for combined chemical-spatial mapping</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Continue with additional ranging system sections */}
        </div>
      )}
      
      {activeSection === 'enclosure' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Enclosure Design</h2>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. General Specifications</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">1.1 Dimensions</h4>
                <ul className="list-disc pl-5 text-odar-gray-700 space-y-1">
                  <li><strong>External Dimensions</strong>: 100mm × 60mm × 30mm (L × W × H)</li>
                  <li><strong>Internal Volume</strong>: Approximately 150cm³</li>
                  <li><strong>Wall Thickness</strong>: 2.0mm uniform</li>
                  <li><strong>Corner Radius</strong>: 5mm external, 3mm internal</li>
                  <li><strong>Weight</strong>: 210g ±10g (fully assembled)</li>
                </ul>
              </div>
              
              {/* Continue with additional enclosure sections */}
            </div>
          </section>
        </div>
      )}
      
      {activeSection === 'microcontroller' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Microcontroller System</h2>
          
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
              
              {/* Continue with additional microcontroller sections */}
            </div>
          </section>
        </div>
      )}
      
      {activeSection === 'sensor' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Sensor Array</h2>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">1. Overview</h3>
            
            <p className="text-odar-gray-700 mb-4">
              The OdAR system employs a sophisticated multi-sensor array designed to detect and discriminate 
              between various volatile compounds. The array combines different sensor technologies to achieve 
              broad-spectrum detection capabilities while maintaining high sensitivity and selectivity.
            </p>
          </section>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">2. Sensor Configuration</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">2.1 Sensor Array Layout</h4>
                <ul className="list-disc pl-5 text-odar-gray-700 space-y-1">
                  <li><strong>Number of Sensors</strong>: 8 sensors total</li>
                  <li><strong>Array Configuration</strong>: 2 × 4 grid pattern with 5mm spacing between sensors</li>
                  <li><strong>PCB Dimensions</strong>: 40mm × 25mm × 1.6mm FR4 material</li>
                  <li><strong>Sensor Mounting</strong>: Surface mounted with gold-plated pads</li>
                  <li><strong>Signal Traces</strong>: 0.25mm width, impedance-controlled</li>
                  <li><strong>Connection Interface</strong>: 10-pin FFC/FPC connector (0.5mm pitch)</li>
                </ul>
              </div>
              
              {/* Continue with additional sensor array sections */}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default TechSpecsContent;
