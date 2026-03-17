import { Metadata } from "next";
import LawFirmsContent from "@/components/solutions/LawFirmsContent";

export const metadata: Metadata = {
  title: "AI for Law Firms",
  description: "Scale your practice with Wesley's legal AI. Partner-level work at associate speed for due diligence, drafting, and research.",
  openGraph: {
    title: "Wesley for Law Firms | Scale Your Practice",
    description: "Empower your associates with next-generation AI tools designed for AmLaw 100 and boutique firms.",
  }
};

export default function LawFirmsPage() {
  return <LawFirmsContent />;
}
