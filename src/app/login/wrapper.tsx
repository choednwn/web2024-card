"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/lib/user/user.store";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

// 진짜진짜 오늘 마지막.. 셤 공부해야지
const LoginPageWrapper = () => {
  const router = useRouter();
  const [statusCode, setStatusCode] = useState(0);
  const storeToLocal = useUserStore((state) => state.storeToLocal);
  const setUserId = useUserStore((state) => state.setUserId);
  const setSessionValid = useUserStore((state) => state.setSessionValid);

  const onLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.elements as typeof e.currentTarget.elements & {
      userId: { value: string };
      userPwd: { value: string };
    };
    const userId = form.userId.value;
    const userPwd = form.userPwd.value;

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, userPwd }),
    });
    setStatusCode(response.status);

    // On success
    if (response.status === 200) {
      //! Get Temp Hash
      storeToLocal(userId, "temphash");
      setUserId(userId);
      setSessionValid(true); //! don't know if I should set validated straight away

      router.push("/dash");
    }
  };

  return (
    <div className="flex h-screen-sub-nav items-center justify-center">
      <form
        onSubmit={onLoginSubmit}
        className="mx-4 flex w-full max-w-96 flex-col gap-3 rounded-md border border-border p-4"
      >
        <h4 className="text-center text-lg font-bold">로그인</h4>
        {/* UserID */}
        <div className="flex flex-col gap-2">
          <p className="">아이디</p>
          <Input name="userId" required className="w-full" />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <p className="">비밀번호</p>
          <Input name="userPwd" type="password" required className="w-full" />
        </div>
        <p
          className={cn(
            "text-sm text-red-500 opacity-0",
            (statusCode === 411 || statusCode === 412) && "opacity-100",
          )}
        >
          *아이디 또는 비번이 옳지 않습니다
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-end gap-2">
          <Button
            variant="outline"
            type="button"
            onClick={() => router.push("/register")}
            className="col-start-3"
          >
            회원가입
          </Button>
          <Button type="submit" className="col-start-3">
            로그인
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPageWrapper;
