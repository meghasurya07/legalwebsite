'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
    icon?: ReactNode;
    title: string;
    description: string;
    className?: string;
}

export default function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
            className={`p-8 rounded-2xl border border-white/5 bg-neutral-900/50 backdrop-blur-sm transition-colors duration-300 ${className}`}
        >
            {icon && <div className="mb-6 text-white/80">{icon}</div>}
            <h3 className="text-xl font-poppins font-semibold text-white mb-3">{title}</h3>
            <p className="text-neutral-400 leading-relaxed font-sans">{description}</p>
        </motion.div>
    );
}
