'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
    {
        value: 0,
        suffix: "+",
        label: "Law Firms",
        description: "Trusting us with their critical data"
    },
    {
        value: 0,
        suffix: "+",
        label: "Lawyers",
        description: "Streamlining operations globally"
    },
    {
        value: 0,
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
        value: 0,
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
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-white/10" />
            )}

            <h3 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-3 tracking-tight">
                <motion.span>{displayValue}</motion.span>{stat.suffix}
            </h3>
            <p className="text-white font-medium text-base mb-2">{stat.label}</p>
            <p className="text-neutral-500 text-xs leading-relaxed px-2">{stat.description}</p>
        </motion.div>
    );
}

export default function Metrics() {
    return (
        <SectionWrapper id="metrics" className="py-24 relative overflow-hidden border-t border-white/5">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-black -z-20" />

            {/* Background Neural Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,100 Q500,200 1000,100 T2000,100" stroke="white" strokeWidth="1" fill="none" />
                <path d="M0,300 Q600,400 1200,300 T2400,300" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M0,600 Q400,500 800,600 T1600,600" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>

            <div className="flex flex-col items-center justify-center text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm md:text-base text-neutral-500 font-poppins uppercase tracking-widest mb-4"
                >
                    Impact
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-white font-poppins"
                >
                    By The Numbers
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative max-w-7xl mx-auto px-4">
                {stats.map((stat, index) => (
                    <CounterItem key={index} stat={stat} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
}
