
import React from 'react';
import NanoFiberSensorVisualization from 'github.com/artistscloud/odar/ODAR/Device/odar-nanofiber-sensor-visualization';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'lucide-react';

const NanoFiberSensorSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Nanofiber Tubular Artificial Hair Follicle</h2>
      <div className="mb-4">
        <Link 
          to="/tech-specs" 
          className="inline-flex items-center text-odar-blue hover:text-odar-accent transition-colors"
          onClick={(e) => {
            e.preventDefault();
            // Navigate back to the sensor array section
            window.history.pushState({}, '', '/tech-specs');
            const event = new CustomEvent('navigate-to-section', { 
              detail: { section: 'sensor' } 
            });
            window.dispatchEvent(event);
          }}
        >
          <ArrowLeftCircle size={18} className="mr-1" />
          <span>Back to Sensor Array</span>
        </Link>
      </div>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Nanofiber Enhancement Overview</h3>
        <p className="text-odar-gray-700 mb-4">
          The OdAR system incorporates cutting-edge nanofiber tubular artificial hair follicle technology to significantly
          enhance sensitivity and selectivity of chemical detection. These biomimetic structures provide a multi-zone
          approach to odor molecule interaction and detection.
        </p>
      </section>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Blueprint</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img 
            src="/github.com/artistscloud/odar/ODAR/Blue Prints/nanofiber-tube-follicle-blueprint.svg" 
            alt="Nanofiber Tubular Artificial Hair Follicle Blueprint"
            className="w-full max-w-3xl mx-auto"
          />
        </div>
      </div>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Interactive Visualization</h3>
        <NanoFiberSensorVisualization />
      </section>
      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Technical Specifications</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium mb-2">Key Dimensions</h4>
            <ul className="list-disc pl-5 text-odar-gray-700 space-y-1">
              <li><strong>Tube Diameter</strong>: 500-1000 nm</li>
              <li><strong>Length</strong>: Variable, typically 10-50 μm</li>
              <li><strong>Configuration</strong>: Array of 1000+ follicles per mm²</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2">Material Composition</h4>
            <ul className="list-disc pl-5 text-odar-gray-700 space-y-1">
              <li><strong>Outer Layer</strong>: Polyacrylonitrile (PAN) with silver nanoparticles</li>
              <li><strong>Middle Layer</strong>: PEDOT:PSS conductive polymer</li>
              <li><strong>Inner Layer</strong>: ZIF-8 metal-organic framework composite</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-2">Performance Enhancement</h4>
            <ul className="list-disc pl-5 text-odar-gray-700 space-y-1">
              <li><strong>Sensitivity Improvement</strong>: 500-1000% increased surface area</li>
              <li><strong>Detection Threshold</strong>: Sub-ppb level for target compounds</li>
              <li><strong>Selectivity</strong>: 30-40% improved compound discrimination</li>
              <li><strong>Response Time</strong>: Decreased by approximately 45%</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NanoFiberSensorSection;
