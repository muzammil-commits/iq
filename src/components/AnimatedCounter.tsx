import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className = '',
  duration = 1.8
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    if (!isInView) return;

    // Check if the value has a numeric core: e.g., "$10M+", "1000+", "99.2%", "10+"
    const match = value.match(/^([^0-9.]*)([0-9.]+)(.*)$/);

    if (!match) {
      // Typewriter effect for text like "01 / 03" or strings without numbers
      let index = 0;
      setDisplayValue('');
      const interval = setInterval(() => {
        index++;
        setDisplayValue(value.slice(0, index));
        if (index >= value.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }

    const prefix = match[1] || '';
    const num = parseFloat(match[2]);
    const suffix = match[3] || '';
    const isDecimal = match[2].includes('.');
    const decimalPlaces = isDecimal ? match[2].split('.')[1].length : 0;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    let animationFrameId: number;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = ease * num;

      if (isDecimal) {
        setDisplayValue(`${prefix}${current.toFixed(decimalPlaces)}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${Math.floor(current).toLocaleString()}${suffix}`);
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={`inline-block font-mono tracking-tight ${className}`}>
      {displayValue}
    </span>
  );
};
