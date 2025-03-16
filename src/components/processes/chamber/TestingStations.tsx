
import React from 'react';

const TestingStations = () => {
  return (
    <div>
      <h5 className="text-base font-medium mt-4 mb-2">Testing Stations</h5>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Main Test Station</strong>: Central position for OdAR device testing</li>
        <li><strong>Alternative Test Positions</strong>: Multiple locations for flexible testing</li>
        <li><strong>Power and Data Connections</strong>: At each testing position</li>
      </ul>
    </div>
  );
};

export default TestingStations;
