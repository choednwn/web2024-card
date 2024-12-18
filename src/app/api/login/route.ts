"use server"; 

// backend/api/Users/login.ts
///login은 전달할 때 userPwd에다가 해시된 비번을 넣어서 전달해줘.
import { login } from "@/lib/api/users";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(null, {
      status: 405,
      statusText: "Method Not Allowed",
    });
  }

  const body = await req.json();
  const { userId, userPwd } = body;

  // 기본적인 유효성 검사
  if (!userId || !userPwd) {
    return NextResponse.json(
      null,
      { status: 400, statusText: "pizza" },
    );
  }

  try {
    // 사용자 조회
    const user = await login(userId);

    if (!user) {
      return NextResponse.json(
        null,
        { status: 411, statusText: "nope" },
      );
    }

    // 비밀번호 검증
    const isMatch = await bcrypt.compare(userPwd, user.userPwd);

    if (!isMatch) {
      return NextResponse.json(
        null,
        { status: 412, statusText: "Wrong password" },
      );
    }

    // 로그인 성공
    return NextResponse.json(
      null,
      { status: 200 },
    );
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
