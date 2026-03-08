'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { Zap, ShieldCheck, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ValueHighlights() {
    return (
        <SectionWrapper
            id="value-highlights"
            className="py-32 relative bg-background border-t border-border-subtle"
        >
            <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-start mb-24">
                    <div className="md:w-5/12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-serif text-foreground leading-[1.1] tracking-tight"
                        >
                            Designed for Modern Legal Work
                        </motion.h2>
                    </div>
                    <div className="md:w-7/12 md:pt-4">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-sans max-w-2xl"
                        >
                            Wesley brings AI-powered intelligence to high-stakes legal workflows, helping teams review documents efficiently, surface critical insights, and manage risk proactively.
                        </motion.p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-0 border-t border-border-subtle">
                    {/* Feature 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="py-16 md:pr-12 md:border-r border-border-subtle group"
                    >
                        <Zap className="w-6 h-6 text-neutral-400 mb-8 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                        <h3 className="text-2xl font-serif mb-4 text-foreground tracking-tight">Instant Review</h3>
                        <p className="text-neutral-600 text-base leading-relaxed font-sans">
                            Analyze complex legal documents in seconds. Quickly identify key clauses, obligations, and potential issues with precision that matches human expertise.
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="py-16 md:px-12 md:border-r border-border-subtle border-t md:border-t-0 group"
                    >
                        <ShieldCheck className="w-6 h-6 text-neutral-400 mb-8 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                        <h3 className="text-2xl font-serif mb-4 text-foreground tracking-tight">Risk Mitigation</h3>
                        <p className="text-neutral-600 text-base leading-relaxed font-sans">
                            Surface non-compliant language and potential liabilities early, addressing risks before they impact outcomes and ensuring complete regulatory alignment.
                        </p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="py-16 md:pl-12 border-t md:border-t-0 group"
                    >
                        <Scale className="w-6 h-6 text-neutral-400 mb-8 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                        <h3 className="text-2xl font-serif mb-4 text-foreground tracking-tight">Strategic Insight</h3>
                        <p className="text-neutral-600 text-base leading-relaxed font-sans">
                            Transform raw legal data into actionable intelligence. Identify hidden patterns and trends to support informed, data-backed decision-making at scale.
                        </p>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
