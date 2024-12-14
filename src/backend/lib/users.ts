"use server";

import { executeQuery } from "@/backend/db";
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
  try {
    const sql = "SELECT userId, userPwd FROM Users WHERE userId = ?";
    const [results] = await executeQuery<User[]>(sql, [userId]);

    return results.length > 0 ? results[0] : null;
  } catch (error) {
    console.error("사용자 조회 중 오류 발생:", error);
    throw new Error("사용자 조회 중 오류 발생");
  }
}
