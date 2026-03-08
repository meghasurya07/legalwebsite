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
            whileHover={{ y: -5, borderColor: "rgba(0,0,0,0.1)" }}
            className={`p-8 rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 ${className}`}
        >
            {icon && <div className="mb-6 text-neutral-800">{icon}</div>}
            <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">{title}</h3>
            <p className="text-neutral-500 leading-relaxed font-sans">{description}</p>
        </motion.div>
    );
}
