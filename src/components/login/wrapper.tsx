"use client";

import LoginMenu from "@/components/login/login";
import RegisterMenu from "@/components/login/register";
import { useLoginStore } from "@/lib/stores";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LoginWrapper = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);
  const isRegister = searchParams.has("register");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/profile");
    }
  }, [isAuthenticated]);

  return (
    <div>
      {/* 로그인 */}
      {!isAuthenticated ? (
        !isRegister ? (
          <LoginMenu />
        ) : (
          <RegisterMenu />
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoginWrapper;
