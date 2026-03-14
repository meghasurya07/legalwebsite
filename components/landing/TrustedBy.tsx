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
        <p className={`text-xs uppercase tracking-widest mb-8 font-semibold font-sans ${isDark ? 'text-white/50' : 'text-neutral-500'}`}>
          Trusted by leading firms
        </p>
      )}

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
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
            {/* Duplicate for seamless loop */}
            {CUSTOMER_LOGOS.map((logo, i) => (
              <li key={`b-${i}`} className="flex shrink-0 list-none items-center px-6 md:px-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
    </section>
  );
}
