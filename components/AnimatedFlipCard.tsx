"use client";

import { useState, ReactNode } from 'react';

interface AnimatedFlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export default function AnimatedFlipCard({ front, back, className = '' }: AnimatedFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`relative w-full h-full cursor-pointer ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden glass-card rounded-2xl p-6 shadow-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden glass-card rounded-2xl p-6 shadow-xl"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

// Usage example:
/*
<AnimatedFlipCard
  front={
    <div className="flex flex-col items-center justify-center h-full">
      <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
      <p className="text-4xl font-bold text-gradient-animate">₦15K</p>
      <p className="text-gray-600 mt-2">Click to see details</p>
    </div>
  }
  back={
    <div className="h-full">
      <h3 className="text-xl font-bold mb-4">Plan Features</h3>
      <ul className="space-y-2 text-sm">
        <li>✓ 600 kWh/month</li>
        <li>✓ Basic support</li>
        <li>✓ Monthly reports</li>
      </ul>
    </div>
  }
  className="h-64"
/>
*/
