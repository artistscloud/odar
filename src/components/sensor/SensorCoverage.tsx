
import React from 'react';

interface SensorCoverageProps {
  devicePosition: { x: number; y: number };
  ctx: CanvasRenderingContext2D;
}

const SensorCoverage: React.FC<SensorCoverageProps> = ({ devicePosition, ctx }) => {
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
  
  return null; // This is a render-helper component that doesn't return JSX
};

export default SensorCoverage;
