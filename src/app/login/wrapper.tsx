"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

// 진짜진짜 오늘 마지막.. 셤 공부해야지
const LoginPageWrapper = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen-sub-nav items-center justify-center">
      <form className="grid grid-cols-4 grid-rows-4 items-center gap-x-4 gap-y-3 rounded-md border border-border p-4">
        <h4 className="col-span-4 text-center text-lg font-bold">로그인</h4>
        {/* UserID */}
        <p className="col-start-1 row-start-2 justify-self-end">아이디</p>
        <Input required className="col-span-3 col-start-2 row-start-2" />
        {/* Password */}
        <p className="col-start-1 row-start-3 justify-self-end">비밀번호</p>
        <Input required className="col-span-3 col-start-2 row-start-3" />

        {/* Buttons */}
        <div className="col-span-4 flex flex-row items-center justify-end gap-3">
          <Button
            variant="outline"
            type="button"
            onClick={() => router.push("/register")}
            className="col-start-3"
          >
            회원가입
          </Button>
          <Button type="submit" className="col-start-4">
            로그인
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPageWrapper;
