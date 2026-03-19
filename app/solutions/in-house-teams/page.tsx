import { Metadata } from "next";
import InHouseTeamsContent from "@/components/solutions/InHouseTeamsContent";

export const metadata: Metadata = {
  title: "AI for In-House Legal Teams - Corporate Legal AI Platform",
  description: "Wesley helps in-house legal teams reduce outside counsel spend, automate contract review, and streamline legal intake with enterprise-grade AI.",
  openGraph: {
    title: "Wesley for In-House Legal | Corporate Legal AI Platform",
    description: "Empower your corporate legal department with Wesley's AI. Reduce costs, speed up contract review, and automate routine legal workflows.",
  }
};

export default function InHouseTeamsPage() {
  return <InHouseTeamsContent />;
}
