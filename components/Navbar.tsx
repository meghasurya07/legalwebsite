'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
    { href: '#', label: 'Product' },
    { href: '#', label: 'Customers' },
    { href: '/security', label: 'Security' },
    { href: '#', label: 'About' },
];

export default function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-40 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800 transition-all font-poppins font-sans">
            <div className="relative flex h-16 w-full items-center justify-between px-6 md:px-8">
                {/* Logo */}
                <div className="text-xl font-bold tracking-tight text-white font-sans z-50">
                    <Link href="/">COMPANY_NAME</Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden items-center space-x-8 md:flex">
                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`text-sm font-medium transition-colors duration-300 font-poppins
                ${hoveredIndex !== null && hoveredIndex !== index ? 'text-neutral-600' : 'text-neutral-400 hover:text-white'}
                ${hoveredIndex === index ? 'text-white' : ''}
              `}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Login & Mobile Burger */}
                <div className="flex items-center gap-4 z-50">
                    <div className="hidden md:block">
                        <Link
                            href="#"
                            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200 font-poppins"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 left-0 w-full bg-black border-b border-neutral-800 md:hidden flex flex-col items-center py-8 space-y-6"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-lg font-medium text-neutral-400 hover:text-white transition-colors font-poppins"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#"
                            className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200 font-poppins mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Login
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
