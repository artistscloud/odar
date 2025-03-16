
import { useState, useEffect } from 'react';
import { Point } from '../types/sensor';

const useSensorData = () => {
  const [points, setPoints] = useState<Point[]>([]);
  
  // Simulate the movement of a source
  useEffect(() => {
    const dataTimer = setTimeout(() => {
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
    
    return () => clearTimeout(dataTimer);
  }, []);

  return points;
};

export default useSensorData;
