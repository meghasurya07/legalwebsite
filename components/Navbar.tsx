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
            { label: 'Overview', href: '/product/overview', description: 'A unified view of how Wesley works together' },
            { label: 'Assistant', href: '/product/assistant', description: 'Ask questions, analyze documents, and draft legal work' },
            { label: 'Documents', href: '/product/documents', description: 'Organize, search, and reason over thousands of files' },
            { label: 'Workflows', href: '/product/workflows', description: 'Run pre-built legal workflows or build your own' },
        ]
    },
    {
        href: '#',
        label: 'Solutions',
        hasDropdown: true,
        subItems: [
            { label: 'Law Firms', href: '/solutions/law-firms', description: 'Scale your practice without scaling headcount' },
            { label: 'In-House Teams', href: '/solutions/in-house-teams', description: 'Do more with less. Advise with confidence.' },
            { label: 'Litigation', href: '/solutions/litigation', description: 'Win more cases with deeper analysis' },
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
        className={`text-[13px] font-medium transition-colors cursor-pointer ${className}`}
    >
        Login
    </Link>
);

const NewsMegaMenu = ({ onClose, isHomePage }: { onClose: () => void; isHomePage: boolean }) => {
    const bg = isHomePage ? 'bg-[#0a0a0a] border-b border-white/10' : 'bg-white border-b border-neutral-200';
    const borderCol = isHomePage ? 'border-white/10' : 'border-neutral-200';
    const heading = isHomePage ? 'text-neutral-300 group-hover:text-white' : 'text-neutral-700 group-hover:text-neutral-900';
    const sub = isHomePage ? 'text-neutral-400' : 'text-neutral-500';
    const card = isHomePage ? 'text-neutral-300 group-hover:text-white' : 'text-neutral-700 group-hover:text-neutral-900';
    const cardBg = isHomePage ? 'bg-white/5 border-white/10' : 'bg-neutral-100 border-neutral-200';
    const viewAll = isHomePage ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900';
    const arrowCol = isHomePage ? 'text-neutral-400' : 'text-neutral-400';

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-[64px] left-0 w-full shadow-2xl z-30 font-sans ${bg}`}
            onMouseLeave={onClose}
        >
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-12">
                <div className={`col-span-3 space-y-8 border-r ${borderCol} pr-8`}>
                    <div className="group">
                        <Link href="/blog" className="block" onClick={onClose}>
                            <h3 className={`text-lg font-medium mb-2 flex items-center gap-2 transition-colors ${heading}`}>
                                Blog <ArrowRight size={16} className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${arrowCol}`} />
                            </h3>
                            <p className={`text-sm leading-relaxed ${sub}`}>Articles, insights, and updates from the Wesley team.</p>
                        </Link>
                    </div>
                    <div className="group">
                        <Link href="/newsroom" className="block" onClick={onClose}>
                            <h3 className={`text-lg font-medium mb-2 flex items-center gap-2 transition-colors ${heading}`}>
                                Newsroom <ArrowRight size={16} className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${arrowCol}`} />
                            </h3>
                            <p className={`text-sm leading-relaxed ${sub}`}>Press releases, announcements, and media resources.</p>
                        </Link>
                    </div>
                </div>

                <div className="col-span-9">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Latest Updates</span>
                        <Link href="/blog" className={`text-sm font-medium transition-colors ${viewAll}`} onClick={onClose}>
                            View all
                        </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <Link href="/blog" className="group block" onClick={onClose}>
                            <div className={`relative aspect-video rounded-sm mb-4 overflow-hidden border ${cardBg}`}>
                                <Image src="/assets/blog1.png" alt="Legal Tech Trends" fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                            </div>
                            <span className="text-xs text-neutral-500 font-medium mb-2 block uppercase tracking-wide">Insights</span>
                            <h4 className={`text-base font-medium transition-colors line-clamp-2 ${card}`}>The Future of Legal Tech: AI-Driven Workflows</h4>
                        </Link>
                        <Link href="/blog" className="group block" onClick={onClose}>
                            <div className={`relative aspect-video rounded-sm mb-4 overflow-hidden border ${cardBg}`}>
                                <Image src="/assets/blog2.png" alt="Platform Update" fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                            </div>
                            <span className="text-xs text-neutral-500 font-medium mb-2 block uppercase tracking-wide">Product</span>
                            <h4 className={`text-base font-medium transition-colors line-clamp-2 ${card}`}>Introducing Advanced Contract Analysis 2.0</h4>
                        </Link>
                        <Link href="/blog" className="group block" onClick={onClose}>
                            <div className={`relative aspect-video rounded-sm mb-4 overflow-hidden border ${cardBg}`}>
                                <Image src="/assets/blog3.png" alt="Partnership" fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                            </div>
                            <span className="text-xs text-neutral-500 font-medium mb-2 block uppercase tracking-wide">News</span>
                            <h4 className={`text-base font-medium transition-colors line-clamp-2 ${card}`}>Wesley Partners with Global Top 100 Firm</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProductMegaMenu = ({ onClose, isHomePage }: { onClose: () => void; isHomePage: boolean }) => {
    const productLinks = NAV_LINKS.find(link => link.label === 'Product')?.subItems || [];
    const bg = isHomePage ? 'bg-[#0a0a0a] border-b border-white/10' : 'bg-white border-b border-neutral-200';
    const borderCol = isHomePage ? 'border-white/10' : 'border-neutral-200';
    const heading = isHomePage ? 'text-neutral-300 group-hover:text-white' : 'text-neutral-700 group-hover:text-neutral-900';
    const sub = isHomePage ? 'text-neutral-400 group-hover:text-neutral-300' : 'text-neutral-500 group-hover:text-neutral-700';
    const featTitle = isHomePage ? 'text-white' : 'text-neutral-900';
    const featSub = isHomePage ? 'text-neutral-400' : 'text-neutral-500';
    const previewBg = isHomePage ? 'bg-white/5 border-white/10' : 'bg-neutral-100 border-neutral-200';
    const previewText = isHomePage ? 'border-white/20 bg-white/5 text-neutral-300' : 'border-neutral-300 bg-neutral-50 text-neutral-500';
    const badgeStyle = isHomePage ? 'bg-white/10 text-neutral-300 border-white/10' : 'bg-neutral-100 text-neutral-500 border-neutral-200';

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-[64px] left-0 w-full shadow-2xl z-30 font-sans ${bg}`}
            onMouseLeave={onClose}
        >
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-12">
                <div className="col-span-5 flex flex-col gap-6">
                    {productLinks.map((item) => (
                        <Link key={item.label} href={item.href} className="group block" onClick={onClose}>
                            <h3 className={`text-[15px] font-medium mb-1 flex items-center gap-2 ${heading}`}>
                                {item.label}
                                {item.badge && (
                                    <span className={`text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider border ${badgeStyle}`}>{item.badge}</span>
                                )}
                            </h3>
                            <p className={`text-sm transition-colors line-clamp-1 ${sub}`}>{item.description}</p>
                        </Link>
                    ))}
                </div>
                <div className={`col-span-7 pl-8 border-l ${borderCol}`}>
                    <div className="h-full flex flex-col justify-center">
                        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Featured Module</span>
                        <h3 className={`text-2xl font-serif mb-3 ${featTitle}`}>Custom Workflows</h3>
                        <p className={`mb-6 max-w-lg text-sm leading-relaxed ${featSub}`}>Design and deploy workflows that capture your firm&apos;s differentiators and deliver high-quality legal work at scale.</p>
                        <div className={`relative w-full aspect-[16/9] rounded-sm overflow-hidden border group cursor-pointer ${previewBg}`}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className={`font-medium text-sm border backdrop-blur-sm px-4 py-2 rounded-sm shadow-sm font-sans ${previewText}`}>Preview</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const SolutionsMegaMenu = ({ onClose, isHomePage }: { onClose: () => void; isHomePage: boolean }) => {
    const solutionsLinks = NAV_LINKS.find(link => link.label === 'Solutions')?.subItems || [];
    const bg = isHomePage ? 'bg-[#0a0a0a] border-b border-white/10' : 'bg-white border-b border-neutral-200';
    const borderCol = isHomePage ? 'border-white/10' : 'border-neutral-200';
    const heading = isHomePage ? 'text-neutral-300 group-hover:text-white' : 'text-neutral-700 group-hover:text-neutral-900';
    const sub = isHomePage ? 'text-neutral-400 group-hover:text-neutral-300' : 'text-neutral-500 group-hover:text-neutral-700';
    const featTitle = isHomePage ? 'text-white' : 'text-neutral-900';
    const featSub = isHomePage ? 'text-neutral-400' : 'text-neutral-500';
    const previewBg = isHomePage ? 'bg-white/5 border-white/10' : 'bg-neutral-100 border-neutral-200';
    const previewText = isHomePage ? 'border-white/20 bg-white/5 text-neutral-300' : 'border-neutral-300 bg-neutral-50 text-neutral-500';

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-[64px] left-0 w-full shadow-2xl z-30 font-sans ${bg}`}
            onMouseLeave={onClose}
        >
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-12 gap-12">
                <div className="col-span-5 flex flex-col gap-6">
                    {solutionsLinks.map((item) => (
                        <Link key={item.label} href={item.href} className="group block" onClick={onClose}>
                            <h3 className={`text-[15px] font-medium mb-1 flex items-center gap-2 ${heading}`}>{item.label}</h3>
                            <p className={`text-sm transition-colors line-clamp-1 ${sub}`}>{item.description}</p>
                        </Link>
                    ))}
                </div>
                <div className={`col-span-7 pl-8 border-l ${borderCol}`}>
                    <div className="h-full flex flex-col justify-center">
                        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Featured Solution</span>
                        <h3 className={`text-2xl font-serif mb-3 ${featTitle}`}>Litigation Strategy</h3>
                        <p className={`mb-6 max-w-lg text-sm leading-relaxed ${featSub}`}>Discover how our AI-driven workflows can give you the winning edge in complex litigation cases by uncovering hidden risk and precedent.</p>
                        <div className={`relative w-full aspect-[16/9] rounded-sm overflow-hidden border group cursor-pointer ${previewBg}`}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className={`font-medium text-sm border backdrop-blur-sm px-4 py-2 rounded-sm shadow-sm font-sans ${previewText}`}>Preview</span>
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isNewsOpen, setIsNewsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

    const isDropdownOpen = isNewsOpen || isProductOpen || isSolutionsOpen;
    const isLinkHovered = hoveredIndex !== null || isDropdownOpen;

    // On homepage: transparent by default, dark on hover/dropdown
    // On all other pages: always white background
    const isDarkNav = isHomePage && isLinkHovered;
    const navThemeClass = isHomePage
        ? (isDarkNav ? 'bg-[#0a0a0a] text-white shadow-sm border-b border-white/10' : 'bg-transparent text-white')
        : 'bg-white text-neutral-900 shadow-sm border-b border-neutral-200';

    const getLinkClass = (index: number, isOpen: boolean) => {
        const isHovered = hoveredIndex === index;
        const isActive = isHovered || isOpen;
        const isAnyHovered = hoveredIndex !== null || isDropdownOpen;

        if (isHomePage) {
            // Homepage: white text logic (dark nav)
            if (isActive) return 'text-white';
            if (isAnyHovered) return 'text-neutral-500 hover:text-white';
            return 'text-white/80 hover:text-white';
        } else {
            // Inner pages: dark text on white nav
            if (isActive) return 'text-neutral-900';
            if (isAnyHovered) return 'text-neutral-400 hover:text-neutral-900';
            return 'text-neutral-600 hover:text-neutral-900';
        }
    };

    return (
        <nav
            className={`fixed top-0 z-40 w-full transition-all duration-300 font-sans ${navThemeClass}`}
            onMouseLeave={() => {
                setHoveredIndex(null);
                setIsNewsOpen(false);
                setIsProductOpen(false);
                setIsSolutionsOpen(false);
            }}
        >
            <div className="relative flex h-16 w-full items-center justify-between px-6 md:px-8 max-w-[1400px] mx-auto">
                {/* Logo */}
                <div className={`font-serif text-2xl tracking-tight z-50 transition-colors ${isHomePage ? 'text-white' : 'text-neutral-900'}`}>
                    <Link href="/" className="cursor-pointer">Wesley</Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden items-center space-x-8 md:flex">
                    {NAV_LINKS.map((link, index) => {
                        const isActive = link.label === 'News' ? isNewsOpen
                            : link.label === 'Product' ? isProductOpen
                                : link.label === 'Solutions' ? isSolutionsOpen
                                    : hoveredIndex === index;
                        const underlineColor = isHomePage ? 'bg-white' : 'bg-neutral-900';

                        return link.label === 'News' ? (
                            <div key={link.label} className="relative">
                                <button
                                    onMouseEnter={() => {
                                        setHoveredIndex(index);
                                        setIsNewsOpen(true);
                                        setIsProductOpen(false);
                                        setIsSolutionsOpen(false);
                                    }}
                                    className={`text-[13px] font-medium transition-colors duration-200 h-16 flex items-center gap-1.5 cursor-pointer ${getLinkClass(index, isNewsOpen)}`}
                                >
                                    {link.label}
                                    <ChevronDown
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isNewsOpen ? 'rotate-180' : ''} ${isHomePage ? (isNewsOpen ? 'text-white' : 'text-white/40') : (isNewsOpen ? 'text-neutral-900' : 'text-neutral-400')}`}
                                    />
                                </button>
                                <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${underlineColor} transition-transform duration-200 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                            </div>
                        ) : link.label === 'Product' ? (
                            <div key={link.label} className="relative">
                                <button
                                    onMouseEnter={() => {
                                        setHoveredIndex(index);
                                        setIsProductOpen(true);
                                        setIsNewsOpen(false);
                                        setIsSolutionsOpen(false);
                                    }}
                                    className={`text-[13px] font-medium transition-colors duration-200 h-16 flex items-center gap-1.5 cursor-pointer ${getLinkClass(index, isProductOpen)}`}
                                >
                                    {link.label}
                                    <ChevronDown
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isProductOpen ? 'rotate-180' : ''} ${isHomePage ? (isProductOpen ? 'text-white' : 'text-white/40') : (isProductOpen ? 'text-neutral-900' : 'text-neutral-400')}`}
                                    />
                                </button>
                                <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${underlineColor} transition-transform duration-200 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                            </div>
                        ) : link.label === 'Solutions' ? (
                            <div key={link.label} className="relative">
                                <button
                                    onMouseEnter={() => {
                                        setHoveredIndex(index);
                                        setIsSolutionsOpen(true);
                                        setIsProductOpen(false);
                                        setIsNewsOpen(false);
                                    }}
                                    className={`text-[13px] font-medium transition-colors duration-200 h-16 flex items-center gap-1.5 cursor-pointer ${getLinkClass(index, isSolutionsOpen)}`}
                                >
                                    {link.label}
                                    <ChevronDown
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''} ${isHomePage ? (isSolutionsOpen ? 'text-white' : 'text-white/40') : (isSolutionsOpen ? 'text-neutral-900' : 'text-neutral-400')}`}
                                    />
                                </button>
                                <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${underlineColor} transition-transform duration-200 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                            </div>
                        ) : (
                            <div key={link.label} className="relative">
                                <Link
                                    href={link.href}
                                    onMouseEnter={() => {
                                        setHoveredIndex(index);
                                        setIsNewsOpen(false);
                                        setIsProductOpen(false);
                                        setIsSolutionsOpen(false);
                                    }}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`text-[13px] font-medium transition-colors duration-200 flex items-center gap-1.5 h-16 cursor-pointer ${getLinkClass(index, false)}`}
                                >
                                    {link.label}
                                </Link>
                                <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${underlineColor} transition-transform duration-200 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                            </div>
                        );
                    })}
                </div>

                {/* Desktop Login & Mobile Burger */}
                <div className="flex items-center gap-4 z-50">
                    <div className="hidden md:block relative z-50">
                        <LoginLink className={isHomePage ? 'text-white/90 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'} />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden ${isHomePage ? 'text-white' : 'text-neutral-900'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Megamenus */}
            <AnimatePresence>
                {isNewsOpen && <NewsMegaMenu onClose={() => setIsNewsOpen(false)} isHomePage={isHomePage} />}
            </AnimatePresence>
            <AnimatePresence>
                {isProductOpen && <ProductMegaMenu onClose={() => setIsProductOpen(false)} isHomePage={isHomePage} />}
            </AnimatePresence>
            <AnimatePresence>
                {isSolutionsOpen && <SolutionsMegaMenu onClose={() => setIsSolutionsOpen(false)} isHomePage={isHomePage} />}
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

