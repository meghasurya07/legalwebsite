'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

export default function ProductShowcase() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const rotate = useTransform(scrollYProgress, [0, 1], [1, -1]);

    return (
        <SectionWrapper id="product-showcase" className="py-32 overflow-hidden bg-beige">
            <div className="relative w-full flex flex-col items-center" ref={ref}>
                <div className="mb-16 text-center max-w-2xl px-6">
                    <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">Designed for Focus</h2>
                    <p className="text-neutral-500 text-lg font-sans">A workspace that adapts to your workflow, surfacing what matters most.</p>
                </div>

                {/* Main UI Container */}
                <motion.div
                    style={{ rotateX: 5, rotate }}
                    className="relative w-full max-w-5xl aspect-[16/10] bg-white border border-neutral-200 rounded-md overflow-hidden shadow-2xl shadow-neutral-200/50 flex flex-col font-sans"
                >
                    {/* Fake Browser UI Header */}
                    <div className="h-10 w-full bg-cream border-b border-border-subtle flex items-center px-4 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                        <div className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                    </div>
                    {/* Fake UI Content */}
                    <div className="flex-1 p-8 flex gap-8 bg-neutral-50">
                        {/* Sidebar */}
                        <div className="w-64 hidden md:flex flex-col gap-4 border-r border-neutral-200 pr-6">
                            <div className="h-6 w-3/4 bg-neutral-200 rounded-sm" />
                            <div className="h-3 w-1/2 bg-neutral-200/60 rounded-sm mt-4" />
                            <div className="h-3 w-2/3 bg-neutral-200/60 rounded-sm" />
                            <div className="h-3 w-1/2 bg-neutral-200/60 rounded-sm" />

                            <div className="mt-8 h-8 w-full bg-white border border-border-subtle rounded-sm flex items-center px-3 shadow-sm">
                                <span className="text-xs font-medium text-neutral-600">Analysis Complete</span>
                            </div>
                        </div>
                        {/* Main Content */}
                        <div className="flex-1 flex flex-col gap-6 bg-white border border-neutral-200 rounded-sm p-6 shadow-sm">
                            <div className="h-8 w-1/3 bg-neutral-200 rounded-sm" />
                            <div className="h-3 w-full bg-neutral-100 rounded-sm mt-4" />
                            <div className="h-3 w-full bg-neutral-100 rounded-sm" />
                            <div className="h-3 w-5/6 bg-neutral-100 rounded-sm" />
                            <div className="h-32 w-full bg-rose-50/50 rounded-sm border border-rose-100 mt-6 p-5 flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-rose-500" />
                                    <span className="text-xs text-rose-600 font-semibold uppercase tracking-wider">Liability Clause</span>
                                </div>
                                <div className="h-2 w-3/4 bg-rose-200/50 rounded-sm mb-2" />
                                <div className="h-2 w-1/2 bg-rose-200/50 rounded-sm" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Elements (Parallax) */}
                <motion.div
                    style={{ y: yMove, x: -50 }}
                    className="absolute top-1/4 -left-12 md:left-4 p-4 bg-white/90 backdrop-blur-md border border-neutral-200 rounded-sm shadow-xl shadow-neutral-200/50 max-w-xs hidden lg:block font-sans"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-emerald-50 border border-emerald-100 p-1.5 rounded-sm text-emerald-600">
                            <ShieldCheck size={16} />
                        </div>
                        <span className="text-sm font-medium text-neutral-900">Compliance Verified</span>
                    </div>
                    <p className="text-xs text-neutral-500">GDPR regulations matched successfully.</p>
                </motion.div>

                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]), x: 50 }}
                    className="absolute bottom-1/4 -right-12 md:right-4 p-4 bg-white/90 backdrop-blur-md border border-neutral-200 rounded-sm shadow-xl shadow-neutral-200/50 max-w-xs hidden lg:block font-sans"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="bg-blue-50 border border-blue-100 p-1.5 rounded-sm text-blue-600">
                            <Zap size={16} />
                        </div>
                        <span className="text-sm font-medium text-neutral-900">Processing</span>
                    </div>
                    <div className="h-1.5 w-32 bg-neutral-100 rounded-sm overflow-hidden border border-neutral-200/50">
                        <div className="h-full bg-neutral-900 w-2/3" />
                    </div>
                </motion.div>

            </div>
        </SectionWrapper>
    );
}
