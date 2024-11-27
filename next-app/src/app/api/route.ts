import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string } }
) {
  return NextResponse.json({ success: "ok" });
}
