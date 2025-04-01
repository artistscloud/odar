import React, { useState, useEffect, useCallback } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Database, 
  Activity, 
  Wifi, 
  Server, 
  AlertTriangle 
} from 'lucide-react';

// Interfaces for type safety
interface SensorDataPoint {
  timestamp: string;
  [key: string]: number | string;
}

interface SystemStatus {
  dataRate: number;
  storageUsed: number;
  networkStatus: 'Connected' | 'Disconnected';
  activeSensors: number;
  errorRate: number;
}

const DataAcquisitionDashboard: React.FC = () => {
  const [sensorData, setSensorData] = useState<SensorDataPoint[]>([]);
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    dataRate: 100,
    storageUsed: 45,
    networkStatus: 'Connected',
    activeSensors: 24,
    errorRate: 0.02
  });

  // Generates simulated sensor data
  const generateSensorData = useCallback(() => {
    const timestamp = new Date().toLocaleTimeString();
    const newDataPoint: SensorDataPoint = {
      timestamp,
      olfactorySensor1: Math.random() * 100,
      olfactorySensor2: Math.random() * 100,
      rangingSensor1: Math.random() * 50,
      rangingSensor2: Math.random() * 50,
      temperature: 25 + Math.random() * 5,
      humidity: 50 + Math.random() * 10
    };
    
    setSensorData(prev => {
      const updatedData = [...prev, newDataPoint];
      // Keep only last 50 data points
      return updatedData.slice(-50);
    });

    // Simulate dynamic system status changes
    setSystemStatus(prev => ({
      ...prev,
      storageUsed: Math.min(100, (prev.storageUsed + 0.1) % 100),
      errorRate: Math.max(0, Math.min(1, prev.errorRate + (Math.random() - 0.5) * 0.01)),
      networkStatus: Math.random() > 0.95 ? 'Disconnected' : 'Connected'
    }));
  }, []);

  // Start data collection on component mount
  useEffect(() => {
    const dataCollectionInterval = setInterval(generateSensorData, 1000);
    
    // Cleanup interval on component unmount
    return () => clearInterval(dataCollectionInterval);
  }, [generateSensorData]);

  // Render system status cards
  const renderStatusCard = (
    icon: React.ReactNode, 
    title: string, 
    value: string | number, 
    color: string
  ) => (
    <div className={`bg-white p-4 rounded-lg shadow-md flex items-center ${color}`}>
      <div className="mr-4">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full bg-gray-50 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Data Acquisition Dashboard</h2>
      
      {/* System Status Overview */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {renderStatusCard(
          <Database className="w-8 h-8 text-blue-500" />, 
          'Data Rate', 
          `${systemStatus.dataRate} Hz`, 
          'border-l-4 border-blue-500'
        )}
        {renderStatusCard(
          <Server className="w-8 h-8 text-green-500" />, 
          'Storage', 
          `${systemStatus.storageUsed.toFixed(1)}%`, 
          'border-l-4 border-green-500'
        )}
        {renderStatusCard(
          <Wifi className="w-8 h-8 text-purple-500" />, 
          'Network', 
          systemStatus.networkStatus, 
          'border-l-4 border-purple-500'
        )}
        {renderStatusCard(
          <Activity className="w-8 h-8 text-yellow-500" />, 
          'Active Sensors', 
          systemStatus.activeSensors, 
          'border-l-4 border-yellow-500'
        )}
        {renderStatusCard(
          <AlertTriangle className="w-8 h-8 text-red-500" />, 
          'Error Rate', 
          `${(systemStatus.errorRate * 100).toFixed(2)}%`, 
          'border-l-4 border-red-500'
        )}
      </div>

      {/* Real-time Data Charts */}
      <div className="grid grid-cols-2 gap-4">
        {/* Olfactory Sensor Readings */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Olfactory Sensors</h3>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <LineChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="olfactorySensor1" 
                  stroke="#8884d8" 
                  name="Sensor 1" 
                />
                <Line 
                  type="monotone" 
                  dataKey="olfactorySensor2" 
                  stroke="#82ca9d" 
                  name="Sensor 2" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Environmental Sensors */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Environmental Conditions</h3>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <LineChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#ff7300" 
                  name="Temperature (°C)" 
                />
                <Line 
                  type="monotone" 
                  dataKey="humidity" 
                  stroke="#387908" 
                  name="Humidity (%)" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAcquisitionDashboard;