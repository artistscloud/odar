
import React from 'react';

interface DeviceIndicatorProps {
  devicePosition: { x: number; y: number };
  ctx: CanvasRenderingContext2D;
}

const DeviceIndicator: React.FC<DeviceIndicatorProps> = ({ devicePosition, ctx }) => {
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
  
  return null; // This is a render-helper component that doesn't return JSX
};

export default DeviceIndicator;
