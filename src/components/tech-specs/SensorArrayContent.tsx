
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
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">3. Advanced Technology</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200 mb-4">
          <h4 className="text-lg font-medium mb-2 text-blue-800">Nanofiber Enhancement</h4>
          <p className="text-odar-gray-700 mb-3">
            The OdAR system features cutting-edge nanofiber tubular artificial hair follicle technology 
            that significantly enhances the sensor array's sensitivity and selectivity. This biomimetic
            approach mimics biological olfactory systems for superior performance.
          </p>
          <button 
            className="text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md flex items-center"
            onClick={() => {
              // Navigate to the nanofiber section
              window.history.pushState({}, '', '/tech-specs');
              const event = new CustomEvent('navigate-to-section', { 
                detail: { section: 'nanofiber' } 
              });
              window.dispatchEvent(event);
            }}
          >
            View Nanofiber Technology Details
          </button>
        </div>
      </section>
    </>
  );
};

export default SensorArrayContent;
