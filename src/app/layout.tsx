import Header from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "카드 게임",
  description: "기초웹프로그래밍 팀 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Header />
        <div className="h-full">{children}</div>
      </body>
    </html>
  );
}
