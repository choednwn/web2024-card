"use client";

import Button from "@/components/button";
import { useLoginStore } from "@/lib/stores";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);
  const logout = useLoginStore((state) => state.logout);

  return (
    <header className="flex h-16 w-full flex-row items-center justify-center border border-black bg-blue-300/80 backdrop-blur-lg">
      <div className="flex size-full max-w-6xl flex-row items-center justify-between">
        {/* Logo */}
        <Button
          id="logo"
          onClick={() => router.push("/")}
          className="font-bold"
        >
          LOGO
        </Button>

        {/* Button Container */}
        <div className="flex size-fit flex-row items-center justify-end gap-4">
          {isAuthenticated ? (
            <Button onClick={() => logout()}>로그아웃</Button>
          ) : (
            <Button
              onClick={() => {
                router.push("/profile/login");
              }}
            >
              로그인
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
