"use client";

import { BoundingContainer } from "@/components/bounding-container";
import { CMGLogo } from "@/components/logo";
import { useUserStore } from "@/lib/user/user.store";
import { useRouter } from "next/navigation";

export const NavigationBar = () => {
  const router = useRouter();
  const sessionValid = useUserStore((state) => state.sessionValid);
  const setSessionValid = useUserStore((state) => state.setSessionValid);

  return (
    <nav className="sticky top-0 z-50 h-nav w-screen border-b bg-background/75 backdrop-blur-lg">
      <BoundingContainer className="flex h-full items-center justify-between">
        <CMGLogo
          className="size-10 cursor-pointer drop-shadow-pinkglow"
          onClick={() => router.push("/")}
        />
        {sessionValid && (
          <button
            onClick={() => {
              router.push("/");
              setSessionValid(false);
            }}
            className="font-mono"
          >
            Logout
          </button>
        )}
        {!sessionValid && (
          <button onClick={() => router.push("/login")} className="font-mono">
            Login
          </button>
        )}
      </BoundingContainer>
    </nav>
  );
};
