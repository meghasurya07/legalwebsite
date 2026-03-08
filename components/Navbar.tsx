'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

type NavItem = {
    href: string;
    label: string;
    hasDropdown?: boolean;
    subItems?: {
        label: string;
        href: string;
        description?: string;
        badge?: string;
    }[];
};

const NAV_LINKS: NavItem[] = [
    {
        href: '#',
        label: 'Product',
        hasDropdown: true,
        subItems: [
            { label: 'Overview', href: '/product/overview', description: 'The AI workspace for legal work' },
            { label: 'Assistant', href: '/product/assistant', description: 'Ask questions, analyze documents, draft legal work' },
            { label: 'Case Workspace', href: '/product/case-workspace', description: 'AI chats scoped to individual matters' },
            { label: 'Document Intelligence', href: '/product/document-intelligence', description: 'Upload, search, and reason over legal documents' },
            { label: 'Legal Research', href: '/product/legal-research', description: 'Grounded answers from trusted legal sources' },
            { label: 'Portal', href: '/product/portal', description: 'Client-facing access to insights and deliverables' },
            { label: 'Workflows', href: '/product/workflows', description: 'Automate repeatable legal tasks', badge: 'Coming soon' },
        ]
    },
    {
        href: '#',
        label: 'Solutions',
        hasDropdown: true,
        subItems: [
            { label: 'Law Firms', href: '/solutions/law-firms', description: 'Partner-level insights for firm-wide value' },
            { label: 'In-House Legal Teams', href: '/solutions/in-house-teams', description: 'Reduce risk and reliance on outside counsel' },
            { label: 'Transactional Work', href: '/solutions/transactional-work', description: 'Accelerate deals without compromising details' },
            { label: 'Litigation', href: '/solutions/litigation', description: 'Strategy-first workflows to win more cases' },
            { label: 'M&A & Due Diligence', href: '/solutions/ma-due-diligence', description: 'High-stakes analysis for critical deals' },
        ]
    },
    { href: '/customers', label: 'Customers' },
    { href: '/security', label: 'Security' },
    {
        href: '#',
        label: 'News',
        hasDropdown: true,
        subItems: [
            { label: 'Blog', href: '/blog' },
            { label: 'Newsroom', href: '/newsroom' },
        ]
    },
    { href: '/about', label: 'About' },
];

// Simplified Login Link
const LoginLink = ({ className }: { className?: string }) => (
    <Link
        href="/login"
        className={`text-[13px] font-medium transition-colors hover:text-black cursor-pointer ${className}`}
    >
        Login
    </Link>
);

const NewsMegaMenu = ({ onClose }: { onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[64px] left-0 w-full bg-white border-b border-neutral-200 shadow-xl shadow-neutral-200/20 z-30 font-sans"
            onMouseLeave={onClose}
        >
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-12">
                {/* Left Column: Navigation */}
                <div className="col-span-3 space-y-8 border-r border-neutral-100 pr-8">
                    <div className="group">
                        <Link href="/blog" className="block" onClick={onClose}>
                            <h3 className="text-lg font-medium text-neutral-900 mb-2 flex items-center gap-2 group-hover:text-black transition-colors">
                                Blog <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-neutral-400" />
                            </h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">Articles, insights, and updates from the Wesley team.</p>
                        </Link>
                    </div>
                    <div className="group">
                        <Link href="/newsroom" className="block" onClick={onClose}>
                            <h3 className="text-lg font-medium text-neutral-900 mb-2 flex items-center gap-2 group-hover:text-black transition-colors">
                                Newsroom <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-neutral-400" />
                            </h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">Press releases, announcements, and media resources.</p>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Latest Articles */}
                <div className="col-span-9">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Latest Updates</span>
                        <Link href="/blog" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" onClick={onClose}>
                            View all
                        </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        {/* Article 1 */}
                        <Link href="/blog" className="group block" onClick={onClose}>
                            <div className="relative aspect-video bg-neutral-100 rounded-sm mb-4 overflow-hidden border border-neutral-200">
                                <Image
                                    src="/assets/blog1.png"
                                    alt="Legal Tech Trends"
                                    fill
                                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                            <span className="text-xs text-neutral-500 font-medium mb-2 block uppercase tracking-wide">Insights</span>
                            <h4 className="text-base font-medium text-neutral-900 group-hover:text-black transition-colors line-clamp-2">
                                The Future of Legal Tech: AI-Driven Workflows
                            </h4>
                        </Link>

                        {/* Article 2 */}
                        <Link href="/blog" className="group block" onClick={onClose}>
                            <div className="relative aspect-video bg-neutral-100 rounded-sm mb-4 overflow-hidden border border-neutral-200">
                                <Image
                                    src="/assets/blog2.png"
                                    alt="Platform Update"
                                    fill
                                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                            <span className="text-xs text-neutral-500 font-medium mb-2 block uppercase tracking-wide">Product</span>
                            <h4 className="text-base font-medium text-neutral-900 group-hover:text-black transition-colors line-clamp-2">
                                Introducing Advanced Contract Analysis 2.0
                            </h4>
                        </Link>

                        {/* Article 3 */}
                        <Link href="/blog" className="group block" onClick={onClose}>
                            <div className="relative aspect-video bg-neutral-100 rounded-sm mb-4 overflow-hidden border border-neutral-200">
                                <Image
                                    src="/assets/blog3.png"
                                    alt="Partnership"
                                    fill
                                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                            <span className="text-xs text-neutral-500 font-medium mb-2 block uppercase tracking-wide">News</span>
                            <h4 className="text-base font-medium text-neutral-900 group-hover:text-black transition-colors line-clamp-2">
                                Wesley Partners with Global Top 100 Firm
                            </h4>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProductMegaMenu = ({ onClose }: { onClose: () => void }) => {
    const productLinks = NAV_LINKS.find(link => link.label === 'Product')?.subItems || [];

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[64px] left-0 w-full bg-white border-b border-neutral-200 shadow-xl shadow-neutral-200/20 z-30 font-sans"
            onMouseLeave={onClose}
        >
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-12">
                {/* Left Column: Product List */}
                <div className="col-span-5 flex flex-col gap-6">
                    {productLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="group block"
                            onClick={onClose}
                        >
                            <h3 className="text-[15px] font-medium text-neutral-900 mb-1 flex items-center gap-2">
                                {item.label}
                                {item.badge && (
                                    <span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-sm uppercase tracking-wider border border-neutral-200">
                                        {item.badge}
                                    </span>
                                )}
                            </h3>
                            <p className="text-sm text-neutral-500 group-hover:text-neutral-700 transition-colors line-clamp-1">
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Right Column: Featured Feature */}
                <div className="col-span-7 pl-8 border-l border-neutral-100">
                    <div className="h-full flex flex-col justify-center">
                        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Featured Module</span>
                        <h3 className="text-2xl font-serif text-neutral-900 mb-3">Custom Workflows</h3>
                        <p className="text-neutral-500 mb-6 max-w-lg text-sm leading-relaxed">
                            Design and deploy workflows that capture your firm&apos;s differentiators and deliver high-quality legal work at scale.
                        </p>
                        <div className="relative w-full aspect-[16/9] bg-neutral-50 rounded-sm overflow-hidden border border-neutral-200 group cursor-pointer">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-neutral-400 font-medium text-sm border border-neutral-200 bg-white px-4 py-2 rounded-sm shadow-sm font-sans">Preview</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SolutionsMegaMenu = ({ onClose }: { onClose: () => void }) => {
    const solutionsLinks = NAV_LINKS.find(link => link.label === 'Solutions')?.subItems || [];

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[64px] left-0 w-full bg-white border-b border-neutral-200 shadow-xl shadow-neutral-200/20 z-30 font-sans"
            onMouseLeave={onClose}
        >
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-12">
                {/* Left Column: Solutions List */}
                <div className="col-span-5 flex flex-col gap-6">
                    {solutionsLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="group block"
                            onClick={onClose}
                        >
                            <h3 className="text-[15px] font-medium text-neutral-900 mb-1 flex items-center gap-2">
                                {item.label}
                            </h3>
                            <p className="text-sm text-neutral-500 group-hover:text-neutral-700 transition-colors line-clamp-1">
                                {item.description}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Right Column: Featured Solution */}
                <div className="col-span-7 pl-8 border-l border-neutral-100">
                    <div className="h-full flex flex-col justify-center">
                        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">Featured Solution</span>
                        <h3 className="text-2xl font-serif text-neutral-900 mb-3">Litigation Strategy</h3>
                        <p className="text-neutral-500 mb-6 max-w-lg text-sm leading-relaxed">
                            Discover how our AI-driven workflows can give you the winning edge in complex litigation cases by uncovering hidden risk and precedent.
                        </p>
                        <div className="relative w-full aspect-[16/9] bg-neutral-50 rounded-sm overflow-hidden border border-neutral-200 group cursor-pointer">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-neutral-400 font-medium text-sm border border-neutral-200 bg-white px-4 py-2 rounded-sm shadow-sm font-sans">Preview</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNewsOpen, setIsNewsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

    const isSolidTheme = !isHomePage || isNavHovered;

    const navThemeClass = isSolidTheme ? 'bg-white text-neutral-900 shadow-sm border-b border-neutral-200' : 'bg-transparent text-white';
    const linkThemeClass = isSolidTheme ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/80 hover:text-white';
    const inactiveLinkClass = isSolidTheme ? 'text-neutral-400' : 'text-white/40';

    return (
        <nav
            className={`fixed top-0 z-40 w-full transition-all duration-300 font-sans ${navThemeClass}`}
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => {
                setIsNavHovered(false);
                setIsNewsOpen(false);
                setIsProductOpen(false);
                setIsSolutionsOpen(false);
            }}
        >
            <div className="relative flex h-16 w-full items-center justify-between px-6 md:px-8 max-w-[1400px] mx-auto">
                {/* Logo */}
                <div className={`text-base font-semibold tracking-tight z-50 transition-colors ${isSolidTheme ? 'text-neutral-900' : 'text-white'}`}>
                    <Link href="/" className="cursor-pointer">Wesley</Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden items-center space-x-8 md:flex">
                    {NAV_LINKS.map((link, index) => (
                        link.label === 'News' ? (
                            <button
                                key={link.label}
                                onMouseEnter={() => {
                                    setHoveredIndex(index);
                                    setIsNewsOpen(true);
                                    setIsProductOpen(false);
                                    setIsSolutionsOpen(false);
                                }}
                                className={`text-[13px] font-medium transition-colors duration-200 h-16 flex items-center gap-1.5 cursor-pointer
                                    ${(hoveredIndex !== null && hoveredIndex !== index && !isNewsOpen) ? inactiveLinkClass : linkThemeClass}
                                    ${hoveredIndex === index || isNewsOpen ? (isSolidTheme ? 'text-neutral-900' : 'text-white') : ''}
                                `}
                            >
                                {link.label}
                                <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isNewsOpen ? 'rotate-180' : ''} ${isSolidTheme ? 'text-neutral-900' : (isNewsOpen ? 'text-white' : 'text-white/40')}`}
                                />
                            </button>
                        ) : link.label === 'Product' ? (
                            <button
                                key={link.label}
                                onMouseEnter={() => {
                                    setHoveredIndex(index);
                                    setIsProductOpen(true);
                                    setIsNewsOpen(false);
                                    setIsSolutionsOpen(false);
                                }}
                                className={`text-[13px] font-medium transition-colors duration-200 h-16 flex items-center gap-1.5 cursor-pointer
                                    ${(hoveredIndex !== null && hoveredIndex !== index && !isProductOpen) ? inactiveLinkClass : linkThemeClass}
                                    ${hoveredIndex === index || isProductOpen ? (isSolidTheme ? 'text-neutral-900' : 'text-white') : ''}
                                `}
                            >
                                {link.label}
                                <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductOpen ? 'rotate-180' : ''} ${isSolidTheme ? 'text-neutral-900' : (isProductOpen ? 'text-white' : 'text-white/40')}`}
                                />
                            </button>
                        ) : link.label === 'Solutions' ? (
                            <button
                                key={link.label}
                                onMouseEnter={() => {
                                    setHoveredIndex(index);
                                    setIsSolutionsOpen(true);
                                    setIsProductOpen(false);
                                    setIsNewsOpen(false);
                                }}
                                className={`text-[13px] font-medium transition-colors duration-200 h-16 flex items-center gap-1.5 cursor-pointer
                                    ${(hoveredIndex !== null && hoveredIndex !== index && !isSolutionsOpen) ? inactiveLinkClass : linkThemeClass}
                                    ${hoveredIndex === index || isSolutionsOpen ? (isSolidTheme ? 'text-neutral-900' : 'text-white') : ''}
                                `}
                            >
                                {link.label}
                                <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''} ${isSolidTheme ? 'text-neutral-900' : (isSolutionsOpen ? 'text-white' : 'text-white/40')}`}
                                />
                            </button>
                        ) : (
                            <Link
                                key={link.label}
                                href={link.href}
                                onMouseEnter={() => {
                                    setHoveredIndex(index);
                                    setIsNewsOpen(false);
                                    setIsProductOpen(false);
                                    setIsSolutionsOpen(false);
                                }}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`text-[13px] font-medium transition-colors duration-200 flex items-center gap-1.5 h-16 cursor-pointer
                                    ${hoveredIndex !== null && hoveredIndex !== index ? inactiveLinkClass : linkThemeClass}
                                    ${hoveredIndex === index ? (isSolidTheme ? 'text-neutral-900' : 'text-white') : ''}
                                `}
                            >
                                {link.label}
                            </Link>
                        )
                    ))}
                </div>

                {/* Desktop Login & Mobile Burger */}
                <div className="flex items-center gap-4 z-50">
                    <div className="hidden md:block relative z-50">
                        <LoginLink className={isSolidTheme ? 'text-neutral-900 hover:text-black' : 'text-white/90 hover:text-white'} />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-neutral-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Megamenus */}
            <AnimatePresence>
                {isNewsOpen && <NewsMegaMenu onClose={() => setIsNewsOpen(false)} />}
            </AnimatePresence>
            <AnimatePresence>
                {isProductOpen && <ProductMegaMenu onClose={() => setIsProductOpen(false)} />}
            </AnimatePresence>
            <AnimatePresence>
                {isSolutionsOpen && <SolutionsMegaMenu onClose={() => setIsSolutionsOpen(false)} />}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-16 left-0 w-full h-[calc(100vh-64px)] bg-white border-b border-neutral-200 md:hidden flex flex-col overflow-y-auto z-40"
                    >
                        <div className="flex-1 py-8 px-6 space-y-6">
                            {NAV_LINKS.map((link, index) => (
                                <div key={link.label} className="w-full border-b border-neutral-100 pb-4 last:border-0">
                                    {link.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={() => setMobileExpandedIndex(mobileExpandedIndex === index ? null : index)}
                                                className="w-full flex items-center justify-between text-xl font-medium text-neutral-900 transition-colors font-serif"
                                            >
                                                {link.label}
                                                <ChevronDown
                                                    className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${mobileExpandedIndex === index ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {mobileExpandedIndex === index && link.subItems && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden flex flex-col space-y-4 pt-4"
                                                    >
                                                        {link.subItems.map((subLink) => (
                                                            <Link
                                                                key={subLink.label}
                                                                href={subLink.href}
                                                                className="block pl-2"
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                            >
                                                                <div className="text-sm font-medium text-neutral-700 mb-0.5">
                                                                    {subLink.label}
                                                                </div>
                                                                {subLink.description && (
                                                                    <div className="text-xs text-neutral-400 line-clamp-1">
                                                                        {subLink.description}
                                                                    </div>
                                                                )}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-xl font-medium text-neutral-900 transition-colors font-serif block"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Footer Actions */}
                        <div className="p-6 border-t border-neutral-200 bg-neutral-50/50">
                            <Link href="/request-demo" className="w-full flex items-center justify-center gap-2 rounded-sm bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-black mb-6 shadow-sm cursor-pointer">
                                Request a Demo
                            </Link>
                            <div className="flex items-center justify-between">
                                <span className="text-neutral-500 text-sm font-medium">Existing user?</span>
                                <LoginLink className="text-neutral-900 font-semibold" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
