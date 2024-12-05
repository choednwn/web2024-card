"use client";

import Button from "@/components/button";
import { useLoginStore } from "@/lib/login/login.stores";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HeaderButtonStyles = "text-lg font-bold";

const Header = () => {
  const router = useRouter();
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);
  const logout = useLoginStore((state) => state.logout);

  return (
    <header className="6xl:px-0 z-50 flex h-16 w-full flex-row items-center justify-center bg-black/10 px-4 shadow-md backdrop-blur-xl">
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
