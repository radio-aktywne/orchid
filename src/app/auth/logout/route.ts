import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { encryptAuthLogoutAcceptResponse } from "../../../lib/auth/logout/encrypt-auth-logout-accept-response";
import { createAuthLogoutURL } from "../../../lib/urls/create-auth-logout-url";
import { createCrocusLogoutAcceptURL } from "../../../lib/urls/create-crocus-logout-accept-url";
import { createErrorPath } from "../../../lib/urls/create-error-path";
import { createLogoutInitPath } from "../../../lib/urls/create-logout-init-path";
import { parseQueryParams } from "../../../lib/urls/parse-query-params";
import { searchParamsSchema } from "./schemas";
import { safeDecryptAuthLogoutRequest, safeGetUserSession } from "./utils";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { data: params, error: paramsError } = parseQueryParams({
    params: request.nextUrl.searchParams,
    schema: searchParamsSchema,
  });

  if (paramsError) {
    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }

  const { token: requestToken } = params;

  const { challenge } = await safeDecryptAuthLogoutRequest({
    data: requestToken,
  });

  const { session } = await safeGetUserSession();

  if (session) {
    const { url } = createAuthLogoutURL(
      Object.fromEntries(request.nextUrl.searchParams),
    );
    const { path } = createLogoutInitPath({
      return_to: url,
    });
    redirect(path);
  }

  const { data: responseToken } = await encryptAuthLogoutAcceptResponse({
    challenge: challenge,
  });

  const { url } = createCrocusLogoutAcceptURL({ token: responseToken });
  redirect(url);
}
