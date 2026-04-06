'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Upload, Search, FolderKanban, Shield } from 'lucide-react';

const CAPABILITIES = [
    {
        icon: Upload,
        title: 'Bulk Upload',
        description: 'Upload thousands of documents at once. Wesley indexes and organizes them automatically for instant access.',
    },
    {
        icon: Search,
        title: 'Semantic Search',
        description: 'Go beyond keyword matching. Search by concept, clause type, or legal meaning across your entire repository.',
    },
    {
        icon: FolderKanban,
        title: 'Project Organization',
        description: 'Group documents into projects by matter, deal, or client. Keep analysis scoped and your work organized.',
    },
    {
        icon: Shield,
        title: 'Secure by Default',
        description: 'Enterprise-grade encryption, strict access controls, and full audit trails. Your documents never leave your environment.',
    },
];

export default function DocumentsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-neutral-500 font-medium mb-6 text-sm tracking-wide"
                >
                    <Link href="/product/overview" className="hover:text-neutral-900 transition-colors">Platform Overview</Link>
                    {' / '}
                    <span className="text-neutral-900">Documents</span>
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 leading-[1.05]"
                >
                    Your Legal <br className="hidden sm:block" />Knowledge Base
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed"
                >
                    Securely store, organize, and analyze legal documents at scale. Search by meaning, not just keywords.
                </motion.p>
            </section>

            {/* Product Visual */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-[16/9] bg-cream rounded-xl border border-border-subtle overflow-hidden"
                >
                    <div className="absolute inset-0 flex flex-col">
                        <div className="flex items-center gap-3 px-6 py-4 border-b border-border-subtle bg-white">
                            <div className="w-3 h-3 rounded-full bg-neutral-200" />
                            <div className="w-3 h-3 rounded-full bg-neutral-200" />
                            <div className="w-3 h-3 rounded-full bg-neutral-200" />
                            <span className="ml-4 text-sm text-neutral-400 font-medium">Documents</span>
                        </div>
                        <div className="flex-1 p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="bg-white rounded-lg border border-border-subtle px-4 py-2.5 flex-grow flex items-center gap-2">
                                    <Search className="w-4 h-4 text-neutral-400" />
                                    <span className="text-neutral-400 text-sm">Search documents...</span>
                                </div>
                                <div className="bg-neutral-900 text-white text-xs font-medium px-4 py-2.5 rounded-lg">Upload</div>
                            </div>
                            <div className="space-y-3">
                                {['Project Alpha — M&A Due Diligence', 'Regulatory Compliance Review', 'Client Onboarding Package'].map((name, i) => {
                                    const fileCounts = [142, 87, 53];
                                    return (
                                    <div key={i} className="bg-white rounded-lg border border-border-subtle px-5 py-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <FolderKanban className="w-4 h-4 text-neutral-400" />
                                            <span className="text-sm font-medium text-neutral-700">{name}</span>
                                        </div>
                                        <span className="text-xs text-neutral-400">{fileCounts[i]} files</span>
                                    </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Capabilities */}
            <section className="border-t border-border-subtle bg-cream">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                    <h2 className="text-3xl md:text-4xl font-serif mb-16">Built for scale</h2>
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                        {CAPABILITIES.map((cap, index) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex gap-5"
                            >
                                <div className="p-3 bg-white rounded-lg border border-border-subtle h-fit flex-shrink-0">
                                    <cap.icon className="w-5 h-5 text-neutral-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">{cap.title}</h3>
                                    <p className="text-neutral-500 leading-relaxed">{cap.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-border-subtle">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
                    <h2 className="text-3xl md:text-4xl font-serif">See your documents come alive.</h2>
                    <Link
                        href="/request-demo"
                        className="flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white hover:bg-neutral-800 transition-colors whitespace-nowrap"
                    >
                        Request Free Trial <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

