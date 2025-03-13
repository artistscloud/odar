
import { useEffect, useState } from 'react';

/**
 * Custom hook for creating staggered animations
 * @param itemCount The number of items to animate
 * @param staggerDelay The delay between each item's animation
 * @param initialDelay The initial delay before the first animation
 * @returns An array of booleans indicating if each item should be visible
 */
export const useStaggeredAnimation = (
  itemCount: number,
  staggerDelay = 100,
  initialDelay = 0
): boolean[] => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(itemCount).fill(false));

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < itemCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems((prev) => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, initialDelay + i * staggerDelay);
      
      timeouts.push(timeout);
    }
    
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [itemCount, staggerDelay, initialDelay]);
  
  return visibleItems;
};

/**
 * Easing functions for animations
 */
export const easing = {
  easeInOutQuad: (t: number): number => 
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
    
  easeOutQuad: (t: number): number => 1 - (1 - t) * (1 - t),
  
  easeInQuad: (t: number): number => t * t,
  
  easeInOutCubic: (t: number): number => 
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
};

/**
 * Hook to create a counting up animation
 * @param end The final number to count to
 * @param duration The duration of the animation in ms
 * @param delay The delay before starting in ms
 * @returns The current count value
 */
export const useCountUp = (end: number, duration = 2000, delay = 0): number => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    let startTimeout: NodeJS.Timeout;
    
    const startAnimation = () => {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        
        if (elapsed < duration) {
          const progress = easing.easeOutQuad(elapsed / duration);
          setCount(Math.floor(progress * end));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    if (delay) {
      startTimeout = setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }
    
    return () => {
      if (startTimeout) clearTimeout(startTimeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, delay]);
  
  return count;
};
