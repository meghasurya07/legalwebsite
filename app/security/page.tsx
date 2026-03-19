import { Metadata } from "next";
import SecurityContent from "@/components/security/SecurityContent";

export const metadata: Metadata = {
  title: "Security & Privacy - Enterprise-Grade Legal AI Security",
  description: "Wesley provides enterprise-grade security for legal AI. SOC 2 compliant, zero-training guarantee, AES-256 encryption, and strict data residency controls in the US, EU, and Australia.",
  openGraph: {
    title: "Wesley Security | Enterprise-Grade Legal AI Data Protection",
    description: "Your legal data is protected by Wesley's zero-training guarantee, SOC 2 compliance, and strict data residency controls.",
  }
};

export default function SecurityPage() {
  return <SecurityContent />;
}
