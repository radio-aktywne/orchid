import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { createErrorPath } from "../../lib/urls/create-error-path";
import { parseQueryParams } from "../../lib/urls/parse-query-params";
import { searchParamsSchema } from "./schemas";
import { safeGetLogoutFlow } from "./utils";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { data: params, error: paramsError } = parseQueryParams({
    params: request.nextUrl.searchParams,
    schema: searchParamsSchema,
  });

  if (paramsError) {
    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }

  const { return_to: returnTo } = params;

  const { flow } = await safeGetLogoutFlow({ returnTo: returnTo });

  redirect(flow.logout_url);
}
