
import React from 'react';

const EntryAirlock = () => {
  return (
    <div>
      <h5 className="text-base font-medium mt-4 mb-2">Entry Airlock System</h5>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>Airlock Door</strong>: With status indicators (open/closed/locked)</li>
        <li><strong>Pressure Equalization</strong>: For smooth operation</li>
        <li><strong>Safety Interlocks</strong>: Prevents simultaneous door opening</li>
      </ul>
    </div>
  );
};

export default EntryAirlock;
