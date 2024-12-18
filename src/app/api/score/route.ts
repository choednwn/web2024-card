"use server";

import { executeQuery } from "@/lib/api/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "hi" }, { status: 405 });
  }

  const { userId, score } = await req.json();

  try {
    // 데이터베이스에 사용자 추가
    const query = "INSERT INTO Scores ( userId, score) VALUES (?, ?)";
    const values = [userId, score];
    const updateHighscoreQuery = `
    UPDATE Users
    SET highscore = GREATEST(highscore, ?)
    WHERE userId = ?`;

    console.log(values);
    //!
    await executeQuery(query, values);
    await executeQuery(updateHighscoreQuery, [score, userId]);

    return NextResponse.json(
      { success: true },
      { status: 201, statusText: "Successfuly inserted score" },
    );
  } catch {
    return NextResponse.json(
      { success: false },
      { status: 500, statusText: "Error adding score" },
    );
  }
}
