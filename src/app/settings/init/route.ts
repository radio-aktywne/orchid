import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { createFalconSettingsURL } from "../../../lib/urls/create-falcon-settings-url";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { url } = createFalconSettingsURL(
    Object.fromEntries(request.nextUrl.searchParams),
  );

  redirect(url);
}
