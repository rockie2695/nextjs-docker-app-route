import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string } }
) {
  console.log("test2", process.env.MONGO_URL);
  return NextResponse.json({ success: "ok" });
}
