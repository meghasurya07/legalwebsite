import { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Wesley's mission to redefine legal intelligence by bridging law and technology with advanced AI.",
  openGraph: {
    title: "About Wesley | Redefining Legal Intelligence",
    description: "Empowering legal professionals with next-generation AI to unlock unprecedented efficiency.",
  }
};

export default function AboutPage() {
  return <AboutContent />;
}
