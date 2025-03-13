
import React from 'react';

const SensorArrayContent: React.FC = () => {
  return (
    <>
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
        </div>
      </section>
    </>
  );
};

export default SensorArrayContent;
