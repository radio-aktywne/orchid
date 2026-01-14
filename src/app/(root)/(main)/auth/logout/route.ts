import type { NextRequest } from "next/server";

import { redirect } from "next/navigation";
import { connection } from "next/server";

import type { RouteInput } from "../../../../types";
import type { Keys } from "./types";

import { AuthError } from "../../../../../server/auth/errors";
import { decryptLogoutRequest } from "../../../../../server/auth/lib/decrypt-logout-request";
import { encryptLogoutAcceptResponse } from "../../../../../server/auth/lib/encrypt-logout-accept-response";
import { createErrorUrl } from "../../../../../server/core/lib/flow/create-error-url";
import { state } from "../../../../../server/state/vars/state";
import { Schemas } from "./schemas";
import { createLogoutAcceptUrl, createLogoutInitUrl } from "./utils";

export async function GET(request: NextRequest, {}: RouteInput<Keys.Path>) {
  await connection();

  const queryParameters = await Schemas.Query.parseAsync(
    Object.fromEntries(request.nextUrl.searchParams),
  );

  const { token: requestToken } = queryParameters;

  if (!requestToken) redirect(createErrorUrl());

  const { challenge } = await (async () => {
    try {
      return await decryptLogoutRequest({ data: requestToken });
    } catch (error) {
      if (error instanceof AuthError) redirect(createErrorUrl());
      throw error;
    }
  })();

  await (async () => {
    const { error, response } = await state.current.apis.falcon.toSession({
      headers: { Cookie: request.headers.get("Cookie") ?? undefined },
    });

    if (response.status === 401) return;
    if (error) redirect(createErrorUrl());

    redirect(createLogoutInitUrl(requestToken));
  })();

  const { data: responseToken } = await encryptLogoutAcceptResponse({
    challenge: challenge,
  });

  redirect(createLogoutAcceptUrl(responseToken));
}
