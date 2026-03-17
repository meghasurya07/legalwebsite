'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

const FOUNDERS = [
    {
        name: "Mahesh Bodepudi",
        role: "Co-Founder & CEO",
        image: "",
        past: []
    },
    {
        name: "Megha Surya Bodepudi",
        role: "Co-Founder & CTO",
        image: "",
        past: []
    },
];

export default function AboutContent() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-20">
            {/* 1. Hero Section */}
            <section className="min-h-[60vh] md:h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center px-4 sm:px-6 max-w-6xl mx-auto py-16 md:py-0">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight mb-8 leading-[1.1]"
                >
                    Redefining <br className="hidden sm:block" />
                    Legal Intelligence
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl md:text-2xl text-neutral-500 max-w-3xl leading-relaxed"
                >
                    Empowering legal professionals with next-generation AI to unlock unprecedented efficiency and insight.
                </motion.p>
            </section>

            {/* 2. Visual Gallery */}
            <section className="w-full h-[40vh] md:h-[80vh] relative overflow-hidden">
                <Image
                    src="/assets/team-meeting.png"
                    alt="Wesley Team collaboration"
                    fill
                    className="object-cover grayscale opacity-70"
                    priority
                />
            </section>

            {/* 3. Mission Text */}
            <SectionWrapper className="py-32">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-8 md:mb-12 leading-tight">
                        Bridging Law and <br /> Technology
                    </h2>
                    <div className="space-y-8 text-lg md:text-xl text-neutral-500 leading-relaxed font-light">
                        <p>
                            We exist to elevate the practice of law through technology. By fusing deep legal domain knowledge with advanced large language models, we are creating a partner that amplifies human capability, not replaces it.
                        </p>
                        <p>
                            Our diverse team of researchers, engineers, and attorneys is dedicated to solving the most complex challenges in the industry. We are building the future where legal expertise is accessible, efficient, and infinitely scalable.
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* 4. Leadership / Team Section */}
            <SectionWrapper className="py-24 pb-48">
                <div className="max-w-[1728px] mx-auto px-6 md:px-12">
                    <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-16 border-b border-border-subtle pb-4">Leadership</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {FOUNDERS.map((founder, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="aspect-[3/4] relative mb-6 overflow-hidden bg-cream rounded-sm border border-border-subtle">
                                    <Image
                                        src={founder.image || "/assets/placeholder.png"}
                                        alt={founder.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <h3 className="text-xl font-serif text-neutral-900 mb-1">{founder.name}</h3>
                                <p className="text-sm text-neutral-500 mb-4 font-medium">{founder.role}</p>

                                <div className="border-t border-border-subtle pt-4 mt-4">
                                    <ul className="text-sm text-neutral-500 space-y-1">
                                        {founder.past.map((job, i) => (
                                            <li key={i}>{job}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* 5. Investors Section */}
            <SectionWrapper className="py-24 border-t border-border-subtle">
                <div className="max-w-[1728px] mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl font-serif text-neutral-900 mb-16">Supported by World-Class Investors</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center opacity-70">
                        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/assets/placeholder.png"
                                alt="Apex Ventures"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/assets/placeholder.png"
                                alt="Tech Fund"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/assets/placeholder.png"
                                alt="Sterling Capital"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/assets/placeholder.png"
                                alt="Apex Angel"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
