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

const CUSTOMER_LOGOS = [
  { alt: "Vinson & Elkins", src: "https://cdn.sanity.io/images/07s0r5r6/production/49f5af417061bdcd4d4cb1809f7b6ba67a546eb2-399x200.svg", w: 399, h: 120 },
  { alt: "Schonherr", src: "https://cdn.sanity.io/images/07s0r5r6/production/01e228781a0bda4a46ea94609e8d1c8c1b002afd-310x200.svg", w: 310, h: 120 },
  { alt: "Deutsche Telekom", src: "https://cdn.sanity.io/images/07s0r5r6/production/dc9929a451b2a5d4901a1f8007db6b8b861fabf7-287x196.svg", w: 287, h: 120 },
  { alt: "Repsol", src: "https://cdn.sanity.io/images/07s0r5r6/production/986f3db7eef205b7a381bcb3b8a04f841120d4fb-328x200.svg", w: 328, h: 120 },
  { alt: "Reed Smith", src: "https://cdn.sanity.io/images/07s0r5r6/production/4e1367d6c674a71d2239b7168a43df0b712e79d4-293x200.svg", w: 293, h: 120 },
  { alt: "PwC UK", src: "https://cdn.sanity.io/images/07s0r5r6/production/0f67595e033573c018be1e572db54a178b6a7576-157x200.svg", w: 157, h: 120 },
  { alt: "O'Melveny", src: "https://cdn.sanity.io/images/07s0r5r6/production/4aef2ed01f98672365a28f1b1464f0b39de53db4-307x200.svg", w: 307, h: 120 },
  { alt: "Bridgewater", src: "https://cdn.sanity.io/images/07s0r5r6/production/85562a0494a1a7de8c434a376fc841ee0a03dd6d-364x200.svg", w: 364, h: 120 },
  { alt: "Macfarlanes", src: "https://cdn.sanity.io/images/07s0r5r6/production/d7d4d4e3b180cc9d15aa0e13eaa246a741909c72-413x198.svg", w: 413, h: 120 },
  { alt: "KKR", src: "https://cdn.sanity.io/images/07s0r5r6/production/475bbc2a0f74530ca928cb7509c910ed6fb06c43-162x200.svg", w: 162, h: 120 },
  { alt: "A&O Shearman", src: "https://cdn.sanity.io/images/07s0r5r6/production/7be263cc75e286f1869a2d570a72d7aea4c564f6-477x200.svg", w: 477, h: 120 },
  { alt: "Gleiss Lutz", src: "https://cdn.sanity.io/images/07s0r5r6/production/5934ef5e8ff97b10f21175975777c6a4b6df11ff-318x200.svg", w: 318, h: 120 },
  { alt: "CMS", src: "https://cdn.sanity.io/images/07s0r5r6/production/94accdbd4a1b543162412cf72a93f5ef86bcfc37-167x200.svg", w: 167, h: 120 },
  { alt: "Cuatrecasas", src: "https://cdn.sanity.io/images/07s0r5r6/production/41dd412dbdacff7fc7a9eb7eee77f7de3872bd6b-289x200.svg", w: 289, h: 120 },
  { alt: "Thompson Hine", src: "https://cdn.sanity.io/images/07s0r5r6/production/1a418fe5940a4f84d13a657732ecb4d52131572e-419x200.svg", w: 419, h: 120 },
  { alt: "Merck", src: "https://cdn.sanity.io/images/07s0r5r6/production/b86eaa7fe2558c5eb13b1a88a03d8630122f3055-320x200.svg", w: 320, h: 120 },
  { alt: "Comcast", src: "https://cdn.sanity.io/images/07s0r5r6/production/36bbd399121eff2b23cd36789ee677a065c3bd68-284x200.svg", w: 284, h: 120 },
  { alt: "Dentons", src: "https://cdn.sanity.io/images/07s0r5r6/production/27beffa5c7f5e04aaf92472d6249278a70fdf91b-268x196.svg", w: 268, h: 120 },
  { alt: "BakerHostetler", src: "https://cdn.sanity.io/images/07s0r5r6/production/e375b788deac927f303f0d0b7b23272828cdeb89-330x200.svg", w: 330, h: 120 },
  { alt: "Procter & Gamble", src: "https://cdn.sanity.io/images/07s0r5r6/production/937096215325168ce61ab7474795df23c0d1d264-120x200.svg", w: 120, h: 120 },
  { alt: "HSFK", src: "https://cdn.sanity.io/images/07s0r5r6/production/a2f41ae8b5ef302e51fbe0cf5ab140139295bcfa-245x200.svg", w: 245, h: 120 },
];

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
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                </span>
                <span className="text-xs font-medium tracking-wide text-white/90">INTRODUCING WESLEY</span>
              </div>

              <h1 className="mb-4 md:mb-6 font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white">
                Analyze Contracts. <br className="hidden sm:block" />
                <span className="text-white/70 italic">Make Better Legal Decisions.</span>
              </h1>

              <p className="mb-6 md:mb-10 max-w-2xl text-base sm:text-lg text-white/60 md:text-xl font-sans leading-relaxed">
                The world&apos;s most advanced AI for legal professionals. Draft, search, and reason over documents with partner-level precision.
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
                <div className="min-w-0 flex-1" style={{ maskImage: 'linear-gradient(to right, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 80%, transparent 100%)' }}>
                  <div className="relative flex overflow-hidden">
                    <div className="flex w-max animate-[hero-scroll_60s_linear_infinite] will-change-transform [backface-visibility:hidden]">
                      <ul className="flex w-max items-center">
                        {CUSTOMER_LOGOS.map((logo, i) => (
                          <li key={`a-${i}`} className="flex shrink-0 list-none items-center px-6">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt={logo.alt} src={logo.src} width={logo.w} height={logo.h} className="h-[40px] md:h-[60px] w-auto" style={{ color: 'transparent' }} />
                          </li>
                        ))}
                      </ul>
                      <ul aria-hidden="true" className="flex w-max items-center">
                        {CUSTOMER_LOGOS.map((logo, i) => (
                          <li key={`b-${i}`} className="flex shrink-0 list-none items-center px-6">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img alt={logo.alt} src={logo.src} width={logo.w} height={logo.h} className="h-[40px] md:h-[60px] w-auto" style={{ color: 'transparent' }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
