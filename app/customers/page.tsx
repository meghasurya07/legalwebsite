import { Metadata } from "next";
import CustomersContent from "@/components/customers/CustomersContent";

export const metadata: Metadata = {
  title: "Customers",
  description: "See how the world's best legal teams at AmLaw 100 firms and enterprise legal teams use Wesley to drive productivity and innovation.",
  openGraph: {
    title: "Wesley Customers | Trusted by Global Legal Leaders",
    description: "Discover the quantifiable impact of legal AI across leading organizations.",
  }
};

export default function CustomersPage() {
  return <CustomersContent />;
}
