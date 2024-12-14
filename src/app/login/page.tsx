import LoginPageWrapper from "@/app/login/wrapper";
import { NavigationBar } from "@/components/navigation-bar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMG - Login",
  description: "Card Matching Game @web2024-card",
};

const LoginPage = () => {
  // 이거만 하고 공부하러 ㄱ
  return (
    <>
      <NavigationBar />
      <LoginPageWrapper />
    </>
  );
};

export default LoginPage;
