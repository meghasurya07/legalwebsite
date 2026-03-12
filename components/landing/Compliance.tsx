'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { Shield, Lock, Globe, ExternalLink, Scale, FileJson } from 'lucide-react';
import Link from 'next/link';

export default function Compliance() {
    return (
        <SectionWrapper id="compliance" className="py-24 bg-background border-t border-border-subtle">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">Industry Standards & Compliance</h2>

                    <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 gap-y-10 md:gap-16">
                        {/* SOC2 */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 md:w-36 md:h-36 rounded-2xl border border-border-subtle bg-cream flex items-center justify-center p-6 md:p-8 group-hover:border-neutral-300 transition-colors">
                                <Shield className="w-full h-full text-neutral-400 group-hover:text-neutral-900 transition-colors" strokeWidth={1} />
                            </div>
                            <h4 className="font-bold text-neutral-700">SOC2 TYPE II</h4>
                            <Link href="https://us.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report" target="_blank" className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors">
                                Verify <ExternalLink className="w-3 h-3" />
                            </Link>
                        </div>

                        {/* ISO */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 md:w-36 md:h-36 rounded-2xl border border-border-subtle bg-cream flex items-center justify-center p-6 md:p-8 group-hover:border-neutral-300 transition-colors">
                                <Globe className="w-full h-full text-neutral-400 group-hover:text-neutral-900 transition-colors" strokeWidth={1} />
                            </div>
                            <h4 className="font-bold text-neutral-700">ISO 27001</h4>
                            <Link href="https://www.iso.org/standard/27001" target="_blank" className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors">
                                Verify <ExternalLink className="w-3 h-3" />
                            </Link>
                        </div>

                        {/* GDPR */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 md:w-36 md:h-36 rounded-2xl border border-border-subtle bg-cream flex items-center justify-center p-6 md:p-8 group-hover:border-neutral-300 transition-colors">
                                <Lock className="w-full h-full text-neutral-400 group-hover:text-neutral-900 transition-colors" strokeWidth={1} />
                            </div>
                            <h4 className="font-bold text-neutral-700">GDPR Compliant</h4>
                            <Link href="https://commission.europa.eu/law/law-topic/data-protection/eu-data-protection-rules_en" target="_blank" className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors">
                                Verify <ExternalLink className="w-3 h-3" />
                            </Link>
                        </div>

                        {/* CCPA */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 md:w-36 md:h-36 rounded-2xl border border-border-subtle bg-cream flex items-center justify-center p-6 md:p-8 group-hover:border-neutral-300 transition-colors">
                                <Scale className="w-full h-full text-neutral-400 group-hover:text-neutral-900 transition-colors" strokeWidth={1} />
                            </div>
                            <h4 className="font-bold text-neutral-700">CCPA</h4>
                            <Link href="https://oag.ca.gov/privacy/ccpa" target="_blank" className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors">
                                Verify <ExternalLink className="w-3 h-3" />
                            </Link>
                        </div>

                        {/* DPF */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 md:w-36 md:h-36 rounded-2xl border border-border-subtle bg-cream flex items-center justify-center p-6 md:p-8 group-hover:border-neutral-300 transition-colors">
                                <FileJson className="w-full h-full text-neutral-400 group-hover:text-neutral-900 transition-colors" strokeWidth={1} />
                            </div>
                            <h4 className="font-bold text-neutral-700">DPF Framework</h4>
                            <Link href="https://www.dataprivacyframework.gov/" target="_blank" className="text-sm text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors">
                                Verify <ExternalLink className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mt-12 md:mt-20 p-6 md:p-8 border border-border-subtle rounded-xl bg-cream text-center">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">Built on a Foundation of Trust</h3>
                    <p className="text-neutral-600 leading-relaxed mb-0">
                        Security isn&apos;t an afterthought; it&apos;s the core of our platform. From the moment you upload a document to the final export of your insights, we ensure your data is shielded by defense-in-depth architecture and rigorous privacy protocols.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}
