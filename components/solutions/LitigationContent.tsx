'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileSearch, ScrollText, GitCompare, Scale, Briefcase, Target } from 'lucide-react';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';

const USE_CASES = [
    {
        icon: ScrollText,
        title: 'Transcript Analysis',
        description: 'Analyze deposition and trial transcripts instantly. Surface key testimony, admissions, contradictions, and prior inconsistent statements.',
    },
    {
        icon: FileSearch,
        title: 'Case Research',
        description: 'Research case law, statutes, and regulations across jurisdictions. Wesley finds relevant precedents and explains their application.',
    },
    {
        icon: GitCompare,
        title: 'Document Comparison',
        description: 'Compare versions of pleadings, settlement agreements, and expert reports. Track every change across drafts.',
    },
    {
        icon: Scale,
        title: 'Motion Preparation',
        description: 'Draft motions, briefs, and memoranda from your research. Wesley structures arguments and cites supporting authority.',
    },
    {
        icon: Briefcase,
        title: 'Discovery Management',
        description: 'Organize and search through discovery documents at scale. Identify responsive documents and privilege issues in bulk.',
    },
    {
        icon: Target,
        title: 'Case Strategy',
        description: 'Analyze fact patterns, assess strengths and weaknesses, and map arguments across thousands of pages of evidence.',
    },
];

const STATS = [
    { value: '10x', label: 'Faster transcript review' },
    { value: '95%', label: 'Accuracy in clause identification' },
    { value: '70%', label: 'Less time on discovery review' },
];

export default function LitigationContent() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32">
                <Breadcrumbs />
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-neutral-500 font-medium mb-6 text-sm tracking-wide"
                >
                    Solutions — Litigation
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 leading-[1.05]"
                >
                    Win More Cases <br className="hidden sm:block" />With Deeper Analysis
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed"
                >
                    Wesley gives litigators the analytical depth they need. Research, analyze transcripts, compare documents, and build strategy — all in one platform.
                </motion.p>
            </section>

            {/* Stats */}
            <section className="border-t border-b border-border-subtle">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
                        {STATS.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="py-8 md:py-16 text-center"
                            >
                                <div className="text-3xl md:text-5xl font-serif text-neutral-900 mb-2">{stat.value}</div>
                                <div className="text-sm text-neutral-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">Built for litigators</h2>
                    <p className="text-neutral-500 text-lg mb-16 max-w-xl">From pre-trial preparation to post-trial analysis, Wesley supports every stage of litigation.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {USE_CASES.map((uc, index) => (
                            <motion.div
                                key={uc.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white border border-border-subtle rounded-xl p-8"
                            >
                                <div className="p-3 bg-cream rounded-lg border border-border-subtle w-fit mb-6">
                                    <uc.icon className="w-5 h-5 text-neutral-700" />
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{uc.title}</h3>
                                <p className="text-neutral-500 leading-relaxed">{uc.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="border-t border-border-subtle">
                <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
                    <blockquote className="text-2xl md:text-3xl font-serif text-neutral-900 mb-8 leading-relaxed">
                        &ldquo;Wesley found a critical inconsistency in deposition testimony that we missed after three rounds of manual review. It changed the outcome of our case.&rdquo;
                    </blockquote>
                    <p className="text-neutral-500 text-sm font-medium">Litigation Partner, International Law Firm</p>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-border-subtle bg-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-3">Ready to litigate smarter?</h2>
                        <p className="text-neutral-400 text-lg">See how Wesley supports litigation teams.</p>
                    </div>
                    <Link
                        href="/request-demo"
                        className="flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-900 hover:bg-neutral-100 transition-colors whitespace-nowrap"
                    >
                        Request a Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
