"use server";

import { executeQuery } from "@/lib/api/db"; // 클라이언트와 서버 공통 모듈 임포트
import { register_member } from "@/lib/api/users";
import { hashPassword } from "@/lib/server-utils";
import { validatePassword } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(null, { status: 405 });
  }

  const { userId, userPwd } = await req.json();

  // 기본적인 유효성 검사
  if (!userId || !userPwd) {
    return NextResponse.json(
      { success: false },
      { status: 4, statusText: "Invalid userId or userPwd" },
    );
  }

  // 비밀번호 유효성 검사
  if (!validatePassword(userPwd)) {
    return NextResponse.json(
      { success: false },
      { status: 406, statusText: "Password rules invalid" },
    );
  }

  try {
    // ID 중복 확인
    const existingUser = await register_member(userId);

    //!
    if (existingUser) {
      return NextResponse.json(
        { success: false },
        { status: 422, statusText: "Already exisiting user" },
      );
    }

    // 비밀번호 해시
    const passwordHash = await hashPassword(userPwd);
    //!

    // 데이터베이스에 사용자 추가
    const query =
      "INSERT INTO Users ( userId, userPwd, highscore) VALUES (?, ?, 0)";
    const values = [userId, passwordHash]; // 여기에 username도 추가해야 할 경우를 대비
    //!
    await executeQuery(query, values);

    return NextResponse.json(
      { success: true },
      { status: 201, statusText: "Successfuly registered user" },
    );
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 408, statusText: "Error adding user" },
    );
  }
}
