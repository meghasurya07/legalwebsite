'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import LoadingScreen from '@/components/LoadingScreen';

import ValueHighlights from '@/components/landing/ValueHighlights';
import ProductShowcase from '@/components/landing/ProductShowcase';
import HowItWorks from '@/components/landing/HowItWorks';
import Metrics from '@/components/landing/Metrics';
import HeroVideoSequencer from '@/components/landing/HeroVideoSequencer';
import Compliance from '@/components/landing/Compliance';
import TrustedBy from '@/components/landing/TrustedBy';



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
    <main className="relative min-h-screen bg-background text-foreground font-sans selection:bg-neutral-200">
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
          <section className="relative flex min-h-screen w-full flex-col items-center justify-center pt-28 px-4 sm:px-6 md:px-12 overflow-hidden bg-black">
            <HeroVideoSequencer />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative z-10 mx-auto max-w-5xl text-center flex flex-col items-center pb-[100px]"
            >
              <h1 className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                </span>
                <span className="text-xs font-medium tracking-wide text-white/90">INTRODUCING WESLEY</span>
              </h1>

              <h2 className="mb-4 md:mb-6 font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white">
                Analyze Contracts. <br className="hidden sm:block" />
                <span className="text-white/70 italic">Make Better Legal Decisions.</span>
              </h2>

              <p className="mb-6 md:mb-10 max-w-2xl text-base sm:text-lg text-white/60 md:text-xl font-sans leading-relaxed">
                Wesley is the AI-powered legal intelligence platform for modern law firms. Draft contracts, conduct legal research, and review documents with partner-level precision.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/request-demo"
                  className="group flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-900 transition-all hover:bg-neutral-100 hover:scale-[1.02] shadow-xl cursor-pointer"
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/product/overview"
                  className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-[1.02] cursor-pointer"
                >
                  Explore Platform
                </Link>
              </div>
            </motion.div>

            {/* Trusted By — Harvey-style frosted glass bar pinned at bottom */}
            <div className="absolute -bottom-px left-0 right-0 z-20 bg-black/25 backdrop-blur-[20px]">
              <div className="flex h-[80px] md:h-[100px] w-full flex-row items-center justify-between gap-7 pr-4 md:pr-8 lg:pr-10">
                {/* Scrolling logos area */}
                <div className="min-w-0 flex-1">
                  <TrustedBy 
                    theme="dark" 
                    showLabel={false} 
                    logoHeight="h-[40px] md:h-[60px]" 
                    speed={60}
                    marqueeClassName="!mask-none"
                  />
                </div>
                {/* Our Customers button */}
                <div className="w-fit shrink-0">
                  <Link
                    href="/customers"
                    className="hidden md:flex items-center justify-center whitespace-nowrap text-center transition-colors duration-300 ease-out px-4 py-2 text-sm rounded-sm bg-transparent text-white/80 border border-white/30 hover:text-white hover:border-white/60"
                  >
                    Our Customers
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <ValueHighlights />
          <ProductShowcase />
          <HowItWorks />
          <Metrics />
          <Compliance />

          {/* FAQ Section for AEO/Rich Results */}
          <section className="w-full py-20 md:py-32 bg-white px-6 border-t border-border-subtle">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">How does Wesley ensure legal precision?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Wesley uses proprietary legal-specific LLMs trained on millions of high-quality legal documents, combined with a RAG (Retrieval-Augmented Generation) architecture to ensure factual accuracy and citation reliability.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Is my data shared with other firms?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    No. Wesley enforces a strict zero-training policy. Your documents are siloed within your organization and are never used to train foundational models or shared with third parties.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">Does Wesley support international data residency?</h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Yes. We offer localized data residency in the US, EU, and Australia to comply with strict regional sovereignty and privacy requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-20 md:py-32 flex flex-col items-center justify-center bg-dark text-white border-t border-border-subtle px-6">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 text-center">Ready to modernize your legal work?</h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-xl text-center">
              Join leading law firms and enterprise legal teams using Wesley to accelerate document review and strategy.
            </p>
            <Link href="/request-demo" className="rounded-sm bg-white px-10 py-4 text-base font-medium text-black hover:bg-neutral-100 transition-all shadow-xl shadow-neutral-900/50">
              Request a Demo
            </Link>
          </section>

        </motion.div>
      )}
    </main>
  );
}
