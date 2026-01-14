import type { PageViewInput } from "../../../types";
import type { Schemas } from "./schemas";

import { ErrorWidget } from "../../../../isomorphic/core/components/flow/error-widget";
import { state } from "../../../../server/state/vars/state";

export async function ErrorPageView({
  queryParameters,
}: PageViewInput<typeof Schemas.Path, typeof Schemas.Query>) {
  const { id } = queryParameters;

  const { error } = await (async () => {
    if (!id) return { error: undefined };

    const { data, error, response } =
      await state.current.apis.falcon.getFlowError({
        headers: { Accept: "application/json" },
        query: { id: id },
      });

    if (response.status === 404) return { error: undefined };
    if (error)
      throw new Error(`Failed to fetch error details: ${error.error.message}`);

    return { error: data };
  })();

  return <ErrorWidget error={error} />;
}
