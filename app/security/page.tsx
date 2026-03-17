import { Metadata } from "next";
import SecurityContent from "@/components/security/SecurityContent";

export const metadata: Metadata = {
  title: "Security & Privacy",
  description: "Enterprise-grade legal AI security. Zero-training guarantee, SOC 2 compliance, and strict data residency controls (US, EU, Australia).",
  openGraph: {
    title: "Wesley Security | Uncompromising Data Protection",
    description: "Learn how we secure your most sensitive legal matters with encryption and zero-training guarantees.",
  }
};

export default function SecurityPage() {
  return <SecurityContent />;
}
