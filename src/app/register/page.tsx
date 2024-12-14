import RegisterPageWrapper from "@/app/register/wrapper";
import { NavigationBar } from "@/components/navigation-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMG - Register",
  description: "Card Matching Game @web2024-card",
};

const RegisterPage = () => {
  return (
    <>
      <NavigationBar />
      <RegisterPageWrapper />
    </>
  );
};

export default RegisterPage;
