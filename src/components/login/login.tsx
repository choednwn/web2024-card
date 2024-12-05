"use client";

import Button from "@/components/button";
import { useLoginStore } from "@/lib/stores";
import { hashSHA256 } from "@/lib/utils";
import { useRouter } from "next/navigation";

const LoginMenu = () => {
  const router = useRouter();
  const login = useLoginStore((state) => state.login);
  const loginFailed = useLoginStore((state) => state.loginFailed);

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

  return (
    <div className="size-fit border border-black">
      <form onSubmit={(e) => onLoginSubmit(e)} className="flex flex-col gap-2">
        <input id="userId" type="text" placeholder="아이디" required />
        <input id="userPwd" type="password" placeholder="비밀번호" required />
        {loginFailed && (
          <div className="text-red-500">
            *아이디 또는 비밀번호가 틀렸습니다.
          </div>
        )}
        <Button type="submit">로그인</Button>
      </form>
      <Button
        onClick={() => router.push("/profile?register")}
        className="w-full"
      >
        회원가입
      </Button>
    </div>
  );
};

export default LoginMenu;
