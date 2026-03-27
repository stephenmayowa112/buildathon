"use client";

import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
  type: ToastType;
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function AnimatedToast({ type, message, onClose, duration = 5000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Entrance animation
    setTimeout(() => setIsVisible(true), 10);

    // Auto close
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const config = {
    success: {
      icon: CheckCircle,
      bgColor: 'from-green-500 to-green-600',
      iconColor: 'text-white',
      borderColor: 'border-green-400',
    },
    error: {
      icon: XCircle,
      bgColor: 'from-red-500 to-red-600',
      iconColor: 'text-white',
      borderColor: 'border-red-400',
    },
    warning: {
      icon: AlertCircle,
      bgColor: 'from-yellow-500 to-yellow-600',
      iconColor: 'text-white',
      borderColor: 'border-yellow-400',
    },
    info: {
      icon: Info,
      bgColor: 'from-blue-500 to-blue-600',
      iconColor: 'text-white',
      borderColor: 'border-blue-400',
    },
  };

  const { icon: Icon, bgColor, iconColor, borderColor } = config[type];

  return (
    <div
      className={`
        fixed top-4 right-4 z-50 
        glass-card border-2 ${borderColor}
        rounded-xl shadow-2xl p-4 
        min-w-[320px] max-w-md
        transition-all duration-300 ease-out
        ${isVisible && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        ${isExiting ? 'animate-slideOutRight' : 'animate-slideInRight'}
      `}
    >
      <div className="flex items-start gap-3">
        <div className={`bg-gradient-to-br ${bgColor} p-2 rounded-lg animate-bounceIn glow-pulse`}>
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900 animate-fadeInLeft delay-100">
            {message}
          </p>
        </div>

        <button
          onClick={handleClose}
          className="text-gray-400 hover:text-gray-600 transition-all transform hover:scale-110 hover:rotate-90"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${bgColor} animate-shrink`}
          style={{ animationDuration: `${duration}ms` }}
        ></div>
      </div>
    </div>
  );
}

// Add to globals.css:
/*
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes shrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

.animate-slideInRight {
  animation: slideInRight 0.3s ease-out forwards;
}

.animate-slideOutRight {
  animation: slideOutRight 0.3s ease-in forwards;
}

.animate-shrink {
  animation: shrink linear forwards;
}
*/
