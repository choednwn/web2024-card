"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  //! Temp for userId. Will be replaced
  const [userId, _] = useState<string | null>(
    typeof window !== "undefined" ? localStorage.getItem("userID") : null,
  );

  const router = useRouter();

  return (
    <header className="h-16 w-full max-w-6xl border border-black bg-blue-300/80 backdrop-blur-lg">
      <div className="flex size-full flex-row items-center justify-between">
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
          {userId ? (
            <>
              <Button>로그아웃</Button>
            </>
          ) : (
            <>
              <Button onClick={() => router.push("/login")}>로그인</Button>
              <Button onClick={() => router.push("/register")}>회원가입</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
