"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 overflow-hidden">
      {/* Subtle background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neutral-200/50 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-[10rem] md:text-[14rem] font-bold leading-none tracking-tighter text-neutral-200 select-none">
            404
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-foreground mb-4 -mt-8"
        >
          Page not found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-neutral-500 text-lg mb-10 max-w-md mx-auto"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-neutral-800 hover:scale-[1.02] shadow-lg"
          >
            <Home className="h-4 w-4" />
            Back to Home
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/product/overview"
            className="group flex items-center gap-2 rounded-full border border-border-subtle bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-cream hover:scale-[1.02]"
          >
            <Search className="h-4 w-4" />
            Explore Platform
          </Link>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-400"
        >
          <Link href="/product/overview" className="hover:text-foreground transition-colors">
            Product
          </Link>
          <span className="hidden sm:inline text-neutral-300">·</span>
          <Link href="/solutions/law-firms" className="hover:text-foreground transition-colors">
            Solutions
          </Link>
          <span className="hidden sm:inline text-neutral-300">·</span>
          <Link href="/customers" className="hover:text-foreground transition-colors">
            Customers
          </Link>
          <span className="hidden sm:inline text-neutral-300">·</span>
          <Link href="/security" className="hover:text-foreground transition-colors">
            Security
          </Link>
          <span className="hidden sm:inline text-neutral-300">·</span>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
