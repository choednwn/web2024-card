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

  if (results && results.length === 0) {
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

/*
  특정 userId의 최근 10개의 Scores 기록을 가져오는 함수
  @param userId 유저 ID
  @returns 최근 10개의 Scores 기록
 */
export async function getRecentScores(userId: string): Promise<any[]> {
  try {
    const sql = `
        SELECT userId, score, num_played
        FROM Scores
        WHERE userId = ?
        ORDER BY num_played DESC
        LIMIT 10;
      `;
    const rows = await executeQuery(sql, [userId]); // MySQL 쿼리 실행
    console.log("rows:", rows);
    return rows as any[];
  } catch (error) {
    console.error("Error fetching recent scores:", error);
    throw new Error("Failed to fetch recent scores");
  }
}

export async function getrank(page: number): Promise<any[]> {
  const first_value = (page - 1) * 15 + 1;
  const last_value = page * 15;
  console.log("first_value:", first_value);
  console.log("last_value:", last_value);
  try {
    const sql = `
        WITH Scores AS (
    SELECT userId, score, ROW_NUMBER() OVER (ORDER BY score DESC) AS ranking
    FROM Scores)
    SELECT userId, score, ranking
    FROM Scores
    WHERE ranking BETWEEN ? AND ?;
      `;
    const rows = await executeQuery(sql, [first_value, last_value]); // MySQL 쿼리 실행
    console.log("rows:", rows);
    return rows as any[];
  } catch (error) {
    console.error("Error fetching recent scores:", error);
    throw new Error("Failed to fetch recent scores");
  }
}
