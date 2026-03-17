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
    default: "Wesley | The Legal AI Platform",
    template: "%s | Wesley"
  },
  description: "The new standard for legal work. AI-powered legal intelligence for modern teams. Draft, search, and reason over documents with partner-level precision.",
  keywords: ["Legal AI", "Legal Intelligence", "Wesley", "Ask Wesley", "AI for Lawyers", "Contract Analysis"],
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
    title: "Wesley | The Professional Class Legal AI",
    description: "The new standard for legal work. AI-powered legal intelligence for modern teams.",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or I should generate an asset
        width: 1200,
        height: 630,
        alt: "Wesley - Legal AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wesley | The Professional Class Legal AI",
    description: "The new standard for legal work. AI-powered legal intelligence for modern teams.",
    images: ["/og-image.png"],
    creator: "@wesley_ai",
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
