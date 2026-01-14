import type { NextRequest } from "next/server";

import { redirect } from "next/navigation";
import { connection } from "next/server";

import type { RouteInput } from "../../../types";
import type { Keys } from "./types";

import { createErrorUrl } from "../../../../server/core/lib/flow/create-error-url";
import { state } from "../../../../server/state/vars/state";
import { Schemas } from "./schemas";
import { createReturnUrl } from "./utils";

export async function GET(request: NextRequest, {}: RouteInput<Keys.Path>) {
  await connection();

  const queryParameters = await Schemas.Query.parseAsync(
    Object.fromEntries(request.nextUrl.searchParams),
  );

  const { return_to: returnTo } = queryParameters;

  const { flow } = await (async () => {
    const { data, error, response } =
      await state.current.apis.falcon.createBrowserLogoutFlow({
        headers: {
          Accept: "application/json",
          Cookie: request.headers.get("Cookie") ?? undefined,
        },
        query: {
          return_to: returnTo,
        },
      });

    if (response.status === 401) redirect(createReturnUrl(returnTo));
    if (error) redirect(createErrorUrl());

    return { flow: data };
  })();

  redirect(flow.logout_url);
}
