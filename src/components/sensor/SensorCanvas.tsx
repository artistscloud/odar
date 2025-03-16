
import React, { useEffect, useRef } from 'react';
import { Point } from '../../types/sensor';
import SensorGrid from './SensorGrid';
import DeviceIndicator from './DeviceIndicator';
import SensorCoverage from './SensorCoverage';
import DetectionPoints from './DetectionPoints';

interface SensorCanvasProps {
  points: Point[];
  devicePosition: { x: number; y: number };
  setDevicePosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  heatmapVisible: boolean;
}

const SensorCanvas: React.FC<SensorCanvasProps> = ({ 
  points, 
  devicePosition, 
  setDevicePosition,
  heatmapVisible
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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
      
      // Render all components
      SensorGrid({ devicePosition, ctx });
      DeviceIndicator({ devicePosition, ctx });
      SensorCoverage({ devicePosition, ctx });
      DetectionPoints({ points, devicePosition, ctx, heatmapVisible });
      
      // Continue animation
      animationFrame = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [points, devicePosition, setDevicePosition, heatmapVisible]);

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-full rounded-md"
    />
  );
};

export default SensorCanvas;
