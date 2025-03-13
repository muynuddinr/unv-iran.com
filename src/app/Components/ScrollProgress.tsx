"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll progress with spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      setScrollPercentage(Math.round(value * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left z-50"
        style={{ scaleX }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Percentage Indicator */}
      <motion.div 
        className="fixed bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg shadow-purple-500/20 z-40 flex items-center justify-center hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="relative w-14 h-14">
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
            {/* Background circle */}
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-gray-200"
              strokeWidth="3"
            />
            {/* Progress circle */}
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              className="stroke-[url(#gradient)]"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${scrollPercentage}, 100`}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className="text-blue-500" stopColor="currentColor" />
                <stop offset="50%" className="text-purple-500" stopColor="currentColor" />
                <stop offset="100%" className="text-pink-500" stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-base font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              {scrollPercentage}%
            </span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ScrollProgress; 