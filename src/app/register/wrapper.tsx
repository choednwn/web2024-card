"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/lib/user/user.store";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPageWrapper = () => {
  const router = useRouter();
  const [statusCode, setStatusCode] = useState(0);
  const [pwdIdentical, setPwdIdentical] = useState<null | boolean>(null);

  const checkPasswordIdentical = () => {
    const pwdFieldVal = (
      document.querySelector("#pwd-field") as HTMLInputElement
    )?.value;
    const pwdcFieldVal = (
      document.querySelector("#pwdc-field") as HTMLInputElement
    )?.value;

    if (pwdFieldVal === pwdcFieldVal) {
      setPwdIdentical(true);
    } else {
      setPwdIdentical(false);
    }
  };

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
    setStatusCode(response.status);

    //! 임시임시
    if (statusCode === 201) {
      router.push("/login");
    }
  };

  return (
    <div className="flex h-screen-sub-nav items-center justify-center">
      <form
        id="register-form"
        onSubmit={onRegisterSubmit}
        className="mx-4 flex w-full max-w-96 flex-col gap-3 rounded-md border border-border p-4"
      >
        <h4 className="text-center text-lg font-bold">회원가입</h4>
        {/* UserID */}
        <div className="flex flex-col gap-2">
          <p className="">
            아이디
            <span
              className={cn(
                "ml-4 text-sm text-red-500 opacity-0",
                statusCode === 422 && "opacity-100",
              )}
            >
              *아이디 존재
            </span>
          </p>
          <Input
            name="userId"
            placeholder="아이디"
            required
            className="w-full"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <p className="">
            비밀번호
            <span
              className={cn(
                "ml-4 text-sm text-red-500 opacity-0",
                statusCode === 406 && "opacity-100",
              )}
            >
              *비밀번호 입력 오류
            </span>
          </p>
          <Input
            id="pwd-field"
            name="userPwd"
            type="password"
            placeholder="문자, 숫자, 특수기호 8자 이상 조합"
            required
            onBlur={() => checkPasswordIdentical()}
            className="w-full"
          />
        </div>
        {/* Password Check */}
        <div className="flex flex-col gap-2">
          <p className="">비밀번호 확인</p>
          <Input
            id="pwdc-field"
            name="userPwdCheck"
            type="password"
            placeholder="비밀번호 다시 입력"
            required
            onChange={() => checkPasswordIdentical()}
            className={cn(
              "w-full",
              pwdIdentical === false && "border border-red-500",
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-end">
          <Button
            type="submit"
            disabled={!pwdIdentical}
            className="col-start-3"
          >
            회원가입
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPageWrapper;
