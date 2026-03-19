import { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Wesley - AI Legal Intelligence Company",
  description: "Wesley is a legal AI company redefining how law firms and corporate legal teams work. Built by legal tech experts, Wesley combines advanced AI with deep legal domain expertise.",
  openGraph: {
    title: "About Wesley | The Legal AI Platform for Modern Law Firms",
    description: "Learn how Wesley is building the future of legal intelligence with AI-powered tools for contract analysis, legal research, and document review.",
  }
};

export default function AboutPage() {
  return <AboutContent />;
}
