'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-4 max-w-xs">
                        <div className="text-xl font-bold tracking-tight text-white font-sans">
                            COMPANY_NAME
                        </div>
                        <p className="text-sm text-neutral-500">
                            The new standard in legal intelligence. <br />
                            Analyze contracts, determine outcomes.
                        </p>
                    </div>

                    {/* Right-aligned Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:justify-self-end">
                        <LinkColumn
                            title="Product"
                            links={["Features", "Integrations", "Enterprise", "Changelog"]}
                        />
                        <LinkColumn
                            title="Company"
                            links={["About Us", "Careers", "Blog", "Contact"]}
                        />
                        <LinkColumn
                            title="Legal"
                            links={["Privacy Policy", "Terms of Service", "Security", "DPA"]}
                        />
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
                    <p>© 2025 COMPANY_NAME. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-neutral-200 transition-colors">
                            Twitter
                        </Link>
                        <Link href="#" className="hover:text-neutral-200 transition-colors">
                            LinkedIn
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

function LinkColumn({ title, links }: { title: string; links: string[] }) {
    return (
        <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white font-poppins">
                {title}
            </h4>
            <div className="flex flex-col space-y-3 group">
                {links.map((link) => (
                    <Link
                        key={link}
                        href="#"
                        className="text-sm text-neutral-500 transition-colors duration-300 hover:text-white hover:!opacity-100 group-hover:opacity-50"
                    >
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    );
}
