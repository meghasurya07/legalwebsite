'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { Zap, ShieldCheck, Scale, Check, ArrowRight, X, FileText, ScanLine } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ValueHighlights() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const getCardStyle = (index: number) => {
        const isHovered = hoveredIndex === index;
        const isAnyHovered = hoveredIndex !== null;

        if (!isAnyHovered) {
            return "scale-100 opacity-100";
        }
        return isHovered
            ? "scale-105 opacity-100 shadow-[0_0_40px_-5px_rgba(239,68,68,0.3)] z-10"
            : "scale-95 opacity-60 blur-[1px]"; // Dim and shrink others
    };

    return (
        <SectionWrapper
            id="value-highlights"
            className="py-32 relative overflow-hidden"
        >
            {/* Background Neural Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,100 Q500,200 1000,100 T2000,100" stroke="white" strokeWidth="1" fill="none" />
                <path d="M0,300 Q600,400 1200,300 T2400,300" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M0,600 Q400,500 800,600 T1600,600" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-100 font-poppins"
                    >
                        Designed for Modern Legal Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        COMPANY_NAME brings AI-powered intelligence to high-stakes legal workflows, helping teams review documents efficiently and manage risk proactively.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1: Instant Review (Document Scan Animation) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        onMouseEnter={() => setHoveredIndex(0)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-8 flex flex-col items-center text-center group h-full shadow-[0_0_30px_-10px_rgba(239,68,68,0.1)] transition-all duration-300 ease-out ${getCardStyle(0)}`}
                    >
                        {/* Shimmer Border */}
                        <motion.div
                            className="absolute inset-0 rounded-xl pointer-events-none"
                            style={{ background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)' }}
                            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        />

                        <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300" style={{ background: 'radial-gradient(600px circle at 50% 50%, rgba(255,255,255,0.1), transparent 40%)' }}></div>
                        <div className="relative h-full w-full flex flex-col items-center">
                            <div className="w-12 h-12 border border-white/10 rounded-lg flex items-center justify-center mb-6 bg-white/5 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-300">
                                <Zap className="w-6 h-6 text-zinc-400 group-hover:text-red-400 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-red-100 transition-colors font-poppins">Instant Review</h3>
                            <p className="text-zinc-400 mb-8 text-sm leading-relaxed">Analyze complex legal documents in seconds. Quickly identify key clauses, obligations, and potential issues with precision.</p>

                            <div className="w-full bg-black/40 rounded-lg p-4 border border-white/5 mt-auto h-32 relative overflow-hidden flex items-center justify-center">
                                <div className="w-24 h-28 bg-zinc-800 rounded border border-white/10 relative overflow-hidden shadow-lg">
                                    <div className="space-y-2 p-3">
                                        <div className="w-3/4 h-1.5 bg-zinc-600 rounded-full mb-3"></div>
                                        <div className="w-full h-1 bg-zinc-700 rounded-full"></div>
                                        <div className="w-5/6 h-1 bg-zinc-700 rounded-full"></div>
                                        <div className="w-full h-1 bg-zinc-700 rounded-full"></div>
                                        <div className="w-4/5 h-1 bg-zinc-700 rounded-full"></div>
                                        <div className="w-full h-1 bg-zinc-700 rounded-full"></div>
                                    </div>
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-8 bg-red-500/20 border-b border-red-500/50 blur-[2px]"
                                        animate={{ top: ['-20%', '120%'] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 0.5 }}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-red-500/10 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Risk Mitigation (Error to Verified Animation) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        onMouseEnter={() => setHoveredIndex(1)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-8 flex flex-col items-center text-center group h-full shadow-[0_0_30px_-10px_rgba(239,68,68,0.1)] transition-all duration-300 ease-out ${getCardStyle(1)}`}
                    >
                        {/* Shimmer Border */}
                        <motion.div
                            className="absolute inset-0 rounded-xl pointer-events-none"
                            style={{ background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)' }}
                            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 1 }}
                        />
                        <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300" style={{ background: 'radial-gradient(600px circle at 50% 50%, rgba(255,255,255,0.1), transparent 40%)' }}></div>
                        <div className="relative h-full w-full flex flex-col items-center">
                            <div className="w-12 h-12 border border-white/10 rounded-lg flex items-center justify-center mb-6 bg-white/5 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-300">
                                <ShieldCheck className="w-6 h-6 text-zinc-400 group-hover:text-red-400 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-red-100 transition-colors font-poppins">Risk Mitigation</h3>
                            <p className="text-zinc-400 mb-8 text-sm leading-relaxed">Surface non-compliant language and potential liabilities early, addressing risks before they impact outcomes.</p>

                            <div className="w-full bg-black/40 rounded-lg p-4 text-left border border-white/5 mt-auto relative overflow-hidden">
                                <div className="space-y-3 text-sm relative z-10">
                                    {[
                                        { label: 'Compliance', error: 'Missing', success: 'Verified' },
                                        { label: 'Regulations', error: 'Failed', success: 'Passed' },
                                        { label: 'Liability', error: 'High Risk', success: 'Mitigated' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <span className="flex items-center gap-2 text-zinc-400">
                                                <div className="w-4 h-4 border border-white/10 rounded bg-white/5"></div>
                                                {item.label}:
                                            </span>
                                            <div className="relative h-5 w-24 text-right">
                                                <motion.span
                                                    className="absolute right-0 top-0 flex items-center text-red-400 text-xs font-bold"
                                                    animate={{ opacity: [0, 1, 1, 0, 0] }}
                                                    transition={{ duration: 4, times: [0, 0.1, 0.4, 0.5, 1], repeat: Infinity, delay: index * 0.5 }}
                                                >
                                                    <X className="w-3 h-3 mr-1" /> {item.error}
                                                </motion.span>
                                                <motion.span
                                                    className="absolute right-0 top-0 flex items-center text-green-400 text-xs font-bold"
                                                    animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
                                                    transition={{ duration: 4, times: [0, 0.4, 0.5, 0.6, 0.9, 1], repeat: Infinity, delay: index * 0.5 }}
                                                >
                                                    <Check className="w-3 h-3 mr-1" /> {item.success}
                                                </motion.span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-red-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Strategic Insight (Projectile Arrow Animation) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        onMouseEnter={() => setHoveredIndex(2)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 p-8 flex flex-col items-center text-center group h-full shadow-[0_0_30px_-10px_rgba(239,68,68,0.1)] transition-all duration-300 ease-out ${getCardStyle(2)}`}
                    >
                        {/* Shimmer Border */}
                        <motion.div
                            className="absolute inset-0 rounded-xl pointer-events-none"
                            style={{ background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)' }}
                            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'linear', delay: 2 }}
                        />
                        <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300" style={{ background: 'radial-gradient(600px circle at 50% 50%, rgba(255,255,255,0.1), transparent 40%)' }}></div>
                        <div className="relative h-full w-full flex flex-col items-center">
                            <div className="w-12 h-12 border border-white/10 rounded-lg flex items-center justify-center mb-6 bg-white/5 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-300">
                                <Scale className="w-6 h-6 text-zinc-400 group-hover:text-red-400 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-red-100 transition-colors font-poppins">Strategic Insight</h3>
                            <p className="text-zinc-400 mb-8 text-sm leading-relaxed">Transform legal data into actionable intelligence. Identify patterns and trends to support informed decision-making.</p>

                            <div className="w-full bg-black/40 rounded-lg p-4 border border-white/5 flex flex-col items-center justify-center gap-2 mt-auto relative overflow-hidden">
                                <div className="flex flex-col w-full relative">

                                    {/* Green Arrow Projectile Layer */}
                                    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded">
                                        <motion.div
                                            className="absolute top-1/2 -translate-y-1/2 text-green-500 blur-[2px]"
                                            initial={{ left: '-10%', opacity: 0 }}
                                            animate={{ left: '110%', opacity: [0, 1, 1, 0] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                        >
                                            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
                                        </motion.div>
                                    </div>

                                    <div className="flex items-center gap-1 w-full justify-center relative z-10">
                                        <div className="border border-white/20 px-2 py-1 text-[10px] rounded bg-white/5 text-zinc-300">Raw Data</div>
                                        <motion.div
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <ArrowRight className="w-3 h-3 text-zinc-500" />
                                        </motion.div>
                                        <div className="border border-white/20 px-2 py-1 text-[10px] rounded bg-white/5 text-zinc-300">AI</div>
                                        <motion.div
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                        >
                                            <ArrowRight className="w-3 h-3 text-zinc-500" />
                                        </motion.div>
                                        <div className="border border-white/20 px-2 py-1 text-[10px] rounded bg-white/5 text-zinc-300">Insight</div>
                                    </div>
                                    <div className="w-full h-px bg-white/5 my-1 relative overflow-hidden"></div>
                                    <div className="flex items-center gap-1 w-full justify-center relative z-10">
                                        <div className="border border-white/20 px-2 py-1 text-[10px] rounded bg-white/5 text-zinc-300">Patterns</div>
                                        <motion.div
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                        >
                                            <ArrowRight className="w-3 h-3 text-zinc-500" />
                                        </motion.div>
                                        <div className="border border-green-500/30 px-2 py-1 text-[10px] rounded bg-green-500/10 text-green-400 font-bold shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                                            Action
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-green-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
