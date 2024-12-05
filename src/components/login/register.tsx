"use client";

import Button from "@/components/button";
import { RegisterSettings } from "@/lib/constants";
import { useLoginStore } from "@/lib/stores";
import { hashSHA256 } from "@/lib/utils";
import { useState } from "react";

const RegisterMenu = () => {
  const register = useLoginStore((state) => state.register);
  const [isPwdValid, setPwdValid] = useState(true);

  const onRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.elements as typeof e.currentTarget.elements & {
      userId: { value: string };
      userPwd: { value: string };
    };
    const userId = form.userId.value;
    const pwdHash = await hashSHA256(form.userPwd.value);
    register(userId, pwdHash);
  };

  const checkPasswordRules = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pwd = e.currentTarget.value;
    const pwdRgx = /^(?=\S*[a-zA-Z])(?=\S*\d)(?=\S*[\W_])\S+$/g;
    console.log(pwd);

    if (pwd.length === 0) {
      setPwdValid(true);
    } else if (
      pwd.length >= RegisterSettings.pwdMinLength && // Check length
      pwd.match(pwdRgx) // Check if pwd contains number, alphabet, and special character
    ) {
      setPwdValid(true);
    } else {
      setPwdValid(false);
    }
  };

  // const checkPasswordMatch = (e: React.FormEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   const pwd = document.getElementById("userPwd")?.value; //! needs a better way I think
  //   const checkPwd = e.currentTarget.value;

  //   if (pwd === checkPwd) {
  //     e.currentTarget.setCustomValidity("");
  //   } else {
  //     e.currentTarget.setCustomValidity("비밀번호가 일치하지 않습니다.");
  //   }
  // };

  return (
    <div className="size-fit border border-black">
      <form
        onSubmit={(e) => onRegisterSubmit(e)}
        className="flex flex-col gap-2"
      >
        <input
          id="userId"
          type="text"
          placeholder="아이디"
          minLength={RegisterSettings.idMinLength}
          required
        />
        <input
          id="userPwd"
          type="password"
          placeholder="비밀번호"
          minLength={RegisterSettings.pwdMinLength}
          onChange={checkPasswordRules}
          className={
            isPwdValid ? "" : "rounded-sm outline outline-2 outline-red-500"
          }
          required
        />
        <input
          id="checkUserPwd"
          type="password"
          placeholder="비밀번호"
          // onChange={checkPasswordMatch}
          required
        />
        <Button type="submit">회원가입</Button>
      </form>
    </div>
  );
};

export default RegisterMenu;
