import DashPageWrapper from "@/app/dash/wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMG - Dashboard",
  description: "Card Matching Game @web2024-card",
};

const DashPage = () => {
  return <DashPageWrapper />;
};

export default DashPage;
