import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EnvironmentalControl = () => {
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(50);
  const [pressure, setPressure] = useState(0);
  const [airflow, setAirflow] = useState(true);
  const [historyData, setHistoryData] = useState([]);
  
  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate environmental fluctuations
      setTemperature(prev => prev + (Math.random() - 0.5) * 0.2);
      setHumidity(prev => Math.min(80, Math.max(20, prev + (Math.random() - 0.5) * 0.5)));
      setPressure(prev => prev + (Math.random() - 0.5) * 0.1);
      
      // Update history
      setHistoryData(prev => [
        ...prev.slice(-20),
        {
          time: new Date().toLocaleTimeString(),
          temperature,
          humidity,
          pressure
        }
      ]);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [temperature, humidity, pressure]);

  return (
    <div className="w-full h-full bg-gray-50 p-4">
      <h2 className="text-xl font-bold text-center mb-4">Environmental Control System</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {/* Chamber View */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 relative h-[400px]">
          <h3 className="text-lg font-semibold mb-4">Chamber Status</h3>
          
          {/* Chamber representation */}
          <div className="absolute inset-10 border-4 border-gray-300 rounded-lg">
            {/* HEPA Filters */}
            <div className="absolute -top-2 inset-x-10 h-4 bg-blue-100 border border-blue-300" />
            
            {/* Air Flow Indicators */}
            {airflow && (
              <>
                <div className="absolute top-4 left-1/4 h-3/4 w-1 animate-pulse bg-blue-200" />
                <div className="absolute top-4 left-2/4 h-3/4 w-1 animate-pulse bg-blue-200" />
                <div className="absolute top-4 left-3/4 h-3/4 w-1 animate-pulse bg-blue-200" />
              </>
            )}
            
            {/* Temperature Display */}
            <div className="absolute top-1/4 left-1/4 bg-red-100 rounded p-2">
              <div className="text-sm font-medium">{temperature.toFixed(1)}°C</div>
            </div>
            
            {/* Humidity Display */}
            <div className="absolute top-1/4 right-1/4 bg-blue-100 rounded p-2">
              <div className="text-sm font-medium">{humidity.toFixed(1)}%RH</div>
            </div>
            
            {/* Pressure Display */}
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 bg-green-100 rounded p-2">
              <div className="text-sm font-medium">{pressure.toFixed(1)} Pa</div>
            </div>
          </div>
        </div>
        
        {/* Environmental Trends */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 h-[400px]">
          <h3 className="text-lg font-semibold mb-4">Environmental Trends</h3>
          <ResponsiveContainer>
            <LineChart data={historyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temperature" stroke="#ef4444" name="Temperature" />
              <Line type="monotone" dataKey="humidity" stroke="#3b82f6" name="Humidity" />
              <Line type="monotone" dataKey="pressure" stroke="#22c55e" name="Pressure" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Control Panel */}
        <div className="col-span-2 bg-gray-800 rounded-lg p-4 text-white">
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Temperature Control</h4>
              <div className="flex items-center space-x-2">
                <input 
                  type="range" 
                  min="0" 
                  max="40" 
                  value={temperature} 
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full"
                />
                <span>{temperature.toFixed(1)}°C</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Humidity Control</h4>
              <div className="flex items-center space-x-2">
                <input 
                  type="range" 
                  min="20" 
                  max="80" 
                  value={humidity}
                  onChange={(e) => setHumidity(Number(e.target.value))}
                  className="w-full"
                />
                <span>{humidity.toFixed(1)}%</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Pressure Control</h4>
              <div className="flex items-center space-x-2">
                <input 
                  type="range" 
                  min="-50" 
                  max="50" 
                  value={pressure}
                  onChange={(e) => setPressure(Number(e.target.value))}
                  className="w-full"
                />
                <span>{pressure.toFixed(1)} Pa</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Air Flow</h4>
              <button 
                className={`w-full px-4 py-2 rounded ${airflow ? 'bg-green-500' : 'bg-red-500'}`}
                onClick={() => setAirflow(!airflow)}
              >
                {airflow ? 'Active' : 'Inactive'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalControl;