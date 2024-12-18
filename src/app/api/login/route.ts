"use server";

// backend/api/Users/login.ts
///login은 전달할 때 userPwd에다가 해시된 비번을 넣어서 전달해줘.
import { login } from "@/lib/api/users";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

// Type Definitions
// type Data = {
//   success: boolean;
//   userId?: string;
// }

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    // return res.status(405).end(); // Method Not Allowed
    return NextResponse.json({ success: false }, { status: 405 });
  }

  const body = await req.json();
  const { userId, userPwd } = body;

  // 기본적인 유효성 검사
  if (!userId || !userPwd) {
    // return res.status(400).json({ success: false });
    return NextResponse.json(
      { success: false },
      { status: 400, statusText: "pizza" },
    );
  }

  try {
    // 사용자 조회
    const user = await login(userId);
    console.log("user test:",user);

    if (!user) {
      // return res.status(400).json({ success: false });
      return NextResponse.json({ success: false }, { status: 400, statusText: "nope" });
    }

    // 비밀번호 검증
    // if (pwdHash !== user.userPwd) {
    //   // return res.status(400).json({ success: false });
    //   return NextResponse.json({ success: false }, { status: 400, statusText: "lol wrong passwrod"});
    // }

    const isMatch = await bcrypt.compare(userPwd, user.userPwd);

    if (!isMatch) {
      return NextResponse.json({ success: false }, { status: 400, statusText: "Wrong password" });
    }

    // 로그인 성공
    // return res.status(200).json({ success: true, userId: user.userId });
    return NextResponse.json(
      { success: true, userId: user.userId },
      { status: 200 },
    );
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    // return res.status(500).json({ success: false });
    return NextResponse.json({ success: false }, { status: 500 });
  }
}


async function verifyPassword(userPwd: string, HashedPwd: string) {
  const isMatch = await bcrypt.compare(userPwd,HashedPwd);
  if (!isMatch) {
    return NextResponse.json(
      { success: false },
      { status: 400, statusText: "wrong password" },
    );
  }
}