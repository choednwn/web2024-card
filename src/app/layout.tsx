import { AuthValidator } from "@/components/auth-validator";
import { ThemeProvider } from "@/components/theme-provider";
import "@/css/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMG",
  description: "Card Matching Game @web2024-card",
  authors: [
    { name: "Minju Han", url: "https://github.com/ochazkeee" },
    { name: "Wooju Choi", url: "https://github.com/choednwn" },
    { name: "Chaemin Jin", url: "https://github.com/chaemi1v" },
    { name: "Nahyun Kim", url: "https://github.com/nana24ok" },
  ],
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthValidator />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;
