'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
    style?: React.CSSProperties;
}

export default function SectionWrapper({ children, className = '', id = '', delay = 0, style }: SectionWrapperProps) {
    return (
        <section id={id} className={`w-full py-20 px-6 md:px-12 flex justify-center ${className}`} style={style}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay }}
                className="w-full max-w-7xl"
            >
                {children}
            </motion.div>
        </section>
    );
}
