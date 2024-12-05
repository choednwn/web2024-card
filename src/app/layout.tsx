import Header from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";

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
      <body className="flex h-screen flex-col">
        <Header />
        <main className="flex size-full max-w-6xl flex-col items-center justify-center bg-blue-50">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
