"use server";

import { getrank } from "@/lib/api/users";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(null, {
      status: 405,
      statusText: "Method Not Allowed",
    });
  }

  const body = await req.json();
  const { page } = body;

  try {
    const toprank = await getrank(page);
    return NextResponse.json(toprank, { status: 201 });
  } catch {
    return NextResponse.json(null, { status: 400 });
  }
}
