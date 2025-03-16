
import React from 'react';

const EnvironmentalControl = () => {
  return (
    <div>
      <h5 className="text-base font-medium mt-4 mb-2">Environmental Control System</h5>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>HVAC Unit</strong>: Temperature and humidity control</li>
        <li><strong>Air Ducts</strong>: Distribution system throughout the chamber</li>
        <li><strong>Air Vents</strong>: Multiple vents for climate control</li>
        <li><strong>Sensors</strong>: Temperature and humidity monitoring at multiple locations</li>
      </ul>
    </div>
  );
};

export default EnvironmentalControl;
