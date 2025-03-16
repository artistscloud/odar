
import React from 'react';
import OdARDashboard from './OdARDashboard';
import SensorCanvas from './sensor/SensorCanvas';
import useSensorData from '../hooks/useSensorData';
import useVisualizationState from '../hooks/useVisualizationState';

const SensorVisualizer: React.FC = () => {
  const points = useSensorData();
  const {
    devicePosition,
    setDevicePosition,
    heatmapVisible,
    showDashboard,
    toggleView
  } = useVisualizationState();
  
  return (
    <div className="glass-card p-5 h-full overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium">Odor Detection Map</h3>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-odar-blue animate-pulse"></div>
            <span className="text-xs text-odar-gray-600">Live Data</span>
          </div>
          <button 
            onClick={toggleView}
            className="text-xs px-2 py-0.5 rounded-full bg-odar-gray-100 text-odar-gray-600 hover:bg-odar-gray-200 transition-colors"
          >
            {heatmapVisible ? 'Point View' : 'Heatmap View'}
          </button>
        </div>
      </div>
      
      {heatmapVisible && showDashboard ? (
        <div className="animate-fade-in">
          <OdARDashboard />
        </div>
      ) : (
        <div className="relative h-[calc(100%-2rem)] w-full">
          <SensorCanvas 
            points={points}
            devicePosition={devicePosition}
            setDevicePosition={setDevicePosition}
            heatmapVisible={heatmapVisible}
          />
        </div>
      )}
    </div>
  );
};

export default SensorVisualizer;
