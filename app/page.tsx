'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import LoadingScreen from '@/components/LoadingScreen';

import TrustedBy from '@/components/landing/TrustedBy';
import ValueHighlights from '@/components/landing/ValueHighlights';
import ProductShowcase from '@/components/landing/ProductShowcase';
import HowItWorks from '@/components/landing/HowItWorks';
import Metrics from '@/components/landing/Metrics';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load / smooth transition duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-neutral-700">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >


          {/* Hero Section */}
          <section className="relative flex h-[80vh] min-h-[600px] w-full flex-col items-center justify-center px-6 md:px-12 overflow-hidden">
            {/* Background Neural Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,100 Q500,200 1000,100 T2000,100" stroke="white" strokeWidth="1" fill="none" />
              <path d="M0,300 Q600,400 1200,300 T2400,300" stroke="white" strokeWidth="0.5" fill="none" />
              <path d="M0,600 Q400,500 800,600 T1600,600" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>

            {/* Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative z-10 mx-auto max-w-4xl text-center"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xs font-poppins uppercase tracking-[0.2em] text-white mb-6"
              >
                The New Standard for Legal Work
              </motion.p>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-poppins leading-tight">
                Analyze Contracts.
                <span className="block text-2xl md:text-4xl font-normal text-neutral-500 mt-3 tracking-normal">
                  Make Better Legal Decisions.
                </span>
              </h1>

              <p className="mx-auto max-w-2xl text-base text-neutral-400 md:text-lg leading-relaxed mb-8 font-sans">
                COMPANY_NAME provides AI-powered legal intelligence to help teams review documents faster, identify risk, and act with confidence.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/request-demo" className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-neutral-200 transition-all font-poppins">
                  Request a Demo
                </Link>
              </div>
            </motion.div>
          </section>

          <TrustedBy />
          <ValueHighlights />
          <ProductShowcase />
          <HowItWorks />
          <Metrics />

          {/* CTA Section */}
          <section className="w-full py-32 flex flex-col items-center justify-center bg-gradient-to-t from-neutral-900 via-black to-black border-t border-white/5">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center font-poppins">Ready to modernize your Legal Work?</h2>
            <Link href="/request-demo" className="rounded-full bg-white px-10 py-5 text-lg font-bold text-black hover:bg-neutral-200 transition-all shadow-xl shadow-white/5">
              Request a Demo
            </Link>
          </section>

        </motion.div>
      )}
    </main>
  );
}
