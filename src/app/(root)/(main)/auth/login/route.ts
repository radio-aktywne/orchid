import type { NextRequest } from "next/server";

import { redirect } from "next/navigation";
import { connection } from "next/server";

import type { RouteInput } from "../../../../types";
import type { Keys } from "./types";

import { AuthError } from "../../../../../server/auth/errors";
import { decryptLoginRequest } from "../../../../../server/auth/lib/decrypt-login-request";
import { encryptLoginAcceptResponse } from "../../../../../server/auth/lib/encrypt-login-accept-response";
import { createErrorUrl } from "../../../../../server/core/lib/flow/create-error-url";
import { state } from "../../../../../server/state/vars/state";
import { Schemas } from "./schemas";
import { createLoginAcceptUrl, createLoginInitUrl } from "./utils";

export async function GET(request: NextRequest, {}: RouteInput<Keys.Path>) {
  await connection();

  const queryParameters = await Schemas.Query.parseAsync(
    Object.fromEntries(request.nextUrl.searchParams),
  );

  const { token: requestToken } = queryParameters;

  if (!requestToken) redirect(createErrorUrl());

  const { challenge } = await (async () => {
    try {
      return await decryptLoginRequest({ data: requestToken });
    } catch (error) {
      if (error instanceof AuthError) redirect(createErrorUrl());
      throw error;
    }
  })();

  const { session } = await (async () => {
    const { data, error, response } = await state.current.apis.falcon.toSession(
      {
        headers: { Cookie: request.headers.get("Cookie") ?? undefined },
      },
    );

    if (response.status === 401) redirect(createLoginInitUrl(requestToken));
    if (error) redirect(createErrorUrl());

    return { session: data };
  })();

  const { data: responseToken } = await encryptLoginAcceptResponse({
    challenge: challenge,
    subject: session.identity!.id,
    traits: session.identity!.traits,
  });

  redirect(createLoginAcceptUrl(responseToken));
}
