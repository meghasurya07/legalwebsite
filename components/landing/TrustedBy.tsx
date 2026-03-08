'use client';

import { motion } from 'framer-motion';

// Placeholder logos (using text for now, or could use simple SVGs)
const LOGOS = [
    "ACME Corp", "Global Bank", "LegalTech", "NextGen Law", "Future Firm", "Trust & Co",
    "ACME Corp", "Global Bank", "LegalTech", "NextGen Law", "Future Firm", "Trust & Co"
];

export default function TrustedBy() {
    return (
        <section className="w-full py-12 border-b border-border-subtle bg-cream overflow-hidden flex flex-col items-center">
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-8 font-semibold font-sans">Trusted by leading firms</p>

            <div className="relative w-full max-w-7xl px-6 md:px-12 flex overflow-hidden mask-linear-fade">
                <motion.div
                    className="flex gap-16 md:gap-24 whitespace-nowrap min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {[...LOGOS, ...LOGOS].map((logo, i) => (
                        <span key={i} className="text-lg md:text-xl font-bold text-neutral-300 hover:text-neutral-900 transition-colors duration-500 cursor-default select-none font-serif">
                            {logo}
                        </span>
                    ))}
                </motion.div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
