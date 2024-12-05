"use client";

import Button from "@/components/button";
import { useLoginStore } from "@/lib/stores";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HeaderButtonStyles = "text-lg font-bold";

const Header = () => {
  const router = useRouter();
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);
  const logout = useLoginStore((state) => state.logout);

  return (
    <header className="bg-background/60 6xl:px-0 flex h-16 w-full flex-row items-center justify-center px-4 backdrop-blur-lg">
      <div className="flex size-full max-w-6xl flex-row items-center justify-between">
        {/* Logo */}
        <Button
          id="logo"
          onClick={() => router.push("/")}
          className={HeaderButtonStyles}
        >
          LOGO
        </Button>

        {/* Button Container */}
        <div className="flex size-fit flex-row items-center justify-end gap-4">
          {isAuthenticated ? (
            <>
              <Button
                onClick={() => router.push("/profile")}
                className={HeaderButtonStyles}
              >
                Profile
              </Button>
              <Button onClick={() => logout()} className={HeaderButtonStyles}>
                Logout
              </Button>
            </>
          ) : (
            <Button
              onClick={() => {
                router.push("/profile/login");
              }}
              className={HeaderButtonStyles}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
