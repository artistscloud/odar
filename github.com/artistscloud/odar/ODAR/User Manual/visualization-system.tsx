import React, { useState, useEffect } from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';
import { Camera, AlertCircle, Battery, Thermometer } from 'lucide-react';

// Custom heatmap implementation using standard React components
const HeatMap = ({ data, width, height, maxValue }) => {
  const cellSize = Math.min(width, height) / 10;

  return (
    <div className="relative w-full h-full">
      {data.map((row, y) => (
        <div key={y} className="flex">
          {row.map((value, x) => {
            const intensity = value / maxValue;
            return (
              <div
                key={`${x}-${y}`}
                className="flex items-center justify-center"
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: `rgba(59, 130, 246, ${intensity})`,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <span className="text-xs text-white">
                  {value.toFixed(1)}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

const OdARDashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [detectionData, setDetectionData] = useState([]);
  const [environmentalData, setEnvironmentalData] = useState({
    temperature: 25.0,
    humidity: 50.0,
    pressure: 1013.25,
    history: []
  });
  const [systemStatus, setSystemStatus] = useState({
    status: 'Active',
    batteryLevel: 85,
    messages: []
  });

  // Demo data generation for heatmap
  const generateHeatmapData = () => {
    const gridSize = 10;
    const data = Array(gridSize).fill(0).map(() => 
      Array(gridSize).fill(0).map(() => Math.random() * 100)
    );
    return data;
  };

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setSensorData(prev => [
        ...prev,
        {
          timestamp: new Date().toISOString(),
          values: Array(8).fill(0).map(() => Math.random() * 100)
        }
      ].slice(-20));

      setEnvironmentalData(prev => ({
        ...prev,
        temperature: 25 + Math.random() * 2,
        humidity: 50 + Math.random() * 5,
        history: [
          ...prev.history,
          {
            timestamp: new Date().toISOString(),
            temperature: 25 + Math.random() * 2,
            humidity: 50 + Math.random() * 5
          }
        ].slice(-20)
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4 w-full bg-gray-50">
      {/* Status Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <AlertCircle className="text-blue-500" />
            <span className="font-semibold">System Status</span>
          </div>
          <p className="text-2xl mt-2">{systemStatus.status}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <Battery className="text-green-500" />
            <span className="font-semibold">Battery Level</span>
          </div>
          <p className="text-2xl mt-2">{systemStatus.batteryLevel}%</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <Thermometer className="text-red-500" />
            <span className="font-semibold">Temperature</span>
          </div>
          <p className="text-2xl mt-2">{environmentalData.temperature.toFixed(1)}°C</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2">
            <Camera className="text-purple-500" />
            <span className="font-semibold">Active Detections</span>
          </div>
          <p className="text-2xl mt-2">{detectionData.length}</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Sensor Readings Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Sensor Readings</h2>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <LineChart data={sensorData}>
                <XAxis 
                  dataKey="timestamp" 
                  tick={{fontSize: 12}}
                  interval="preserveStartEnd"
                />
                <YAxis tick={{fontSize: 12}} />
                <Tooltip />
                <Legend />
                {Array(8).fill(0).map((_, idx) => (
                  <Line
                    key={`sensor-${idx}`}
                    type="monotone"
                    dataKey={`values[${idx}]`}
                    name={`Sensor ${idx + 1}`}
                    stroke={`hsl(${idx * 45}, 70%, 50%)`}
                    dot={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Concentration Heatmap */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Concentration Heatmap</h2>
          <div className="h-[300px]">
            <HeatMap 
              data={generateHeatmapData()} 
              width={300} 
              height={300} 
              maxValue={100}
            />
          </div>
        </div>

        {/* Environmental Data Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Environmental Conditions</h2>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <LineChart data={environmentalData.history}>
                <XAxis dataKey="timestamp" tick={{fontSize: 12}} />
                <YAxis tick={{fontSize: 12}} />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  name="Temperature (°C)"
                  stroke="#ef4444" 
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="humidity" 
                  name="Humidity (%)" 
                  stroke="#3b82f6"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detection Log */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Detection Log</h2>
          <div className="overflow-auto h-[300px]">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Time</th>
                  <th className="px-4 py-2 text-left">Compound</th>
                  <th className="px-4 py-2 text-left">Concentration</th>
                  <th className="px-4 py-2 text-left">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {detectionData.map((detection, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-4 py-2">{new Date(detection.timestamp).toLocaleTimeString()}</td>
                    <td className="px-4 py-2">{detection.compound}</td>
                    <td className="px-4 py-2">{detection.concentration.toFixed(2)} ppm</td>
                    <td className="px-4 py-2">{(detection.confidence * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* System Messages */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">System Messages</h2>
        <div className="h-32 overflow-y-auto">
          {systemStatus.messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 mb-1 rounded ${
                msg.type === 'error' ? 'bg-red-50' : 'bg-gray-50'
              }`}
            >
              <span className="text-sm text-gray-500">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
              <span className="ml-2">{msg.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OdARDashboard;
