'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquare, FolderOpen, Workflow } from 'lucide-react';

const PRODUCTS = [
    {
        icon: MessageSquare,
        title: 'Assistant',
        href: '/product/assistant',
        description: 'Ask questions, analyze documents, and draft legal work with domain-specific AI.',
    },
    {
        icon: FolderOpen,
        title: 'Documents',
        href: '/product/documents',
        description: 'Organize, search, and reason over thousands of files in a secure repository.',
    },
    {
        icon: Workflow,
        title: 'Workflows',
        href: '/product/workflows',
        description: 'Run pre-built legal workflows or build your own, tailored to your practice.',
    },
];

export default function ProductOverviewPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-neutral-500 font-medium mb-6 text-sm tracking-wide"
                >
                    Platform Overview
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 leading-[1.05]"
                >
                    Engineered for <br />Every Legal Task
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed"
                >
                    Wesley is the AI platform built for the standards of the world&apos;s leading legal teams. Draft, research, and analyze with precision.
                </motion.p>
            </section>

            {/* Product Cards */}
            <section className="border-t border-border-subtle">
                {PRODUCTS.map((product, index) => (
                    <Link
                        key={product.title}
                        href={product.href}
                        className="group block border-b border-border-subtle"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-cream/50 transition-colors"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-cream rounded-lg border border-border-subtle group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors flex-shrink-0">
                                    <product.icon className="w-6 h-6 text-neutral-700 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-serif mb-2 group-hover:text-neutral-600 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-neutral-500 text-lg max-w-xl leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                            <ArrowRight className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </motion.div>
                    </Link>
                ))}
            </section>

            {/* Feature Highlights */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">Enterprise Security</h3>
                        <p className="text-neutral-500 leading-relaxed">
                            SOC 2 Type II, ISO 27001, GDPR compliant. Your data is never used to train models. Full audit logs and SSO included.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">Domain-Specific AI</h3>
                        <p className="text-neutral-500 leading-relaxed">
                            Built specifically for legal work. Every response is grounded in legal reasoning, not general-purpose AI output.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-3">Scales With Your Firm</h3>
                        <p className="text-neutral-500 leading-relaxed">
                            From solo practitioners to AmLaw 100 firms. Wesley adapts to your workflows, not the other way around.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-border-subtle">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
                    <h2 className="text-3xl md:text-4xl font-serif">Ready to see it in action?</h2>
                    <Link
                        href="/request-demo"
                        className="rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white hover:bg-neutral-800 transition-colors whitespace-nowrap"
                    >
                        Request a Demo
                    </Link>
                </div>
            </section>
        </main>
    );
}
