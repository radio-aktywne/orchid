import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { createLogoutPath } from "../../../lib/urls/create-logout-path";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { path } = createLogoutPath(
    Object.fromEntries(request.nextUrl.searchParams),
  );

  redirect(path);
}
