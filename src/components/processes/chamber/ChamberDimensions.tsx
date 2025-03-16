
import React from 'react';

const ChamberDimensions = () => {
  return (
    <div>
      <h4 className="text-lg font-medium mt-6 mb-3">Chamber Dimensions</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Overall Size</strong>: 5.0m x 5.0m x 5.0m (W x D x H)</li>
        <li><strong>Testing Area</strong>: 4.0m x 4.0m (central workspace)</li>
        <li><strong>Movement Area</strong>: 4.0m x 4.0m (for robotic positioning system)</li>
      </ul>
    </div>
  );
};

export default ChamberDimensions;
