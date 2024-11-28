import dbConnect from "@/app/lib/dbConnect";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import Todo from "@/app/models/Todo";

export const dynamic = "force-dynamic";

export async function GET(
    request: NextRequest,
    { params }: { params: { category: string } }
) {
    await dbConnect();
    const todos = await Todo.find({}).exec();
    console.log(todos);
    return NextResponse.json({ todos: todos });
}
