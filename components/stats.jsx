'use client'
import React from 'react'
import { useState,useEffect } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
const AnimatedCounter = ({ target, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    if (!isIntersecting) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isIntersecting, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-black bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent mb-2">
        {count.toLocaleString()}{suffix}
      </div>
    </div>
  );
};

export default AnimatedCounter
