'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileSearch, PenTool, Scale, Clock, Users, TrendingUp } from 'lucide-react';
import Breadcrumbs from '@/components/SEO/Breadcrumbs';

const USE_CASES = [
    {
        icon: FileSearch,
        title: 'Due Diligence',
        description: 'Analyze hundreds of contracts in hours, not weeks. Surface risks, obligations, and red flags across data rooms.',
    },
    {
        icon: PenTool,
        title: 'Contract Drafting',
        description: 'Generate first drafts from your firm\'s templates. Maintain consistency across associates and partners.',
    },
    {
        icon: Scale,
        title: 'Legal Research',
        description: 'Deep research across jurisdictions. Wesley cites every source so your associates can verify and build on results.',
    },
    {
        icon: Clock,
        title: 'Client Alerts',
        description: 'Produce timely client advisories on regulatory changes and legal developments. Keep clients informed, efficiently.',
    },
    {
        icon: Users,
        title: 'Knowledge Management',
        description: 'Build a searchable repository of your firm\'s work product. Find precedents and past work in seconds.',
    },
    {
        icon: TrendingUp,
        title: 'Business Intelligence',
        description: 'Analyze SEC filings, public records, and corporate data. Give clients strategic insights backed by data.',
    },
];

const STATS = [
    { value: '85%', label: 'Reduction in first-draft time' },
    { value: '10x', label: 'Faster document review' },
    { value: '200+', label: 'Workflow templates' },
];

export default function LawFirmsContent() {
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
                    Solutions — Law Firms
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 leading-[1.05]"
                >
                    Scale Your Practice, <br className="hidden sm:block" />Not Your Headcount
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed"
                >
                    Wesley helps law firms deliver partner-level work at associate speed. Draft, research, and analyze with the quality your clients expect.
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
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">Core AI Use Cases for Law Firms</h2>
                    <p className="text-neutral-500 text-lg mb-16 max-w-xl">From AmLaw 100 to boutique practices, leading firms build Wesley into their daily workflows.</p>
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
                        &ldquo;Wesley changed how our associates approach document review. What used to take a week now takes a morning.&rdquo;
                    </blockquote>
                    <p className="text-neutral-500 text-sm font-medium">Managing Partner, AmLaw 100 Firm</p>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-border-subtle bg-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-3">Ready to modernize your practice?</h2>
                        <p className="text-neutral-400 text-lg">See how Wesley works for firms like yours.</p>
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
