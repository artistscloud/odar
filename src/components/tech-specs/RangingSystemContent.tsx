
import React from 'react';

const RangingSystemContent: React.FC = () => {
  return (
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
  );
};

export default RangingSystemContent;
