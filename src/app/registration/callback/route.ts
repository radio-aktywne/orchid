import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  redirect("/default");
}
