"use client";

import { useEffect, ReactNode } from 'react';
import { X } from 'lucide-react';

interface AnimatedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function AnimatedModal({
  isOpen,
  onClose,
  children,
  title,
  size = 'md'
}: AnimatedModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`
          relative w-full ${sizeClasses[size]}
          glass-card rounded-2xl shadow-2xl
          animate-scaleIn
          border border-white/30
        `}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200 animate-fadeInDown">
            <h2 className="text-2xl font-bold text-gradient-animate">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all transform hover:scale-110 hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6 animate-fadeInUp delay-100">
          {children}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed pointer-events-none"></div>
      </div>
    </div>
  );
}

// Usage example:
/*
const [isOpen, setIsOpen] = useState(false);

<AnimatedModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Payment"
  size="md"
>
  <div className="space-y-4">
    <p>Are you sure you want to proceed with this payment?</p>
    <div className="flex gap-3">
      <button className="flex-1 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg">
        Confirm
      </button>
      <button className="flex-1 py-2 border-2 border-gray-300 rounded-lg">
        Cancel
      </button>
    </div>
  </div>
</AnimatedModal>
*/
