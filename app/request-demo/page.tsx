'use client';

import { motion } from 'framer-motion';
import RequestDemoForm from '@/components/RequestDemoForm';
import TrustedBy from '@/components/landing/TrustedBy';
import Navbar from '@/components/Navbar';

export default function RequestDemoPage() {
    return (
        <main className="relative min-h-screen bg-black text-white font-sans">
            <Navbar />

            {/* Hero + Form Section */}
            <section className="relative min-h-screen pt-24 pb-16 px-6 md:px-12 flex items-center justify-center overflow-hidden">
                {/* Background Neural Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,100 Q500,200 1000,100 T2000,100" stroke="white" strokeWidth="1" fill="none" />
                    <path d="M0,300 Q600,400 1200,300 T2400,300" stroke="white" strokeWidth="0.5" fill="none" />
                    <path d="M0,600 Q400,500 800,600 T1600,600" stroke="white" strokeWidth="0.5" fill="none" />
                </svg>

                {/* Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Side - Hero Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
                            Professional<br />Class AI
                        </h1>
                        <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl">
                            COMPANY_NAME is the platform built to meet the standards of the world's leading professional service firms.
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
