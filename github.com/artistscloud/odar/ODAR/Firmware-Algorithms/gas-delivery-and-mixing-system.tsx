import React, { useState, useEffect } from 'react';

const GasDeliverySystem = () => {
  const [flowActive, setFlowActive] = useState(true);
  const [mixerRotation, setMixerRotation] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setMixerRotation(prev => (prev + 5) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-gray-50 p-4">
      <h2 className="text-xl font-bold text-center mb-4">Gas Delivery and Mixing System</h2>
      
      <div className="relative w-full h-[500px] border-2 border-gray-300 rounded-lg p-4">
        {/* Gas Cylinders */}
        <div className="absolute top-4 left-4 flex space-x-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-24 bg-blue-500 rounded-lg border-2 border-blue-700" />
              <div className="w-8 h-4 bg-blue-700 -mt-1" />
              <div className="text-sm mt-1">Gas {i}</div>
            </div>
          ))}
        </div>
        
        {/* Flow Controllers */}
        <div className="absolute top-40 left-4 flex space-x-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-16 bg-gray-200 border-2 border-gray-400 rounded">
                <div 
                  className="w-2 h-full bg-blue-400 transition-all duration-500"
                  style={{
                    height: flowActive ? '100%' : '0%'
                  }}
                />
              </div>
              <div className="text-sm mt-1">MFC {i}</div>
            </div>
          ))}
        </div>
        
        {/* Mixing Chamber */}
        <div className="absolute top-40 left-1/3">
          <div className="w-32 h-32 bg-gray-100 border-2 border-gray-400 rounded-full relative overflow-hidden">
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `rotate(${mixerRotation}deg)`
              }}
            >
              <div className="w-24 h-1 bg-gray-400" />
              <div className="w-1 h-24 bg-gray-400" />
            </div>
          </div>
          <div className="text-center mt-2">Dynamic Mixer</div>
        </div>
        
        {/* Distribution System */}
        <div className="absolute top-40 right-4 w-64">
          <div className="w-full h-48 bg-gray-100 border-2 border-gray-400 rounded-lg p-2">
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-blue-400 rounded-full" />
                  <div className="text-xs mt-1">Port {i}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-2">Distribution Manifold</div>
        </div>
        
        {/* Flow Indicators */}
        {flowActive && (
          <>
            <div className="absolute top-32 left-4 right-1/3 h-2">
              <div className="h-full bg-blue-200 animate-pulse" />
            </div>
            <div className="absolute top-40 left-1/3 right-80 h-2">
              <div className="h-full bg-blue-300 animate-pulse" />
            </div>
          </>
        )}
        
        {/* Control Panel */}
        <div className="absolute bottom-4 left-4 right-4 h-24 bg-gray-800 rounded-lg p-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <button 
              className={`px-4 py-2 rounded ${flowActive ? 'bg-green-500' : 'bg-red-500'} text-white`}
              onClick={() => setFlowActive(!flowActive)}
            >
              {flowActive ? 'Flow Active' : 'Flow Inactive'}
            </button>
            <div className="text-white">
              <div>Pressure: 100 PSI</div>
              <div>Flow Rate: 2.5 L/min</div>
            </div>
          </div>
          <div className="text-white">
            <div>Temperature: 23°C</div>
            <div>Mixer Speed: 1200 RPM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GasDeliverySystem;