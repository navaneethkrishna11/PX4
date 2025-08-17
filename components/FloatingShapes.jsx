'use client';
import React from 'react'
import { useParallax } from '@/hooks/useParallax';
import { useMemo } from 'react';


const FloatingShapes = () => {
    const scrollY = useParallax();
  
  const shapes = useMemo(() => [
    { id: 1, x: '10%', y: '20%', size: 'w-72 h-72', color: 'from-blue-400 to-purple-600' },
    { id: 2, x: '80%', y: '60%', size: 'w-96 h-96', color: 'from-cyan-400 to-blue-600' },
    { id: 3, x: '60%', y: '10%', size: 'w-64 h-64', color: 'from-purple-400 to-pink-600' },
    { id: 4, x: '20%', y: '80%', size: 'w-80 h-80', color: 'from-pink-400 to-red-500' },
  ], []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.size} bg-gradient-to-r ${shape.color} rounded-full blur-3xl opacity-20 animate-pulse`}
          style={{
            left: shape.x,
            top: shape.y,
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.02}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes