"use client";

import Button from "@/components/button";
import { useLoginStore } from "@/lib/stores";
import { hashSHA256 } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const InputStyles = "rounded-lg border-2 border-gray-300 px-2 text-gray-800";

const LoginPage = () => {
  const router = useRouter();
  const login = useLoginStore((state) => state.login);
  const loginFailed = useLoginStore((state) => state.loginFailed);
  const isAuthenticated = useLoginStore((state) => state.isAuthenticated);

  const onLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.elements as typeof e.currentTarget.elements & {
      userId: { value: string };
      userPwd: { value: string };
    };
    const userId = form.userId.value;
    const pwdHash = await hashSHA256(form.userPwd.value);
    login(userId, pwdHash);
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="flex size-fit flex-col items-center gap-4 border-2 border-white bg-lime-100/80 p-12">
      <h1 className="text-3xl font-bold underline">Login</h1>
      <form
        onSubmit={(e) => onLoginSubmit(e)}
        className="flex flex-col gap-2 border-8 border-gray-100 bg-white p-8"
      >
        <input
          id="userId"
          name="userId"
          type="text"
          placeholder="아이디"
          required
          className={InputStyles}
        />
        <input
          id="userPwd"
          name="userPwd"
          type="password"
          placeholder="비밀번호"
          required
          className={InputStyles}
        />
        {loginFailed && (
          <div className="text-red-500">
            *아이디 또는 비밀번호가 틀렸습니다.
          </div>
        )}
        <Button
          type="submit"
          hasBorder
          className="border-blue-400 bg-blue-300 text-black"
        >
          로그인
        </Button>
      </form>
      <Button
        onClick={() => router.push("/profile/register")}
        hasBorder
        className="w-full bg-blue-400 text-black"
      >
        회원가입
      </Button>
    </div>
  );
};

export default LoginPage;
