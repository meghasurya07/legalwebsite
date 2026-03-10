'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, FileText, AlertTriangle, BarChart3, Zap, Globe } from 'lucide-react';

const USE_CASES = [
    {
        icon: FileText,
        title: 'Vendor Contract Review',
        description: 'Review vendor agreements, SaaS terms, and procurement contracts faster. Flag non-standard clauses automatically.',
    },
    {
        icon: Shield,
        title: 'Policy Compliance',
        description: 'Ensure internal policies align with regulations. Wesley monitors changes and flags gaps in your frameworks.',
    },
    {
        icon: AlertTriangle,
        title: 'Risk Assessment',
        description: 'Identify exposure across contract portfolios. Surface obligations, deadlines, and liability terms at scale.',
    },
    {
        icon: BarChart3,
        title: 'Board Reporting',
        description: 'Generate executive-ready summaries of legal matters, risk exposures, and compliance status for the board.',
    },
    {
        icon: Zap,
        title: 'Self-Service Legal',
        description: 'Empower business teams to get simple legal answers without filing a request. Reduce intake volume by half.',
    },
    {
        icon: Globe,
        title: 'Multi-Jurisdiction Work',
        description: 'Navigate regulatory requirements across jurisdictions. Wesley researches local rules and compares frameworks.',
    },
];

const STATS = [
    { value: '50%', label: 'Reduction in outside counsel spend' },
    { value: '3x', label: 'Faster contract turnaround' },
    { value: '60%', label: 'Less time on routine intake' },
];

export default function InHouseTeamsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 md:pt-24 md:pb-32">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-neutral-500 font-medium mb-6 text-sm tracking-wide"
                >
                    Solutions — In-House Teams
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 leading-[1.05]"
                >
                    Do More With Less. <br />Advise With Confidence.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed"
                >
                    Reduce reliance on outside counsel, accelerate contract cycles, and give your team the tools to handle growing demand without growing budget.
                </motion.p>
            </section>

            {/* Stats */}
            <section className="border-t border-b border-border-subtle">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-3 divide-x divide-border-subtle">
                        {STATS.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="py-12 md:py-16 text-center"
                            >
                                <div className="text-4xl md:text-5xl font-serif text-neutral-900 mb-2">{stat.value}</div>
                                <div className="text-sm text-neutral-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-cream">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4">Built for in-house teams</h2>
                    <p className="text-neutral-500 text-lg mb-16 max-w-xl">Whether you&apos;re a team of three or three hundred, Wesley adapts to how your legal department actually works.</p>
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
                        &ldquo;We cut our outside counsel budget by 40% in the first year. Wesley handles the routine so our team can focus on strategic work.&rdquo;
                    </blockquote>
                    <p className="text-neutral-500 text-sm font-medium">General Counsel, Fortune 500 Company</p>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-border-subtle bg-neutral-900 text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-3">Your team deserves better tools.</h2>
                        <p className="text-neutral-400 text-lg">See how Wesley helps in-house teams move faster.</p>
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
