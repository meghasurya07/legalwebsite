'use client';

import { motion } from 'framer-motion';
import RequestDemoForm from '@/components/RequestDemoForm';
import TrustedBy from '@/components/landing/TrustedBy';

export default function RequestDemoPage() {
    return (
        <main className="relative min-h-screen bg-background text-foreground font-sans pt-20">

            {/* Hero + Form Section */}
            <section className="relative min-h-screen pt-24 pb-16 px-6 md:px-12 flex items-center justify-center overflow-hidden">
                <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side - Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h1 className="text-5xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
                            Professional<br />Class AI
                        </h1>
                        <p className="text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl">
                            Wesley is the platform built to meet the standards of the world&apos;s leading professional service firms.
                        </p>

                        {/* Trusted By Section (Desktop Only) */}
                        <div className="hidden lg:block mt-12 -mx-6">
                            <TrustedBy />
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <RequestDemoForm />
                    </motion.div>
                </div>
            </section>

            {/* Trusted By Section (Mobile) */}
            <div className="lg:hidden">
                <TrustedBy />
            </div>
        </main>
    );
}
