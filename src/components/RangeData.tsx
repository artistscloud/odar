
import React, { useState, useEffect } from 'react';

type RangeSensorData = {
  id: string;
  angle: number;
  distance: number;
  maxDistance: number;
  status: 'active' | 'inactive';
};

const RangeData: React.FC = () => {
  const [sensors, setSensors] = useState<RangeSensorData[]>([
    { id: 'front', angle: 0, distance: 0, maxDistance: 400, status: 'inactive' },
    { id: 'left', angle: 90, distance: 0, maxDistance: 400, status: 'inactive' },
    { id: 'right', angle: -90, distance: 0, maxDistance: 400, status: 'inactive' },
  ]);
  
  const simulateSensorReadings = () => {
    const newReadings = sensors.map((sensor) => ({
      ...sensor,
      distance: Math.floor(Math.random() * 300) + 20,
      status: 'active' as const,
    }));
    
    setSensors(newReadings);
  };
  
  useEffect(() => {
    // Initial delay before starting readings
    const initialDelay = setTimeout(() => {
      simulateSensorReadings();
      
      // Continuous updates
      const interval = setInterval(simulateSensorReadings, 2000);
      
      return () => clearInterval(interval);
    }, 1500);
    
    return () => clearTimeout(initialDelay);
  }, []);
  
  return (
    <div className="glass-card p-5 overflow-hidden animate-slide-up transition-all duration-500">
      <h3 className="text-lg font-medium mb-4">Ultrasonic Range Data</h3>
      <div className="space-y-5">
        {sensors.map((sensor) => (
          <div key={sensor.id} className="relative">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center">
                <div 
                  className={`w-2 h-2 rounded-full mr-2 ${
                    sensor.status === 'active' ? 'bg-odar-blue animate-pulse' : 'bg-odar-gray-400'
                  }`}
                ></div>
                <span className="text-sm font-medium capitalize">{sensor.id} Sensor</span>
              </div>
              <span className="text-sm text-odar-gray-600">
                {sensor.distance} cm
              </span>
            </div>
            <div className="h-2 bg-odar-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-odar-blue transition-all duration-700 ease-out rounded-full"
                style={{ 
                  width: `${(sensor.distance / sensor.maxDistance) * 100}%`,
                  opacity: sensor.status === 'active' ? 1 : 0.3,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 border-t border-odar-gray-200 pt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-odar-gray-600">Triangulated Position</span>
          <span className="font-medium">
            <span className="text-odar-blue">1.4m</span> @ <span className="text-odar-accent-dark">32°</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RangeData;
