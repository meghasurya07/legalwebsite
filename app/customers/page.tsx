'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';

const METRICS = [
    { value: '30%', label: 'Productivity Boost', description: 'Average reported by users' },
    { value: '74k+', label: 'Lawyers', description: 'Using the platform daily' },
    { value: '50', label: 'AmLaw 100', description: 'Firms on the platform' },
    { value: '16hr', label: 'Time Shifted', description: 'Low to high value work monthly' },
];

const TESTIMONIALS = [
    {
        quote: "Any technology introduced into the bank must meet uncompromising standards of security, accuracy, and intention.",
        author: "Robert Schmidbauer",
        role: "Head of Group Secretariat",
        company: "Erste Group"
    },
    {
        quote: "Today as much as 80% of our people are active users, and as high as 30% use the platform more than ten times a day.",
        author: "Thomas K. Svensen",
        role: "Managing Partner",
        company: "BAHR"
    },
    {
        quote: "Artificial intelligence has already become as important to society as the internet.",
        author: "Tomasz Wardyński",
        role: "Founding Partner",
        company: "Wardyński & Partners"
    },
    {
        quote: "An outstanding product with immense potential.",
        author: "Hélder Santos",
        role: "Head of Legal Tech and Innovation",
        company: "Bird & Bird"
    },
    {
        quote: "Together we can make a huge difference for our clients and help them stay at the forefront of AI developments.",
        author: "Paulina Malmberg",
        role: "Director, Financial Regulatory Legal",
        company: "Deloitte"
    },
    {
        quote: "The generative AI platform is both thrilling and innovative, and the best we have seen so far.",
        author: "Jan Dernestam",
        role: "Managing Partner",
        company: "Mannheimer Swartling"
    }
];

import { CUSTOMER_LOGOS } from '@/constants/logos';
import TrustedBy from '@/components/landing/TrustedBy';

export default function CustomersPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero Section */}
            <section className="min-h-[60vh] md:h-[calc(100vh-5rem)] flex flex-col">
                <div className="flex-grow flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-neutral-500 font-medium mb-6 text-sm tracking-wide"
                    >
                        Customers
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-serif tracking-tight mb-8 leading-[1.1]"
                    >
                        World&apos;s Best <br className="hidden sm:block" />
                        Legal Teams
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-neutral-500 max-w-2xl leading-relaxed mb-10"
                    >
                        Discover how leading organizations work with Wesley to innovate and drive success.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/request-demo"
                            className="bg-neutral-900 text-white px-10 py-4 rounded-md font-semibold text-lg hover:bg-neutral-800 transition-colors"
                        >
                            Request a Demo
                        </Link>
                    </motion.div>
                </div>

                {/* Marquee Section (Integrated into Hero) */}
                <div className="py-8 w-full overflow-hidden border-b border-border-subtle">
                    <TrustedBy 
                        theme="light" 
                        showLabel={false} 
                        logoHeight="h-[50px] md:h-[70px]" 
                        speed={60} 
                    />
                </div>
            </section>



            {/* 2. Metrics Section */}
            <SectionWrapper className="py-24 border-b border-border-subtle">
                <div className="mb-12">
                    <h2 className="text-3xl font-semibold mb-2">Quantifiable Impact</h2>
                    <p className="text-neutral-500">Real results from deployed environments.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
                    {METRICS.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-6 border-l-2 border-border-subtle"
                        >
                            <div className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{metric.value}</div>
                            <div className="text-lg text-neutral-900 font-medium mb-1">{metric.label}</div>
                            <div className="text-sm text-neutral-500">{metric.description}</div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>


            {/* 3. Square Logo Grid */}
            <section className="py-24 border-b border-border-subtle">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Network</h2>
                    <p className="text-neutral-500">Partnering with standard-setting firms worldwide.</p>
                </div>
                <div className="mx-auto w-full max-w-[1728px]">
                    <div className="mx-7 grid grid-cols-2 gap-[14px] md:mx-8 md:grid-cols-6 md:gap-4 lg:mx-9 lg:grid-cols-12 lg:gap-[18px] xl:mx-10 xl:gap-5">
                        <div className="col-span-2 md:col-span-6 lg:col-start-2 lg:col-end-12 xl:col-start-2 xl:col-span-10">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                {CUSTOMER_LOGOS.map((client, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="aspect-[4/3] bg-cream border border-border-subtle rounded-sm flex items-center justify-center p-6 md:p-5 hover:bg-white hover:border-border-subtle hover:shadow-sm transition-all cursor-default group"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img alt={client.alt} src={client.src} className="h-[50px] md:h-[70px] w-auto invert opacity-50 group-hover:opacity-100 transition-all" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Story */}
            <SectionWrapper className="py-20 border-b border-border-subtle">
                <div className="bg-cream border border-border-subtle rounded-3xl overflow-hidden p-8 md:p-12 relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Quote size={200} />
                    </div>
                    <div className="relative z-10 max-w-4xl">
                        <div className="text-sm font-medium text-neutral-500 mb-6 uppercase tracking-wider">Featured Story</div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium leading-tight mb-8 text-neutral-800">
                            &quot;Any technology introduced into the bank must meet uncompromising standards of security, accuracy, and intention.&quot;
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-white font-bold">
                                E
                            </div>
                            <div>
                                <div className="font-semibold text-neutral-900 text-lg">Robert Schmidbauer</div>
                                <div className="text-neutral-500">Head of Group Secretariat, Erste Group</div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Customer Stories Grid */}
            <SectionWrapper className="py-24">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-4xl font-semibold">Customer Stories</h2>
                    <Link href="#" className="hidden md:flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors">
                        View all <ArrowRight size={16} />
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col h-full bg-cream/50 border border-border-subtle p-8 rounded-2xl hover:border-border-subtle hover:bg-white hover:shadow-sm transition-all group"
                        >
                            <div className="mb-8 h-12 flex items-center">
                                <span className="text-xl font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors">{item.company}</span>
                            </div>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed flex-grow">&quot;{item.quote}&quot;</p>
                            <div className="pt-8 border-t border-border-subtle">
                                <div className="font-semibold text-neutral-900">{item.author}</div>
                                <div className="text-sm text-neutral-500">{item.role}</div>
                                <Link href="#" className="flex items-center gap-2 text-sm font-medium text-neutral-900 mt-6 group-hover:translate-x-1 transition-transform">
                                    Read story <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* CTA Section */}
            <SectionWrapper className="py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-6xl font-bold mb-6">Work will never be the same.</h2>
                    <p className="text-neutral-500 text-xl mb-10">
                        Join the world&apos;s best legal teams in the AI revolution.
                    </p>
                    <Link
                        href="/request-demo"
                        className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-800 transition-colors"
                    >
                        Request a Demo
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </SectionWrapper>
        </main>
    );
}
