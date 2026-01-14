import { headers } from "next/headers";
import { redirect } from "next/navigation";

import type { PageViewInput } from "../../../types";
import type { Schemas } from "./schemas";

import { LoginWidget } from "../../../../isomorphic/core/components/flow/login-widget";
import { createErrorUrl } from "../../../../server/core/lib/flow/create-error-url";
import { state } from "../../../../server/state/vars/state";

export async function LoginPageView({
  queryParameters,
}: PageViewInput<typeof Schemas.Path, typeof Schemas.Query>) {
  const { flow: id } = queryParameters;

  if (!id) redirect(createErrorUrl());

  const { flow } = await (async () => {
    const { data, error } = await state.current.apis.falcon.getLoginFlow({
      headers: {
        Accept: "application/json",
        Cookie: (await headers()).get("Cookie") ?? undefined,
      },
      query: {
        id: id,
      },
    });

    if (error) redirect(createErrorUrl());

    return { flow: data };
  })();

  if (flow.active) redirect(createErrorUrl());

  return (
    <LoginWidget domain={state.current.config.oidc.google.domain} flow={flow} />
  );
}
