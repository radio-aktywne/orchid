import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { createFalconRegistrationURL } from "../../../lib/urls/create-falcon-registration-url";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { url } = createFalconRegistrationURL(
    Object.fromEntries(request.nextUrl.searchParams),
  );

  redirect(url);
}
