"use server";

import { getRecentScores } from "@/lib/api/users";
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
    const recentScores = await getRecentScores(userId);
    return NextResponse.json(recentScores, { status: 201 });
  } catch {
    return NextResponse.json(null, { status: 400 });
  }
}
