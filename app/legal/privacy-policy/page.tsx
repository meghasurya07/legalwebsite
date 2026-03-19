import { Metadata } from "next";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Wesley Legal AI Platform",
  description: "Wesley's Privacy Policy describes how we collect, use, and protect your personal data. Learn about our zero-training guarantee and data protection commitments.",
  openGraph: {
    title: "Privacy Policy | Wesley - Legal AI Platform",
    description: "Read Wesley's Privacy Policy to understand how we handle your data with enterprise-grade security and privacy.",
  }
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
