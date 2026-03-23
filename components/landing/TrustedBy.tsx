'use client';

import { motion } from 'framer-motion';
import { CUSTOMER_LOGOS } from '@/constants/logos';

interface TrustedByProps {
  theme?: 'light' | 'dark';
  className?: string;
  marqueeClassName?: string;
  logoHeight?: string; // e.g. "h-[40px] md:h-[60px]"
  speed?: number; // duration in seconds
  showLabel?: boolean;
}

export default function TrustedBy({
  theme = 'light',
  className = "",
  marqueeClassName = "",
  logoHeight = "h-[30px] md:h-[40px]",
  speed = 60,
  showLabel = true,
}: TrustedByProps) {
  const isDark = theme === 'dark';

  return (
    <section className={`w-full overflow-hidden flex flex-col items-center ${className}`}>
      {showLabel && (
        <p className={`text-xs uppercase tracking-widest font-semibold font-sans ${isDark ? 'text-white/50' : 'text-neutral-500'}`}>
          Success Stories Forthcoming
        </p>
      )}

      <div className="mt-4 mb-8">
        <span className={`text-sm font-medium px-4 py-2 rounded-full border ${isDark ? 'border-white/10 text-white/40 bg-white/5' : 'border-neutral-200 text-neutral-400 bg-neutral-50'}`}>
          Analysis in Progress
        </span>
      </div>

      {/* Placeholder Customers Section - Commented out for now
      <div 
        className={`relative w-full flex overflow-hidden ${marqueeClassName}`}
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
        }}
      >
        <div className="flex w-max will-change-transform [backface-visibility:hidden]">
          <motion.ul 
            className="flex w-max items-center"
            animate={{ x: [0, -100 + "%"] }}
            transition={{
              duration: speed,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {CUSTOMER_LOGOS.map((logo, i) => (
              <li key={`a-${i}`} className="flex shrink-0 list-none items-center px-6 md:px-10">
                <img 
                  alt={logo.alt} 
                  src={logo.src} 
                  width={logo.w} 
                  height={logo.h} 
                  className={`${logoHeight} w-auto ${!isDark ? 'invert' : ''}`} 
                  style={{ color: 'transparent' }} 
                />
              </li>
            ))}
            {CUSTOMER_LOGOS.map((logo, i) => (
              <li key={`b-${i}`} className="flex shrink-0 list-none items-center px-6 md:px-10">
                <img 
                  alt={logo.alt} 
                  src={logo.src} 
                  width={logo.w} 
                  height={logo.h} 
                  className={`${logoHeight} w-auto ${!isDark ? 'invert' : ''}`} 
                  style={{ color: 'transparent' }} 
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
      */}
    </section>
  );
}
