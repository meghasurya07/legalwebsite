import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import StructuredData from "@/components/SEO/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.askwesley.com'),
  title: {
    default: "Wesley | AI-Powered Legal Intelligence Platform",
    template: "%s | Wesley - Legal AI Platform"
  },
  description: "Wesley is the AI-powered legal intelligence platform for law firms and corporate legal teams. Draft contracts, conduct legal research, and analyze documents with partner-level precision. Trusted by AmLaw 100 firms.",
  keywords: [
    "Wesley", "Ask Wesley", "Wesley AI", "Wesley legal AI",
    "legal AI", "legal AI platform", "AI for lawyers", "AI for law firms",
    "AI contract analysis", "AI legal research", "AI document review",
    "legal intelligence", "generative AI for legal", "legal AI software",
    "AI contract drafting", "legal document automation",
    "legal tech AI", "enterprise legal AI", "AI due diligence",
    "corporate legal AI", "in-house legal AI", "litigation AI",
    "legal workflow automation", "AI legal assistant"
  ],
  authors: [{ name: "Wesley Team" }],
  creator: "Wesley",
  publisher: "Wesley",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.askwesley.com",
    siteName: "Wesley",
    title: "Wesley | AI-Powered Legal Intelligence Platform",
    description: "Wesley is the AI legal platform trusted by leading law firms. Draft contracts, research case law, and review documents with AI precision.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wesley - AI-Powered Legal Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wesley | AI-Powered Legal Intelligence Platform",
    description: "Wesley is the AI legal platform trusted by leading law firms. Draft contracts, research case law, and review documents with AI precision.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: 'https://www.askwesley.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${playfair.variable} antialiased selection:bg-neutral-200 selection:text-black`}
      >
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
