'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { UploadCloud, Cpu, FileText, FileCheck, Search, Shield, Terminal, Database, Code, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
    return (
        <SectionWrapper
            id="how-it-works"
            className="py-32 relative overflow-hidden"
        >
            {/* Background Neural Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,100 Q500,200 1000,100 T2000,100" stroke="white" strokeWidth="1" fill="none" />
                <path d="M0,300 Q600,400 1200,300 T2400,300" stroke="white" strokeWidth="0.5" fill="none" />
                <path d="M0,600 Q400,500 800,600 T1600,600" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-32 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-zinc-100 font-poppins"
                    >
                        Your Workflow, Accelerated
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-zinc-400 text-lg max-w-2xl mx-auto"
                    >
                        COMPANY_NAME streamlines legal document analysis through a secure, intelligent workflow designed to support accurate, efficient decision-making.
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden md:block">
                        <svg className="h-full w-full overflow-visible" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                    <stop offset="10%" stopColor="#3b82f6" />
                                    <stop offset="50%" stopColor="#a855f7" />
                                    <stop offset="90%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                d="M 0 0 V 1500" // Extended length to ensure it covers
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="4 4"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>

                    {/* Step 01: Upload & Secure (Blue Theme) */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center mb-32">
                        {/* Right: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 md:order-1 text-left md:text-right pr-0 md:pr-8 relative"
                        >
                            <div className="absolute -top-20 -right-10 text-9xl font-bold opacity-[0.03] select-none pointer-events-none hidden md:block">01</div>
                            <div className="inline-flex items-center gap-2 mb-2 text-blue-400 font-mono text-xs uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                Step 01
                            </div>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100 mb-4">
                                Upload & Integrate
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Upload contracts into a secure, encrypted environment. We protect sensitive legal information with enterprise-grade security protocols.
                            </p>
                        </motion.div>

                        {/* Left: Visual Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 md:order-2 pl-0 md:pl-8 relative"
                        >
                            <div className="overflow-hidden p-6 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl relative shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]">
                                <div className="pointer-events-none absolute -inset-px opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.2),transparent_70%)]"></div>

                                <div className="absolute -left-11 top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-zinc-950 hidden md:block z-20 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                                <div className="space-y-4 relative z-10">
                                    {/* Upload Item */}
                                    <div className="relative flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 overflow-hidden">
                                        <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center relative z-10">
                                            <UploadCloud className="w-4 h-4 text-zinc-500" />
                                        </div>
                                        <div className="h-2 w-24 bg-zinc-700 rounded-full relative z-10"></div>
                                        {/* Scanning/Uploading effect */}
                                        <motion.div
                                            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent skew-x-12 opacity-50 mix-blend-plus-lighter"
                                            animate={{ x: ['-100%', '300%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>

                                    {/* Processing Items */}
                                    <div className="space-y-2">
                                        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-start gap-3">
                                            <Shield className="w-4 h-4 text-blue-400 mt-0.5" />
                                            <div className="space-y-1.5 w-full">
                                                <div className="h-2 w-full bg-blue-400/20 rounded-full"></div>
                                                <div className="h-2 w-2/3 bg-blue-400/20 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Step 02: Analysis (Purple Theme) */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center mb-32">
                        {/* Right: Text (Actually Left in DOM) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 md:order-2 pl-0 md:pl-8 relative"
                        >
                            <div className="absolute -top-20 -left-10 text-9xl font-bold opacity-[0.03] select-none pointer-events-none hidden md:block">02</div>
                            <div className="inline-flex items-center gap-2 mb-2 text-purple-400 font-mono text-xs uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                                Step 02
                            </div>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100 mb-4">
                                Deep Analysis
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Our AI scans for high-risk clauses and compliance gaps, identifying inconsistencies based on your specific playbook boundaries.
                            </p>
                        </motion.div>

                        {/* Left: Visual Card (Actually Right in DOM) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 md:order-1 pr-0 md:pr-8 relative"
                        >
                            <div className="overflow-hidden p-6 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl relative shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]">
                                <div className="pointer-events-none absolute -inset-px opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(168,85,247,0.2),transparent_70%)]"></div>

                                <div className="absolute -right-11 top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full border-4 border-zinc-950 hidden md:block z-20 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

                                <div className="flex flex-col items-center justify-center py-4 relative z-10">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full mix-blend-plus-lighter animate-pulse"></div>
                                        <div className="w-20 h-20 bg-zinc-900 border border-purple-500/50 rounded-xl flex items-center justify-center relative z-10 shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]">
                                            <Cpu className="w-8 h-8 text-purple-400" />
                                        </div>

                                        {/* Orbiting nodes */}
                                        <motion.div
                                            className="absolute top-1/2 left-1/2 w-32 h-32 border border-purple-500/30 rounded-full -translate-x-1/2 -translate-y-1/2"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        >
                                            <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                                        </motion.div>
                                    </div>
                                    <div className="mt-6 font-mono text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20">
                                        Analyzing Context...
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Step 03: Action (Zinc/Green Theme) */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        {/* Right: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 md:order-1 text-left md:text-right pr-0 md:pr-8 relative"
                        >
                            <div className="absolute -top-20 -right-10 text-9xl font-bold opacity-[0.03] select-none pointer-events-none hidden md:block">03</div>
                            <div className="inline-flex items-center gap-2 mb-2 text-zinc-100 font-mono text-xs uppercase tracking-widest">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                Step 03
                            </div>
                            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400 mb-4">
                                Actionable Insights
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Get a structured report highlighting risks and opportunities. Export findings directly or share them with stakeholders for immediate action.
                            </p>
                        </motion.div>

                        {/* Left: Visual Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 md:order-2 pl-0 md:pl-8 relative"
                        >
                            <div className="overflow-hidden p-6 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl relative shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]">
                                <div className="pointer-events-none absolute -inset-px opacity-20 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_70%)]"></div>

                                <div className="absolute -left-11 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-4 border-zinc-950 hidden md:block z-20 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

                                <div className="flex gap-4 justify-center py-4 relative h-40 items-center">
                                    {/* Report File */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="w-32 p-4 rounded-lg bg-zinc-950 border border-white/10 flex flex-col gap-3 relative z-10"
                                    >
                                        <div className="p-2 bg-green-500/10 rounded-md w-fit">
                                            <FileCheck className="w-4 h-4 text-green-400" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-zinc-300 mb-1">Final Report</div>
                                            <div className="space-y-1">
                                                <div className="h-1 w-full bg-zinc-800 rounded-full"></div>
                                                <div className="h-1 w-2/3 bg-zinc-800 rounded-full"></div>
                                            </div>
                                        </div>
                                        {/* Verified Badge */}
                                        <div className="absolute -top-2 -right-2 bg-green-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded shadow-lg">
                                            READY
                                        </div>
                                    </motion.div>

                                    {/* Success Message */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="absolute bottom-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full font-mono flex items-center gap-1"
                                    >
                                        <Check className="w-3 h-3" /> Export Complete
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
