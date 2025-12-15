'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';

// Placeholder logos (using text for now, or could use simple SVGs)
const LOGOS = [
    "ACME Corp", "Global Bank", "LegalTech", "NextGen Law", "Future Firm", "Trust & Co",
    "ACME Corp", "Global Bank", "LegalTech", "NextGen Law", "Future Firm", "Trust & Co"
];

export default function TrustedBy() {
    return (
        <section className="w-full py-12 border-b border-white/5 bg-neutral-950/50 backdrop-blur-sm overflow-hidden flex flex-col items-center">
            <p className="text-1xl uppercase tracking-widest text-neutral-300 mb-8 font-semibold">Trusted by leading firms</p>

            <div className="relative w-full max-w-7xl px-6 md:px-12 flex overflow-hidden mask-linear-fade">
                <motion.div
                    className="flex gap-16 md:gap-24 whitespace-nowrap min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 5
                    }}
                >
                    {[...LOGOS, ...LOGOS].map((logo, i) => (
                        <span key={i} className="text-xl md:text-2xl font-bold text-neutral-700 hover:text-white transition-colors duration-500 cursor-default select-none font-sans">
                            {logo}
                        </span>
                    ))}
                </motion.div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
            </div>
        </section>
    );
}
