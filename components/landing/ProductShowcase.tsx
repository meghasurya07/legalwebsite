'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProductShowcase() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

    return (
        <SectionWrapper id="product-showcase" className="py-32 overflow-hidden">
            <div className="relative w-full flex flex-col items-center" ref={ref}>
                <div className="mb-16 text-center max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-6">Designed for Focus</h2>
                    <p className="text-neutral-400 text-lg">A workspace that adapts to your workflow, surfacing what matters most.</p>
                </div>

                {/* Main UI Container */}
                <motion.div
                    style={{ rotateX: 10, rotate }}
                    className="relative w-full max-w-5xl aspect-[16/10] bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/10 flex flex-col"
                >
                    {/* Fake Browser UI Header */}
                    <div className="h-10 w-full bg-neutral-950 border-b border-white/5 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-neutral-800" />
                        <div className="w-3 h-3 rounded-full bg-neutral-800" />
                        <div className="w-3 h-3 rounded-full bg-neutral-800" />
                    </div>
                    {/* Fake UI Content */}
                    <div className="flex-1 p-8 flex gap-8">
                        {/* Sidebar */}
                        <div className="w-64 hidden md:flex flex-col gap-4 border-r border-white/5 pr-6">
                            <div className="h-8 w-3/4 bg-neutral-800/50 rounded animate-pulse" />
                            <div className="h-4 w-1/2 bg-neutral-800/30 rounded" />
                            <div className="h-4 w-2/3 bg-neutral-800/30 rounded" />
                            <div className="h-4 w-1/2 bg-neutral-800/30 rounded" />

                            <div className="mt-8 h-8 w-full bg-blue-900/20 border border-blue-500/20 rounded flex items-center px-3">
                                <span className="text-xs text-blue-400">Analysis Complete</span>
                            </div>
                        </div>
                        {/* Main Content */}
                        <div className="flex-1 flex flex-col gap-6">
                            <div className="h-12 w-1/3 bg-neutral-800/50 rounded" />
                            <div className="h-4 w-full bg-neutral-800/30 rounded" />
                            <div className="h-4 w-full bg-neutral-800/30 rounded" />
                            <div className="h-4 w-5/6 bg-neutral-800/30 rounded" />
                            <div className="h-32 w-full bg-neutral-800/20 rounded border border-white/5 mt-4 p-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                                    <span className="text-xs text-amber-500 font-mono">WARNING: Liability Clause</span>
                                </div>
                                <div className="h-3 w-3/4 bg-neutral-800/50 rounded mb-2" />
                                <div className="h-3 w-1/2 bg-neutral-800/50 rounded" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Elements (Parallax) */}
                <motion.div
                    style={{ y: yMove, x: -50 }}
                    className="absolute top-1/3 -left-12 md:left-0 p-4 bg-neutral-900/90 backdrop-blur border border-white/10 rounded-lg shadow-xl max-w-xs hidden lg:block"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-green-500/20 p-1.5 rounded text-green-400">
                            <ShieldCheck size={16} />
                        </div>
                        <span className="text-sm font-semibold text-white">Compliance Verified</span>
                    </div>
                    <p className="text-xs text-neutral-400">GDPR regulations matched successfully.</p>
                </motion.div>

                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), x: 50 }}
                    className="absolute bottom-1/4 -right-12 md:right-0 p-4 bg-neutral-900/90 backdrop-blur border border-white/10 rounded-lg shadow-xl max-w-xs hidden lg:block"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-500/20 p-1.5 rounded text-blue-400">
                            <Zap size={16} />
                        </div>
                        <span className="text-sm font-semibold text-white">Processing</span>
                    </div>
                    <div className="h-1.5 w-32 bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3" />
                    </div>
                </motion.div>

            </div>
        </SectionWrapper>
    );
}

import { ShieldCheck, Zap } from 'lucide-react';
