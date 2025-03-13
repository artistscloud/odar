
import React from 'react';
import SensorArrayContent from './SensorArrayContent';

const SensorArraySection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sensor Array</h2>
      <SensorArrayContent />
    </div>
  );
};

export default SensorArraySection;
