import { useState, useEffect, useRef } from 'react';

const useCountUp = (end, duration = 2000, start = 0, isVisible = false) => {
  const [count, setCount] = useState(start);
  const countingRef = useRef(false);

  useEffect(() => {
    if (!isVisible || countingRef.current) return;
    
    countingRef.current = true;
    let startTime;
    const startValue = start;
    const endValue = end;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [end, duration, start, isVisible]);

  return count;
};

export default useCountUp;