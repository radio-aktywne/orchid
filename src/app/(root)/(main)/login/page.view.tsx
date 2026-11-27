import { headers } from "next/headers";

import type { PageViewInput } from "../../../types";
import type { Schemas } from "./schemas";

import { createErrorUrl } from "../../../../common/core/lib/flow/create-error-url";
import { LoginWidget } from "../../../../isomorphic/core/components/flow/login-widget";
import { localizedRedirect } from "../../../../server/routing/lib/localized-redirect";
import { state } from "../../../../server/state/vars/state";

export async function LoginPageView({
  queryParameters,
}: PageViewInput<typeof Schemas.Path, typeof Schemas.Query>) {
  const { flow: id } = queryParameters;

  if (!id) return await localizedRedirect({ href: createErrorUrl().url });

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

    if (error) return await localizedRedirect({ href: createErrorUrl().url });

    return { flow: data };
  })();

  if (flow.active)
    return await localizedRedirect({ href: createErrorUrl().url });

  return (
    <LoginWidget domain={state.current.config.oidc.google.domain} flow={flow} />
  );
}
