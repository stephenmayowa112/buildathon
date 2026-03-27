"use client";

import { useEffect, useState } from 'react';

interface AnimatedProgressCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  duration?: number;
  showPercentage?: boolean;
  label?: string;
}

export default function AnimatedProgressCircle({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = '#16a34a',
  backgroundColor = '#e5e7eb',
  duration = 1500,
  showPercentage = true,
  label = ''
}: AnimatedProgressCircleProps) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90 animate-fadeInUp"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all ease-out"
          style={{ 
            transitionDuration: `${duration}ms`,
            filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))'
          }}
        />
        
        {/* Glow effect */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth / 2}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all ease-out opacity-30 blur-sm"
          style={{ transitionDuration: `${duration}ms` }}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center animate-scaleIn delay-300">
        {showPercentage && (
          <span className="text-2xl font-bold text-gradient-animate">
            {Math.round(progress)}%
          </span>
        )}
        {label && (
          <span className="text-xs text-gray-600 mt-1">{label}</span>
        )}
      </div>
    </div>
  );
}

// Usage examples:
// <AnimatedProgressCircle percentage={75} label="Complete" />
// <AnimatedProgressCircle percentage={90} size={150} color="#22c55e" />
