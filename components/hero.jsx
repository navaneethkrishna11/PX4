'use client'
import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [glitchText, setGlitchText] = useState('Edit. Enhance. Enchant.');
  const [demoHover, setDemoHover] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(prev => {
        if (prev === 'Edit. Enhance. Enchant.') return 'Design beyond the ordinary.';
        if (prev === 'Design beyond the ordinary.') return 'Glow up your photos';
        return 'Edit. Enhance. Enchant.';
      });
    }, 3000);
    return () => clearInterval(glitchInterval);
  }, []);

  const handleDemoEnter = useCallback(() => setDemoHover(true), []);
  const handleDemoLeave = useCallback(() => setDemoHover(false), []);

  const tools = ['Neural Enhance', 'Quantum Blur', 'Style Transfer', 'Background AI'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-0">
      <div className="text-center z-10 w-full max-w-7xl mx-auto">
        <div className="mb-6 pt-20 mt-10 sm:mb-8 lg:mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent leading-tight px-2">
            {glitchText}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed px-4">
            Your moment captured. Our passion edited.
            <br className="hidden sm:block" />
            Let's make your visuals unforgettable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-14 lg:mb-16 px-4">
          <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#DCD0A8] text-black font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl active:scale-95">
            Launch Neural Studio
            <ChevronRight className="inline ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gradient-to-r from-[#FED16A] to-[#F97A00] bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl hover:scale-105 transform transition-all duration-300 active:scale-95 relative overflow-hidden">
            <span className="relative z-10">Watch Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>

      <div 
  className="relative mx-auto w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-5xl px-4"
  onMouseEnter={handleDemoEnter}
  onMouseLeave={handleDemoLeave}
>
  <div className={`bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 ${
    demoHover ? 'scale-105 rotate-1' : 'scale-100'
  }`}>
    {/* Mock Photoshop Header */}
    <div className="bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] p-2 sm:p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/80 rounded-full"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/60 rounded-full"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white/40 rounded-full"></div>
        </div>
        <p className="text-white font-bold text-xs sm:text-sm">PhotoStudio Pro</p>
        <div className="w-12 sm:w-16"></div>
      </div>
    </div>

    {/* Mock Toolbar */}
    <div className="bg-gray-100 p-2 sm:p-3 border-b">
      <div className="flex justify-center space-x-1 sm:space-x-2">
        {['Select', 'Brush', 'Clone', 'Heal', 'Crop', 'Text'].map((tool, i) => (
          <div key={i} className="px-2 sm:px-3 py-1 sm:py-2 bg-white rounded text-xs sm:text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-[#FED16A] hover:to-[#F97A00] hover:text-white transition-all duration-300 cursor-pointer">
            {tool}
          </div>
        ))}
      </div>
    </div>

    {/* Main Interface */}
    <div className="p-3 sm:p-4 lg:p-6">
      <div className="grid grid-cols-12 gap-2 sm:gap-4 h-64 sm:h-80 lg:h-96">
        {/* Left Panel - Tools */}
        <div className="col-span-2 bg-gray-50 rounded-lg p-2 space-y-2">
          <div className="text-xs font-semibold bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent mb-2">Tools</div>
          {['🎨', '✂️', '🖌️', '🔧', '📐', '💡'].map((icon, i) => (
            <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md flex items-center justify-center text-xs sm:text-sm hover:bg-gradient-to-r hover:from-[#FED16A] hover:to-[#F97A00] hover:text-white transition-all duration-300 cursor-pointer">
              {icon}
            </div>
          ))}
        </div>

        {/* Center - Canvas */}
        <div className="col-span-8 bg-gray-200 rounded-lg relative overflow-hidden">
          <div className="absolute inset-4 bg-white rounded shadow-inner">
            {/* Mock Image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded relative">
              <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#FED16A] to-[#F97A00] rounded-full opacity-80"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-[#78B9B5] to-[#F97A00] rounded-lg opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs sm:text-sm font-medium bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent">
                Your Image Here
              </div>
            </div>
          </div>
          
          {/* Canvas Controls */}
          <div className="absolute bottom-2 left-2 flex space-x-1">
            <div className="text-xs bg-white/80 px-2 py-1 rounded">100%</div>
            <div className="text-xs bg-white/80 px-2 py-1 rounded">RGB</div>
          </div>
        </div>

        {/* Right Panel - Properties */}
        <div className="col-span-2 bg-gray-50 rounded-lg p-2 space-y-2">
          <div className="text-xs font-semibold bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent mb-2">Layers</div>
          {['Background', 'Layer 1', 'Effects'].map((layer, i) => (
            <div key={i} className="bg-white p-1 sm:p-2 rounded text-xs hover:bg-gradient-to-r hover:from-[#FED16A] hover:to-[#F97A00] hover:text-white transition-all duration-300 cursor-pointer">
              {layer}
            </div>
          ))}
          
          <div className="mt-4 pt-2 border-t border-gray-200">
            <div className="text-xs font-semibold bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent mb-2">Properties</div>
            <div className="space-y-1">
              <div className="text-xs text-gray-600">Opacity: 100%</div>
              <div className="w-full h-1 bg-gray-300 rounded">
                <div className="w-3/4 h-1 bg-gradient-to-r from-[#FED16A] to-[#F97A00] rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Status Bar */}
    <div className="bg-gray-100 p-2 sm:p-3 border-t flex justify-between items-center text-xs sm:text-sm text-gray-600">
      <div className="flex space-x-3 sm:space-x-4">
        <span>Ready</span>
        <span className="bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent font-semibold">AI Enhanced</span>
      </div>
      <div className="flex space-x-2 sm:space-x-3">
        <span>2048x1536</span>
        <span>•</span>
        <span>RGB/8</span>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default HeroSection;