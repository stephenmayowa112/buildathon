export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-green-200 rounded-full animate-spin"></div>
        
        {/* Inner spinning ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-green-600 rounded-full animate-spin"></div>
        
        {/* Center pulse */}
        <div className="absolute inset-3 bg-green-600 rounded-full animate-pulse"></div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
      </div>
    </div>
  );
}

export function LoadingDots() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
  );
}

export function LoadingBar({ progress = 0 }: { progress?: number }) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-500 ease-out animate-gradient"
        style={{ width: `${progress}%` }}
      >
        <div className="h-full w-full bg-white/30 animate-shimmer"></div>
      </div>
    </div>
  );
}

export function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
}
