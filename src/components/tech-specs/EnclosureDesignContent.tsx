
import React from 'react';

const EnclosureDesignContent: React.FC = () => {
  return (
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
      </div>
    </section>
  );
};

export default EnclosureDesignContent;
