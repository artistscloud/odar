
import React from 'react';

const ReferenceInstruments = () => {
  return (
    <div>
      <h5 className="text-base font-medium mt-4 mb-2">Reference Instruments</h5>
      <ul className="list-disc pl-5 space-y-1">
        <li><strong>PID Monitor</strong>: Photoionization detector</li>
        <li><strong>GC</strong>: Gas chromatograph</li>
        <li><strong>MGS</strong>: Multi-gas analyzer</li>
        <li><strong>Power Connections</strong>: For each instrument</li>
      </ul>
    </div>
  );
};

export default ReferenceInstruments;
