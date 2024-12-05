import Header from "@/components/header";
import AuthValidator from "@/components/login/validator";
import SunRay from "@/components/sunray";
import type { Metadata } from "next";
import "./globals.css";
import "./sunrays.css";

export const metadata: Metadata = {
  title: "카드 게임",
  description: "기초웹프로그래밍 팀 프로젝트",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="absolute z-0 flex h-screen w-screen flex-col overflow-hidden">
        <AuthValidator />
        <SunRay />

        <Header />
        <main className="flex size-full flex-col items-center justify-center bg-background">
          <div className="max-w-6xl">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
