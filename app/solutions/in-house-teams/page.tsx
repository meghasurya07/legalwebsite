import { Metadata } from "next";
import InHouseTeamsContent from "@/components/solutions/InHouseTeamsContent";

export const metadata: Metadata = {
  title: "AI for In-House Legal Teams",
  description: "Accelerate your legal department with Wesley. Reduce outside counsel spend, speed up contract review, and automate routine legal intake.",
  openGraph: {
    title: "Wesley for In-House Teams | Efficiency for Legal Departments",
    description: "Empower your corporate legal team to do more with less through advanced legal AI solutions.",
  }
};

export default function InHouseTeamsPage() {
  return <InHouseTeamsContent />;
}
