
import React, { useEffect, useRef, useState } from 'react';
import OdARDashboard from './OdARDashboard';

type Point = {
  x: number;
  y: number;
  intensity: number; // 0-100 scale
  age: number; // 0-1 scale, where 1 is new
};

const SensorVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [devicePosition, setDevicePosition] = useState({ x: 0, y: 0 });
  const [heatmapVisible, setHeatmapVisible] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  
  // Simulate the movement of a source
  useEffect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        // Simulate a moving target
        const angle = (Date.now() / 10000) * Math.PI * 2; // Full circle every 10 seconds
        const distance = 80 + Math.sin(Date.now() / 5000) * 40; // Between 40-120px
        
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        const intensity = 60 + Math.sin(Date.now() / 3000) * 30; // Between 30-90
        
        // Add new point
        setPoints(prevPoints => {
          const newPoints = [...prevPoints, { x, y, intensity, age: 1 }]
            // Age existing points
            .map(p => ({ ...p, age: p.age * 0.95 }))
            // Remove old points
            .filter(p => p.age > 0.05);
            
          // Limit the number of points to prevent performance issues
          if (newPoints.length > 50) {
            return newPoints.slice(newPoints.length - 50);
          }
          return newPoints;
        });
      }, 200);
      
      return () => clearInterval(interval);
    }, 2000);
  }, []);

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
  
  // Initialize canvas and handle rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size with better resolution for Retina displays
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      // Center of the canvas
      setDevicePosition({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Animation frame for rendering
    let animationFrame: number;
    
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background grid
      ctx.strokeStyle = 'rgba(224, 231, 255, 0.2)';
      ctx.beginPath();
      
      // Draw circular distance markers
      const distances = [50, 100, 150, 200];
      distances.forEach(dist => {
        ctx.beginPath();
        ctx.arc(devicePosition.x, devicePosition.y, dist, 0, Math.PI * 2);
        ctx.stroke();
        
        // Distance labels
        ctx.fillStyle = 'rgba(100, 116, 139, 0.5)';
        ctx.font = '10px Inter, system-ui, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${dist}cm`, devicePosition.x + dist + 5, devicePosition.y);
      });
      
      // Draw axis lines
      ctx.beginPath();
      ctx.moveTo(devicePosition.x - 200, devicePosition.y);
      ctx.lineTo(devicePosition.x + 200, devicePosition.y);
      ctx.moveTo(devicePosition.x, devicePosition.y - 200);
      ctx.lineTo(devicePosition.x, devicePosition.y + 200);
      ctx.stroke();
      
      // Draw device
      ctx.fillStyle = '#0096FF';
      ctx.beginPath();
      ctx.arc(devicePosition.x, devicePosition.y, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw direction indicator
      ctx.strokeStyle = '#0096FF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(devicePosition.x, devicePosition.y);
      ctx.lineTo(devicePosition.x, devicePosition.y - 20);
      ctx.stroke();
      
      // Draw sensors coverage areas
      const sensorAngles = [0, 90, -90]; // front, left, right
      const sensorRange = 200;
      const sensorWidth = Math.PI / 6; // 30 degrees arc
      
      sensorAngles.forEach(angle => {
        const startAngle = (angle - sensorWidth / 2) * (Math.PI / 180);
        const endAngle = (angle + sensorWidth / 2) * (Math.PI / 180);
        
        ctx.fillStyle = 'rgba(224, 242, 254, 0.1)';
        ctx.beginPath();
        ctx.moveTo(devicePosition.x, devicePosition.y);
        ctx.arc(devicePosition.x, devicePosition.y, sensorRange, startAngle - Math.PI/2, endAngle - Math.PI/2);
        ctx.closePath();
        ctx.fill();
        
        // Sensor arc
        ctx.strokeStyle = 'rgba(14, 165, 233, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(devicePosition.x, devicePosition.y, sensorRange, startAngle - Math.PI/2, endAngle - Math.PI/2);
        ctx.stroke();
      });
      
      // Draw points (odor/chemical detections)
      if (heatmapVisible) {
        // Draw heatmap
        points.forEach(point => {
          const gradient = ctx.createRadialGradient(
            devicePosition.x + point.x, 
            devicePosition.y + point.y, 
            0,
            devicePosition.x + point.x, 
            devicePosition.y + point.y, 
            point.intensity / 2
          );
          
          gradient.addColorStop(0, `rgba(3, 105, 161, ${point.age * 0.5})`);
          gradient.addColorStop(0.5, `rgba(3, 105, 161, ${point.age * 0.2})`);
          gradient.addColorStop(1, `rgba(3, 105, 161, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(
            devicePosition.x + point.x, 
            devicePosition.y + point.y, 
            point.intensity / 2, 
            0, 
            Math.PI * 2
          );
          ctx.fill();
        });
      } else {
        // Draw points
        points.forEach(point => {
          ctx.fillStyle = `rgba(3, 105, 161, ${point.age})`;
          ctx.beginPath();
          ctx.arc(
            devicePosition.x + point.x, 
            devicePosition.y + point.y, 
            4, 
            0, 
            Math.PI * 2
          );
          ctx.fill();
          
          // Intensity ring
          ctx.strokeStyle = `rgba(3, 105, 161, ${point.age * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(
            devicePosition.x + point.x, 
            devicePosition.y + point.y, 
            point.intensity / 10, 
            0, 
            Math.PI * 2
          );
          ctx.stroke();
        });
      }
      
      // Continue animation
      animationFrame = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [points, devicePosition, heatmapVisible]);

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
          <canvas 
            ref={canvasRef}
            className="w-full h-full rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default SensorVisualizer;
