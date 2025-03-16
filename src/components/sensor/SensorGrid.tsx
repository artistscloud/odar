
import React from 'react';

interface SensorGridProps {
  devicePosition: { x: number; y: number };
  ctx: CanvasRenderingContext2D;
}

const SensorGrid: React.FC<SensorGridProps> = ({ devicePosition, ctx }) => {
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
  
  return null; // This is a render-helper component that doesn't return JSX
};

export default SensorGrid;
