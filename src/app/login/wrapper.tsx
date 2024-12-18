"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/lib/user/user.store";
import  { hashPassword }  from "@/lib/utils";
import { useRouter } from "next/navigation";

// 진짜진짜 오늘 마지막.. 셤 공부해야지
const LoginPageWrapper = () => {
  const router = useRouter();
  const login = useUserStore((state) => state.login);

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
    console.log(response); //! 나중에 지우기
    console.log(response.json);
  };

  return (
    <div className="flex h-screen-sub-nav items-center justify-center">
      <form
        onSubmit={onLoginSubmit}
        className="mx-4 flex w-full max-w-96 flex-col gap-4 rounded-md border border-border p-4"
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
