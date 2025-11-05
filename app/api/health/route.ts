import { NextResponse } from "next/server";

export async function GET() {
  const db = process.env.DB_CONNECTION_STRING;
  const cache = process.env.CACHE_HOST;
  const logLevel = process.env.LOG_LEVEL;

  return NextResponse.json({
    status: "ok",
    service: "AIME-frontend",
    dbConnectedTo: db ? "available" : "missing",
    cacheConnectedTo: cache ? "available" : "missing",
    logLevel,
    time: new Date().toISOString(),
  });
}
