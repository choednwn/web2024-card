"use server";

import { executeQuery } from "@/lib/api/db";
import { RowDataPacket } from "mysql2/promise";

interface User extends RowDataPacket {
  userId: string;
  userPwd: string;
}

export async function register_member(userId: string): Promise<boolean> {
  try {
    const sql = "SELECT 1 FROM Users WHERE userId = ? LIMIT 1"; // 존재 여부만 확인
    const results = await executeQuery<number[]>(sql, [userId]);
    return results.length > 0; // 결과가 있으면 이미 사용 중인 아이디
  } catch (error) {
    console.error("ID 중복 확인 중 오류 발생:", error);
    throw new Error("ID 중복 확인 중 오류 발생");
  }
}

export async function login(userId: string): Promise<User | null> {
  const sql = "SELECT userId, userPwd FROM Users WHERE userId = ?";
  const [results] = await executeQuery<User[]>(sql, [userId]);
  console.log("Query results:", results);

  if (results.length === 0) {
    return null;
  }
  return results;
}

export async function gethighscore(userId: string) {
  try {
    const sql = "SELECT highscore FROM Users WHERE userId = ?";
    const [highscore] = await executeQuery<User[]>(sql, [userId]);
    return highscore;
  } catch {}
}
