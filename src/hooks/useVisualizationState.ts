
import { useState, useEffect } from 'react';

const useVisualizationState = () => {
  const [devicePosition, setDevicePosition] = useState({ x: 0, y: 0 });
  const [heatmapVisible, setHeatmapVisible] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  
  // Toggle heatmap after delay
  useEffect(() => {
    const heatmapTimer = setTimeout(() => {
      setHeatmapVisible(true);
    }, 5000);
    
    return () => clearTimeout(heatmapTimer);
  }, []);

  // Toggle dashboard view when heatmap is enabled
  useEffect(() => {
    if (heatmapVisible) {
      const dashboardTimer = setTimeout(() => {
        setShowDashboard(true);
      }, 2000);
      
      return () => clearTimeout(dashboardTimer);
    }
  }, [heatmapVisible]);

  const toggleView = () => {
    setHeatmapVisible(!heatmapVisible);
    if (!heatmapVisible) {
      // When switching to heatmap, wait briefly before showing dashboard
      setTimeout(() => setShowDashboard(true), 500);
    } else {
      // When switching to point view, immediately hide dashboard
      setShowDashboard(false);
    }
  };

  return {
    devicePosition,
    setDevicePosition,
    heatmapVisible,
    showDashboard,
    toggleView
  };
};

export default useVisualizationState;
