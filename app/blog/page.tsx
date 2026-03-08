'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

import { useState } from 'react';

const CATEGORIES = ["All", "Insights", "Product", "News", "Engineering"];

const ARTICLES = [
    {
        category: "Insights",
        date: "Oct 12, 2024",
        title: "The Future of Legal Tech: AI-Driven Workflows",
        image: "/assets/blog1.png",
        excerpt: "How generative AI is transforming the daily practice of law, from contract review to litigation support."
    },
    {
        category: "Product",
        date: "Sep 28, 2024",
        title: "Introducing Advanced Contract Analysis 2.0",
        image: "/assets/blog2.png",
        excerpt: "Our latest model update delivers 3x faster processing and higher accuracy for complex cross-border agreements."
    },
    {
        category: "News",
        date: "Sep 15, 2024",
        title: "Wesley Partners with Global Top 100 Firm",
        image: "/assets/blog3.png",
        excerpt: "A strategic alliance to deploy our enterprise platform across 40 offices worldwide."
    },
    {
        category: "Engineering",
        date: "Aug 30, 2024",
        title: "Scaling LLMs for Secure Enterprise Environments",
        image: "/assets/blog1.png", // Reusing image
        excerpt: "A deep dive into our infrastructure and how we handle data privacy for sensitive legal documents."
    },
    {
        category: "Insights",
        date: "Aug 10, 2024",
        title: "Navigating the Regulatory Landscape of AI",
        image: "/assets/blog2.png", // Reusing image
        excerpt: "Understanding the EU AI Act and its implications for legal service providers."
    },
    {
        category: "Product",
        date: "Jul 22, 2024",
        title: "Feature Spotlight: Automated Due Diligence",
        image: "/assets/blog3.png", // Reusing image
        excerpt: "Reduce manual review time by 80% with our new automated diligence module."
    }
];

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredArticles = selectedCategory === "All"
        ? ARTICLES
        : ARTICLES.filter(article => article.category === selectedCategory);

    return (
        <main className="min-h-screen bg-background text-foreground pt-32">
            <SectionWrapper>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Header */}
                    <div className="mb-20 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-serif mb-6 text-neutral-900"
                        >
                            Blog
                        </motion.h1>
                        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                            Insights, updates, and perspectives from the team building the future of legal intelligence.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                                    ${selectedCategory === cat
                                        ? 'bg-neutral-900 text-white border-neutral-900'
                                        : 'bg-transparent text-neutral-500 border-border-subtle hover:border-neutral-900 hover:text-neutral-900'}
                                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Article Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {filteredArticles.map((article, index) => (
                            <motion.div
                                key={index}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[16/10] bg-cream rounded-sm mb-6 overflow-hidden border border-border-subtle">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-xs font-medium text-neutral-900 border border-border-subtle shadow-sm">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="text-sm text-neutral-500 mb-3">{article.date}</div>
                                <h3 className="text-xl font-serif text-neutral-900 group-hover:text-neutral-600 transition-colors mb-3 leading-snug">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                                    {article.excerpt}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </main>
    );
}
