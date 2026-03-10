'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, FileSearch, FileSignature, GitCompare, PenTool, Newspaper, Languages, Building2, ScrollText } from 'lucide-react';

const ANALYSIS_WORKFLOWS = [
    {
        icon: FileSearch,
        title: 'Contract Analysis',
        description: 'Identify key clauses, obligations, risks, and extract important dates and parties automatically.',
    },
    {
        icon: GitCompare,
        title: 'Document Comparison',
        description: 'Compare documents across formats. Surface differences in substance, not just formatting.',
    },
    {
        icon: FileSignature,
        title: 'Redline Analysis',
        description: 'Compare original and revised versions. Generate response charts and identify every change.',
    },
];

const DRAFTING_WORKFLOWS = [
    {
        icon: PenTool,
        title: 'Draft from Template',
        description: 'Generate contracts, agreements, and legal letters from your firm&apos;s pre-approved templates.',
    },
    {
        icon: ScrollText,
        title: 'Draft Memo',
        description: 'Transform research into structured legal memorandums. Citations included automatically.',
    },
    {
        icon: Newspaper,
        title: 'Draft Client Alert',
        description: 'Create professional alerts on legal developments and regulatory changes for your clients.',
    },
];

const RESEARCH_WORKFLOWS = [
    {
        icon: Building2,
        title: 'Company Profiles',
        description: 'Analyze SEC filings, 10-Ks, and public records for comprehensive business intelligence.',
    },
    {
        icon: ScrollText,
        title: 'Transcript Analysis',
        description: 'Analyze trial and deposition transcripts. Surface key testimony, admissions, and contradictions.',
    },
    {
        icon: Languages,
        title: 'Translation',
        description: 'Translate legal documents into other languages while maintaining legal meaning and context.',
    },
];

export default function WorkflowsPage() {
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
                    <span className="text-neutral-900">Workflows</span>
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 leading-[1.05]"
                >
                    Automate Expert <br />Legal Work
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed"
                >
                    Pre-built workflows for contract analysis, drafting, research, and more. Each one delivers structured, reliable output in minutes.
                </motion.p>
            </section>

            {/* Workflow Category: Analysis */}
            <WorkflowSection
                label="Document Analysis"
                title="Review and analyze with precision"
                workflows={ANALYSIS_WORKFLOWS}
                bgClass="bg-cream"
            />

            {/* Workflow Category: Drafting */}
            <WorkflowSection
                label="Drafting & Generation"
                title="Draft with your firm&apos;s standards"
                workflows={DRAFTING_WORKFLOWS}
                bgClass="bg-background"
            />

            {/* Workflow Category: Research */}
            <WorkflowSection
                label="Research & Intelligence"
                title="Research deeper, report faster"
                workflows={RESEARCH_WORKFLOWS}
                bgClass="bg-cream"
            />

            {/* CTA */}
            <section className="border-t border-border-subtle">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
                    <h2 className="text-3xl md:text-4xl font-serif">See workflows in action.</h2>
                    <Link
                        href="/request-demo"
                        className="flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white hover:bg-neutral-800 transition-colors whitespace-nowrap"
                    >
                        Request a Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
}

function WorkflowSection({
    label,
    title,
    workflows,
    bgClass,
}: {
    label: string;
    title: string;
    workflows: { icon: React.ElementType; title: string; description: string }[];
    bgClass: string;
}) {
    return (
        <section className={`border-t border-border-subtle ${bgClass}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
                <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider mb-4">{label}</p>
                <h2 className="text-3xl md:text-4xl font-serif mb-16">{title}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {workflows.map((wf, index) => (
                        <motion.div
                            key={wf.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white border border-border-subtle rounded-xl p-8 hover:shadow-sm transition-shadow"
                        >
                            <div className="p-3 bg-cream rounded-lg border border-border-subtle w-fit mb-6">
                                <wf.icon className="w-5 h-5 text-neutral-700" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-900 mb-3">{wf.title}</h3>
                            <p className="text-neutral-500 leading-relaxed">{wf.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
