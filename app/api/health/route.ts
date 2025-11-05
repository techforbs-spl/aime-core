import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "AIME-frontend",
    time: new Date().toISOString(),
  });
}
