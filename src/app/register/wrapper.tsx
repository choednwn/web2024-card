"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const RegisterPageWrapper = () => {
  const router = useRouter();

  const onRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.elements as typeof e.currentTarget.elements & {
      userId: { value: string };
      userPwd: { value: string };
      userPwdCheck: { value: string };
    };
    const userId = form.userId.value;
    const userPwd = form.userPwd.value;

    const response = await fetch("/api/register", {
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
        onSubmit={onRegisterSubmit}
        className="mx-4 flex w-full max-w-96 flex-col gap-4 rounded-md border border-border p-4"
      >
        <h4 className="text-center text-lg font-bold">회원가입</h4>
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
        {/* Password Check */}
        <div className="flex flex-col gap-2">
          <p className="">비밀번호 확인</p>
          <Input
            name="userPwdCheck"
            type="password"
            required
            className="w-full"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-end">
          <Button type="submit" className="col-start-3">
            회원가입
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPageWrapper;
