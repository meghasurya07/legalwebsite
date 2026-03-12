'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { UploadCloud, Cpu, FileCheck, Shield, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
    return (
        <SectionWrapper
            id="how-it-works"
            className="py-32 relative bg-background overflow-hidden font-sans"
        >
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
                <div className="text-center mb-16 md:mb-32 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6"
                    >
                        Your Workflow, Accelerated
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-neutral-500 text-lg max-w-2xl mx-auto"
                    >
                        Wesley streamlines legal document analysis through a secure, intelligent workflow designed to support accurate, efficient decision-making.
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 hidden md:block border-l border-dashed border-neutral-200">
                        <motion.div
                            className="w-1 bg-neutral-900/5 absolute -left-0.5 top-0 bottom-0 filter blur-sm"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ transformOrigin: "top" }}
                        />
                    </div>

                    {/* Step 01: Upload & Secure */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-32">
                        {/* Right: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 md:order-1 text-left md:text-right pr-0 md:pr-12 relative"
                        >
                            <div className="absolute -top-16 -right-8 text-8xl font-serif opacity-5 select-none pointer-events-none hidden md:block text-neutral-900">01</div>
                            <div className="inline-flex items-center gap-2 mb-3 text-neutral-400 font-medium text-[11px] uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                                Phase 01
                            </div>
                            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                                Upload & Integrate
                            </h3>
                            <p className="text-neutral-500 leading-relaxed text-[15px]">
                                Upload contracts into a secure, encrypted environment. We protect sensitive legal information with enterprise-grade security protocols.
                            </p>
                        </motion.div>

                        {/* Left: Visual Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 md:order-2 pl-0 md:pl-12 relative"
                        >
                            <div className="overflow-hidden p-8 bg-cream border border-border-subtle rounded-sm relative shadow-sm">
                                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-neutral-900 rounded-full hidden md:block z-20 shadow-sm border border-white ring-4 ring-cream"></div>

                                <div className="space-y-4 relative z-10">
                                    <div className="relative flex items-center gap-4 p-4 rounded-sm bg-white border border-border-subtle shadow-sm overflow-hidden">
                                        <div className="w-10 h-10 rounded-sm bg-cream border border-neutral-100 flex items-center justify-center relative z-10">
                                            <UploadCloud className="w-5 h-5 text-neutral-700" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-xs font-semibold text-neutral-900 mb-1.5">Uploading NDA.pdf</div>
                                            <div className="h-1.5 w-full bg-neutral-100 rounded-sm overflow-hidden relative">
                                                <motion.div
                                                    className="absolute top-0 left-0 h-full bg-neutral-900"
                                                    animate={{ width: ['0%', '100%'] }}
                                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-3 rounded-sm bg-white border border-border-subtle flex items-center gap-3 shadow-sm">
                                        <Shield className="w-4 h-4 text-emerald-600" />
                                        <div className="text-xs font-medium text-neutral-600">Encrypted Transport</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Step 02: Analysis */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-32">
                        {/* Right: Text (Actually Left in DOM) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 md:order-2 pl-0 md:pl-12 relative"
                        >
                            <div className="absolute -top-16 -left-8 text-8xl font-serif opacity-5 select-none pointer-events-none hidden md:block text-neutral-900">02</div>
                            <div className="inline-flex items-center gap-2 mb-3 text-neutral-400 font-medium text-[11px] uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                                Phase 02
                            </div>
                            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                                Deep Analysis
                            </h3>
                            <p className="text-neutral-500 leading-relaxed text-[15px]">
                                Our AI scans for high-risk clauses and compliance gaps, identifying inconsistencies based on your specific playbook boundaries.
                            </p>
                        </motion.div>

                        {/* Left: Visual Card (Actually Right in DOM) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 md:order-1 pr-0 md:pr-12 relative"
                        >
                            <div className="overflow-hidden p-8 bg-cream border border-border-subtle rounded-sm relative shadow-sm">
                                <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-neutral-900 rounded-full hidden md:block z-20 shadow-sm border border-white ring-4 ring-cream"></div>

                                <div className="flex flex-col items-center justify-center py-6 relative z-10">
                                    <div className="relative">
                                        <div className="w-20 h-20 bg-white border border-border-subtle rounded-sm flex items-center justify-center relative z-10 shadow-sm">
                                            <Cpu className="w-8 h-8 text-neutral-700" />
                                        </div>

                                        {/* Removed decorative orbiting Nodes */}
                                    </div>
                                    <div className="mt-8 font-mono text-[11px] text-neutral-600 tracking-wider">
                                        Scanning against playbook...
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Step 03: Action */}
                    <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Right: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 md:order-1 text-left md:text-right pr-0 md:pr-12 relative"
                        >
                            <div className="absolute -top-16 -right-8 text-8xl font-serif opacity-5 select-none pointer-events-none hidden md:block text-neutral-900">03</div>
                            <div className="inline-flex items-center gap-2 mb-3 text-neutral-400 font-medium text-[11px] uppercase tracking-widest">
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                                Phase 03
                            </div>
                            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
                                Actionable Insights
                            </h3>
                            <p className="text-neutral-500 leading-relaxed text-[15px]">
                                Get a structured report highlighting risks and opportunities. Export findings directly or share them with stakeholders for immediate action.
                            </p>
                        </motion.div>

                        {/* Left: Visual Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-1 md:order-2 pl-0 md:pl-12 relative"
                        >
                            <div className="overflow-hidden p-8 bg-cream border border-border-subtle rounded-sm relative shadow-sm">
                                <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-neutral-900 rounded-full hidden md:block z-20 shadow-sm border border-white ring-4 ring-cream"></div>

                                <div className="flex gap-4 justify-center py-6 relative items-center">
                                    {/* Report File */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="w-36 p-5 rounded-sm bg-white border border-border-subtle flex flex-col gap-4 relative z-10 shadow-sm"
                                    >
                                        <div className="p-2 border border-neutral-100 bg-cream rounded-[2px] w-fit">
                                            <FileCheck className="w-4 h-4 text-neutral-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-neutral-900 mb-2">Final Report</div>
                                            <div className="space-y-1.5">
                                                <div className="h-1 w-full bg-neutral-200 rounded-sm"></div>
                                                <div className="h-1 w-2/3 bg-neutral-200 rounded-sm"></div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Success Message */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="absolute bottom-4 right-4 bg-white border border-emerald-200 text-emerald-700 text-[11px] px-3 py-1.5 rounded-sm font-medium flex items-center gap-1.5 shadow-sm"
                                    >
                                        <Check className="w-3 h-3" /> Ready
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
