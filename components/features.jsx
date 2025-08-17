import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Icon } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`bg-[#A2AF9B] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
        isHovered ? 'scale-105 rotate-1' : 'scale-100'
      }`}>
        <div className="w-16 h-16  bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] rounded-2xl flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
export default FeatureCard
