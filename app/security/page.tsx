'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Globe, Server, CheckCircle, FileText, ChevronDown, ExternalLink, Eye, Database, Gavel, Scale, FileJson } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-black text-white font-poppins selection:bg-zinc-800 selection:text-white pt-20">
            {/* Hero Section */}
            <SectionWrapper id="security-hero" className="py-24 md:py-32 text-center relative overflow-hidden">
                {/* Background Neural Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,100 Q500,200 1000,100 T2000,100" stroke="white" strokeWidth="1" fill="none" />
                    <path d="M0,300 Q600,400 1200,300 T2400,300" stroke="white" strokeWidth="0.5" fill="none" />
                    <path d="M0,600 Q400,500 800,600 T1600,600" stroke="white" strokeWidth="0.5" fill="none" />
                </svg>

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <p className="text-zinc-400 font-medium mb-4 uppercase tracking-widest text-sm">Security First</p>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                            Uncompromising <br className="hidden md:block" /> Data Protection
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        We secure your most sensitive legal matters with enterprise-grade encryption, strict data residency controls, and a zero-training privacy guarantee.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/request-demo"
                            className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:bg-zinc-200"
                        >
                            Request a Demo
                        </Link>
                    </motion.div>
                </div>
            </SectionWrapper>

            {/* Enterprise Grade Protection Grid */}
            <SectionWrapper id="security-features" className="py-24 bg-zinc-950 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-zinc-400 text-sm uppercase tracking-widest mb-2">Core Pillars</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Enterprise-Ready Architecture</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-0 border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/20 backdrop-blur-sm relative">
                        {/* Card 1 */}
                        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800 relative group">
                            <div className="mb-6 p-3 bg-zinc-800/50 rounded-lg w-fit group-hover:bg-blue-500/10 transition-colors">
                                <Shield className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">World-Class Security Ops</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Our dedicated security engineering team works around the clock. We maintain 24/7 infrastructure monitoring, automated threat detection, and rigorous vulnerability assessments.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800 relative group">
                            <div className="mb-6 p-3 bg-zinc-800/50 rounded-lg w-fit group-hover:bg-purple-500/10 transition-colors">
                                <Globe className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Global Data Residency</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                You choose where your data lives. We adhere to strict data sovereignty requirements, offering storage options in the US, EU, and Australia to meet your compliance needs.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 md:p-12 relative group">
                            <div className="mb-6 p-3 bg-zinc-800/50 rounded-lg w-fit group-hover:bg-green-500/10 transition-colors">
                                <Database className="w-8 h-8 text-white group-hover:text-green-400 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Zero-Training Guarantee</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Your data is yours alone. We enforce a strict policy: client data is never used to train our foundational models or shared across our customer base.
                            </p>
                        </div>

                        {/* Card 4 - Row 2 */}
                        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r md:border-t border-zinc-800 relative group">
                            <div className="mb-6 p-3 bg-zinc-800/50 rounded-lg w-fit group-hover:bg-zinc-700 transition-colors">
                                <Server className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Scalable Enterprise Controls</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Manage access with precision. We support SAML SSO, granular IP allow-listing, custom retention rules, and comprehensive audit logs for full visibility.
                            </p>
                        </div>

                        {/* Card 5 - Row 2 */}
                        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r md:border-t border-zinc-800 relative group">
                            <div className="mb-6 p-3 bg-zinc-800/50 rounded-lg w-fit group-hover:bg-zinc-700 transition-colors">
                                <Gavel className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Binding Legal Assurances</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                We back our technology with strong contractual commitments. Our DPA includes strict terms on data protection, incident response times, and liability.
                            </p>
                        </div>

                        {/* Card 6 - Row 2 */}
                        <div className="p-8 md:p-12 md:border-t border-zinc-800 relative group">
                            <div className="mb-6 p-3 bg-zinc-800/50 rounded-lg w-fit group-hover:bg-zinc-700 transition-colors">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Third-Party Verified</h3>
                            <p className="text-zinc-400 leading-relaxed">
                                Don't just take our word for it. We undergo rigorous annual audits by top-tier firms like Bishop Fox and NCC Group to validate our defense-in-depth security posture.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>


            {/* Compliance Section */}
            <SectionWrapper id="security-compliance" className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Industry Standards & Compliance</h2>

                        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                            {/* SOC2 */}
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center p-8 group-hover:border-zinc-700 transition-colors">
                                    <Shield className="w-full h-full text-zinc-500 group-hover:text-blue-400 transition-colors" strokeWidth={1} />
                                </div>
                                <h4 className="font-bold text-zinc-300">SOC2 TYPE II</h4>
                                <Link href="https://us.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report" target="_blank" className="text-sm text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                                    Verify <ExternalLink className="w-3 h-3" />
                                </Link>
                            </div>

                            {/* ISO */}
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center p-8 group-hover:border-zinc-700 transition-colors">
                                    <Globe className="w-full h-full text-zinc-500 group-hover:text-purple-400 transition-colors" strokeWidth={1} />
                                </div>
                                <h4 className="font-bold text-zinc-300">ISO 27001</h4>
                                <Link href="https://www.iso.org/standard/27001" target="_blank" className="text-sm text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                                    Verify <ExternalLink className="w-3 h-3" />
                                </Link>
                            </div>

                            {/* GDPR */}
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center p-8 group-hover:border-zinc-700 transition-colors">
                                    <Lock className="w-full h-full text-zinc-500 group-hover:text-green-400 transition-colors" strokeWidth={1} />
                                </div>
                                <h4 className="font-bold text-zinc-300">GDPR Compliant</h4>
                                <Link href="https://commission.europa.eu/law/law-topic/data-protection/eu-data-protection-rules_en" target="_blank" className="text-sm text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                                    Verify <ExternalLink className="w-3 h-3" />
                                </Link>
                            </div>

                            {/* CCPA */}
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center p-8 group-hover:border-zinc-700 transition-colors">
                                    <Scale className="w-full h-full text-zinc-500 group-hover:text-yellow-400 transition-colors" strokeWidth={1} />
                                </div>
                                <h4 className="font-bold text-zinc-300">CCPA</h4>
                                <Link href="https://oag.ca.gov/privacy/ccpa" target="_blank" className="text-sm text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                                    Verify <ExternalLink className="w-3 h-3" />
                                </Link>
                            </div>

                            {/* DPF */}
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-center p-8 group-hover:border-zinc-700 transition-colors">
                                    <FileJson className="w-full h-full text-zinc-500 group-hover:text-red-400 transition-colors" strokeWidth={1} />
                                </div>
                                <h4 className="font-bold text-zinc-300">DPF Framework</h4>
                                <Link href="https://www.dataprivacyframework.gov/" target="_blank" className="text-sm text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                                    Verify <ExternalLink className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto mt-20 p-8 border border-zinc-800 rounded-xl bg-zinc-900/20 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Built on a Foundation of Trust</h3>
                        <p className="text-zinc-400 leading-relaxed mb-0">
                            Security isn't an afterthought; it's the core of our platform. From the moment you upload a document to the final export of your insights, we ensure your data is shielded by defense-in-depth architecture and rigorous privacy protocols.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* FAQ Section */}
            <SectionWrapper id="security-faq" className="py-24 bg-zinc-950 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Common Security Questions</h2>
                    <div className="space-y-4">
                        <FAQItem
                            question="How is customer data defined and classified?"
                            answer="We classify any file, document, text snippet, or metadata you upload as 'Customer Data'. This is treated with the highest level of confidentiality and security, separate from any system data."
                        />
                        <FAQItem
                            question="What encryption standards do you use?"
                            answer="We utilize enterprise-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring your information remains secure whether it's stored or moving across the network."
                        />
                        <FAQItem
                            question="Can we choose where our data is processed?"
                            answer="Absolutely. We offer strict data residency options. You can mandate that your data processing and storage occur entirely within the US, the EU, or Australia to comply with local regulations."
                        />
                        <FAQItem
                            question="What happens when we delete data from the platform?"
                            answer="Deletion is permanent. When you request data deletion, we perform a hard delete across all active systems and backups within our standard retention window, ensuring no residual copies remain."
                        />
                        <FAQItem
                            question="How do you handle internal access to data?"
                            answer="Access is strictly limited by a 'need-to-know' policy. Our internal teams cannot access customer data without explicit authorization, typically only granted for support tickets you initiate."
                        />
                        <FAQItem
                            question="Is my data used to train your AI models?"
                            answer="Never. We have a fundamental zero-training policy. Your documents and inputs are processed solely to provide you with results and are never aggregated to train our foundational models."
                        />
                        <FAQItem
                            question="How often do you perform penetration testing?"
                            answer="We engage independent, accredited security firms to conduct deep-dive penetration tests and vulnerability assessments at least annually, in addition to our continuous rapid scanning."
                        />
                    </div>
                </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper id="security-cta" className="py-24 border-t border-white/10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <h3 className="text-3xl font-bold text-white max-w-xl">
                            Ready to Modernize Your Legal Workflow?
                        </h3>
                        <Link
                            href="/request-demo"
                            className="rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:bg-zinc-200 whitespace-nowrap"
                        >
                            Request a Demo
                        </Link>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-zinc-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left text-zinc-200 hover:text-white transition-colors"
            >
                <span className="text-lg font-medium pr-8">{question}</span>
                <ChevronDown className={`w-5 h-5 min-w-[20px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-zinc-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
