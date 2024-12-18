"use server";

// backend/api/Users/login.ts
///login은 전달할 때 userPwd에다가 해시된 비번을 넣어서 전달해줘.
import { gethighscore, login } from "@/lib/api/users";
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
  const { userId } = body;

  try {
    const highScore = await gethighscore(userId);
    return NextResponse.json(highScore, { status: 201 });
  } catch {
    return NextResponse.json(null, { status: 400 });
  }
}
