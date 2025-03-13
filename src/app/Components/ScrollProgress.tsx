"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const progress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 25,
    restDelta: 0.0001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      setScrollPercentage(Math.round(value * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.div 
      className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="relative group">
        {/* Energy Ring Effects */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, 
                rgba(34, 197, 94, ${i === 0 ? 0.6 : 0.3}) 0%, 
                transparent ${scrollPercentage}%)`
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Main Container */}
        <div className="relative size-16 rounded-full bg-white/90 backdrop-blur-xl p-0.5
                       border border-blue-900/30 hover:border-blue-900/50
                       hover:scale-110 transition-all duration-300">
          {/* Progress Ring */}
          <svg className="absolute inset-0 -rotate-90">
            <circle
              className="stroke-blue-950"
              strokeWidth="2"
              fill="none"
              r="30"
              cx="32"
              cy="32"
            />
            <motion.circle
              className="stroke-blue-500"
              strokeWidth="2"
              fill="none"
              r="30"
              cx="32"
              cy="32"
              strokeLinecap="round"
              style={{
                pathLength: progress,
                filter: "drop-shadow(0 0 3px rgb(34 197 94 / 0.5))"
              }}
            />
          </svg>

          {/* Inner Content */}
          <div className="relative size-full rounded-full 
                         flex flex-col items-center justify-center
                         bg-gradient-radial from-blue-950/50 to-black/50">
            <motion.div 
              className="text-2xl font-bold text-blue-500"
              animate={{
                textShadow: [
                  "0 0 8px rgba(19, 132, 169, 0.56)",
                  "0 0 16px rgba(19, 132, 169, 0.5)",
                  "0 0 8px rgba(19, 132, 169, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {scrollPercentage}
            </motion.div>
            
            {/* Animated Dots */}
            <div className="flex gap-1 mt-0.5">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="size-1 rounded-full bg-blue-500"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Add this to your global CSS
// const globalStyles = {}  // Remove this line if it's not needed

export default ScrollProgress; 