import { Metadata } from "next";
import LawFirmsContent from "@/components/solutions/LawFirmsContent";

export const metadata: Metadata = {
  title: "AI for Law Firms - Legal AI for Due Diligence, Drafting & Research",
  description: "Wesley helps law firms deliver partner-level work at associate speed. AI-powered due diligence, contract drafting, legal research, and document review for AmLaw 100 and boutique firms.",
  openGraph: {
    title: "Wesley for Law Firms | AI-Powered Legal Intelligence",
    description: "Scale your law firm with Wesley's AI platform. Automate due diligence, contract analysis, and legal research with enterprise-grade precision.",
  }
};

export default function LawFirmsPage() {
  return <LawFirmsContent />;
}
