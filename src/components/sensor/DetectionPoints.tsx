
import React from 'react';
import { Point } from '../../types/sensor';

interface DetectionPointsProps {
  points: Point[];
  devicePosition: { x: number; y: number };
  ctx: CanvasRenderingContext2D;
  heatmapVisible: boolean;
}

const DetectionPoints: React.FC<DetectionPointsProps> = ({ 
  points, 
  devicePosition, 
  ctx, 
  heatmapVisible 
}) => {
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
  
  return null; // This is a render-helper component that doesn't return JSX
};

export default DetectionPoints;
