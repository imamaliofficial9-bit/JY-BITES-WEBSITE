import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtext?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showSubtext = false }) => {
  const sizeClasses = {
    sm: 'text-xl tracking-tight',
    md: 'text-2xl md:text-3xl tracking-tight',
    lg: 'text-3xl md:text-4xl tracking-tight',
    xl: 'text-4xl md:text-5xl tracking-tight',
  };

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className={`font-black font-display flex items-baseline leading-none ${sizeClasses[size]}`}>
        <span className="text-[#f35c16] drop-shadow-[0_2px_12px_rgba(243,92,22,0.4)]">JY</span>
        <span className="text-[#ede8e1] tracking-normal font-extrabold">BITES</span>
        <span className="inline-block w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#f35c16] ml-1 shadow-[0_0_10px_#f35c16] animate-pulse" />
      </div>
      {showSubtext && (
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#9e9a94] mt-1">
          Fast Food Center
        </span>
      )}
    </div>
  );
};
