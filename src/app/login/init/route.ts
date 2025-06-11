import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { createFalconLoginURL } from "../../../lib/urls/create-falcon-login-url";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { url } = createFalconLoginURL(
    Object.fromEntries(request.nextUrl.searchParams),
  );

  redirect(url);
}
