import Header from "@/components/Header";
import SunRay from "@/components/Sunray";
import AuthValidator from "@/components/Validator";
import "@/styles/globals.css";
import type { Metadata } from "next";

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
