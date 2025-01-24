import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

import { encryptAuthLoginAcceptResponse } from "../../../lib/auth/login/encrypt-auth-login-accept-response";
import { createAuthLoginURL } from "../../../lib/urls/create-auth-login-url";
import { createCrocusLoginAcceptURL } from "../../../lib/urls/create-crocus-login-accept-url";
import { createErrorPath } from "../../../lib/urls/create-error-path";
import { createLoginInitPath } from "../../../lib/urls/create-login-init-path";
import { parseQueryParams } from "../../../lib/urls/parse-query-params";
import { searchParamsSchema } from "./schemas";
import { safeDecryptAuthLoginRequest, safeGetUserSession } from "./utils";

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

  const { challenge } = await safeDecryptAuthLoginRequest({
    data: requestToken,
  });

  const { session } = await safeGetUserSession();

  if (!session) {
    const { url } = createAuthLoginURL(
      Object.fromEntries(request.nextUrl.searchParams),
    );
    const { path } = createLoginInitPath({
      return_to: url,
    });
    redirect(path);
  }

  const { data: responseToken } = await encryptAuthLoginAcceptResponse({
    challenge: challenge,
    subject: session.identity!.id,
  });

  const { url } = createCrocusLoginAcceptURL({ token: responseToken });
  redirect(url);
}
