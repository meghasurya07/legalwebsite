'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-neutral-200 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-4 max-w-xs shrink-0">
                        <div className="text-2xl font-serif text-neutral-900 mb-6">
                            Wesley
                        </div>
                        <p className="text-sm text-neutral-500 leading-relaxed">
                            The new standard in legal intelligence. <br />
                            Analyze contracts, determine outcomes.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-16">
                        <LinkColumn
                            title="Product"
                            links={[
                                { label: "Overview", href: "/product/overview" },
                                { label: "Assistant", href: "/product/assistant" },
                                { label: "Documents", href: "/product/documents" },
                                { label: "Workflows", href: "/product/workflows" },
                            ]}
                        />
                        <LinkColumn
                            title="Solutions"
                            links={[
                                { label: "Law Firms", href: "/solutions/law-firms" },
                                { label: "In-House Teams", href: "/solutions/in-house-teams" },
                                { label: "Litigation", href: "/solutions/litigation" },
                            ]}
                        />
                        <LinkColumn
                            title="Company"
                            links={[
                                { label: "About", href: "/about" },
                                { label: "Blog", href: "/blog" },
                                { label: "Newsroom", href: "/newsroom" },
                                { label: "Customers", href: "/customers" },
                                { label: "Security", href: "/security" },
                            ]}
                        />
                        <LinkColumn
                            title="Legal"
                            links={[
                                { label: "Privacy Policy", href: "/legal/privacy-policy" },
                            ]}
                        />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 font-medium">
                    <p>© 2026 Wesley. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex gap-6">
                        <Link href="https://linkedin.com/company/askwesley" target="_blank" className="hover:text-neutral-900 transition-colors">LinkedIn</Link>
                        <Link href="https://twitter.com/askwesleydotcom" target="_blank" className="hover:text-neutral-900 transition-colors">Twitter / X</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
    return (
        <div className="space-y-5">
            <h4 className="text-[13px] font-semibold text-neutral-900 font-sans tracking-wide">
                {title}
            </h4>
            <div className="flex flex-col space-y-3.5">
                {links.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        className="text-[13px] text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
