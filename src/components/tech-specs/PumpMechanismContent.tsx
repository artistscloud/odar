
import React from 'react';

interface PumpMechanismContentProps {
  tab: 'overview' | 'mechanical';
}

const PumpMechanismContent: React.FC<PumpMechanismContentProps> = ({ tab }) => {
  if (tab === 'overview') {
    return (
      <>
        <section>
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
      </>
    );
  }
  
  return (
    <>
      <section>
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
        </div>
      </section>
    </>
  );
};

export default PumpMechanismContent;
