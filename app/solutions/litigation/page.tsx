import { Metadata } from "next";
import LitigationContent from "@/components/solutions/LitigationContent";

export const metadata: Metadata = {
  title: "AI for Litigation - Legal AI for Case Analysis & Strategy",
  description: "Wesley's litigation AI helps legal teams analyze deposition transcripts, research case law across jurisdictions, and build data-driven litigation strategy.",
  openGraph: {
    title: "Wesley for Litigation | AI-Powered Case Analysis",
    description: "Strengthen your litigation practice with Wesley's AI. Surface key testimony, analyze precedents, and build smarter legal strategy.",
  }
};

export default function LitigationPage() {
  return <LitigationContent />;
}
