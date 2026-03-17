import { Metadata } from "next";
import LitigationContent from "@/components/solutions/LitigationContent";

export const metadata: Metadata = {
  title: "AI for Litigation",
  description: "Win more cases with Wesley's legal AI. Analyze deposition transcripts, research case law, and build litigation strategy with deeper insights.",
  openGraph: {
    title: "Wesley for Litigation | Deeper Analysis, Smarter Strategy",
    description: "Empower your litigation team with analytical tools that surface key testimony and precedents instantly.",
  }
};

export default function LitigationPage() {
  return <LitigationContent />;
}
