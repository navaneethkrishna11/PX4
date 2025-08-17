import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ChevronRight, Sparkles, Zap, Brain, Eye, Layers, Check, Star } from 'lucide-react';


const useMousePosition = () => {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
}
export default useMousePosition
