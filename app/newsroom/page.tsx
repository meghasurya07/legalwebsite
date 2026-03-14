'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { ArrowUpRight } from 'lucide-react';

interface PressRelease {
    year: string;
    date: string;
    title: string;
    source: string;
}

const PRESS_RELEASES: PressRelease[] = [];

export default function NewsroomPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-32">
            <SectionWrapper>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                        <div className="lg:col-span-5">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-serif mb-8"
                            >
                                Newsroom
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                                    Official news, press releases, and announcements from the Wesley team. For media inquiries, please contact <a href="mailto:press@company.com" className="text-neutral-900 hover:underline">press@company.com</a>.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="border-t border-border-subtle">
                        {PRESS_RELEASES.length > 0 ? (
                            PRESS_RELEASES.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="group py-8 border-b border-border-subtle flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 hover:bg-cream transition-colors px-4 -mx-4 rounded-sm"
                                >
                                    <div className="w-24 flex-shrink-0 text-sm font-mono text-neutral-500">{item.year}</div>
                                    <div className="w-32 flex-shrink-0 text-sm text-neutral-500">{item.date}</div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl md:text-2xl font-serif text-neutral-900 group-hover:text-neutral-600 transition-colors mb-2">
                                            {item.title}
                                        </h3>
                                        <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">{item.source}</span>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <ArrowUpRight className="text-neutral-400 group-hover:text-neutral-600 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300" />
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="py-24 text-center">
                                <h3 className="text-2xl font-serif text-neutral-900 mb-4">Coming Soon</h3>
                                <p className="text-neutral-600">Our latest press releases and announcements will be posted here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
