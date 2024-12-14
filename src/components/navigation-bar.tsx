"use client";

import { BoundingContainer } from "@/components/bounding-container";
import { CMGLogo } from "@/components/logo";
import { useRouter } from "next/navigation";

export const NavigationBar = () => {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 h-nav w-screen border-b bg-background/75 backdrop-blur-lg">
      <BoundingContainer className="flex h-full items-center justify-between">
        <CMGLogo
          className="size-10 cursor-pointer drop-shadow-pinkglow"
          onClick={() => router.push("/")}
        />
        <button onClick={() => router.push("/login")} className="font-mono">
          Login
        </button>
      </BoundingContainer>
    </nav>
  );
};
