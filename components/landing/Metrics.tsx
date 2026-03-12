'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
    {
        value: 10,
        suffix: "+",
        label: "Law Firms",
        description: "Trusting us with their critical data"
    },
    {
        value: 100,
        suffix: "+",
        label: "Lawyers",
        description: "Streamlining operations globally"
    },
    {
        value: 1,
        suffix: "M+",
        label: "Contracts Analyzed",
        description: "Processed securely across our network"
    },
    {
        value: 99.9,
        suffix: "%",
        label: "Risk Accuracy",
        description: "Industry-leading precision"
    },
    {
        value: 10,
        suffix: "k+",
        label: "Hours Saved",
        description: "Automating routine legal review"
    }
];

function CounterItem({ stat, index }: { stat: typeof stats[0], index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 });
    const displayValue = useTransform(spring, (current) => {
        if (stat.value % 1 !== 0) {
            return current.toFixed(1); // Handle decimals like 99.9
        }
        return Math.round(current).toString();
    });

    useEffect(() => {
        if (isInView) {
            spring.set(stat.value);
        }
    }, [isInView, spring, stat.value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
            className="relative flex flex-col items-center justify-center text-center group"
        >
            {/* Vertical Separator */}
            {index !== 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-neutral-200" />
            )}

            <h3 className="text-3xl md:text-5xl font-serif text-neutral-900 mb-3 tracking-tight">
                <motion.span>{displayValue}</motion.span>{stat.suffix}
            </h3>
            <p className="font-sans text-neutral-900 font-medium text-base mb-2">{stat.label}</p>
            <p className="font-sans text-neutral-500 text-xs leading-relaxed px-2">{stat.description}</p>
        </motion.div>
    );
}

export default function Metrics() {
    return (
        <SectionWrapper id="metrics" className="py-24 relative overflow-hidden bg-beige border-t border-b border-border-subtle font-sans">
            {/* Removed vibe-coded background grid pattern */}

            <div className="flex flex-col items-center justify-center text-center mb-16 relative z-10 mx-auto px-6 max-w-2xl">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[11px] text-neutral-400 font-medium uppercase tracking-widest mb-4 inline-flex items-center gap-2"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                    Global Impact
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-serif text-neutral-900"
                >
                    Designed for scale. Built for trust.
                </motion.h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10 max-w-7xl mx-auto px-4">
                {stats.map((stat, index) => (
                    <CounterItem key={index} stat={stat} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
}
