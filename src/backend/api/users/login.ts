"use server";

// backend/api/Users/login.ts
///login은 전달할 때 userPwd에다가 해시된 비번을 넣어서 전달해줘.
import { checkDbConnection, executeQuery } from "@/backend/db"; // 클라이언트와 서버 공통 모듈 임포트
import { login } from "@/backend/lib/users";
import { hashSHA256 } from "@/lib/utils";
import bodyParser from "body-parser";
import express from "express";
import { NextApiRequest, NextApiResponse } from "next";

// Type Definitions
type Data = {
  success: boolean;
  userId?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  const { userId, passwordHash } = req.body;

  // 기본적인 유효성 검사
  if (!userId || !passwordHash) {
    return res.status(400).json({ success: false });
  }

  try {
    // 사용자 조회
    const user = await login(userId);

    if (!user) {
      return res.status(400).json({ success: false });
    }

    // 비밀번호 검증
    if (passwordHash !== user.userPwd) {
      return res.status(400).json({ success: false });
    }

    // 로그인 성공
    return res.status(200).json({ success: true, userId: user.userId });
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    return res.status(500).json({ success: false });
  }
}
