import type { PageViewInput } from "../../../../types";
import type { Schemas } from "./schemas";

import { createUrl } from "../../../../../common/generic/lib/create-url";
import { LogoutSuccessWidget } from "../../../../../isomorphic/core/components/flow/logout-success-widget";
import { state } from "../../../../../server/state/vars/state";

export async function LogoutSuccessPageView({}: PageViewInput<
  typeof Schemas.Path,
  typeof Schemas.Query
>) {
  const { url: sunflowerUrl } = createUrl({
    host: state.current.config.urls.sunflower.host,
    path: state.current.config.urls.sunflower.path,
    port: state.current.config.urls.sunflower.port,
    scheme: state.current.config.urls.sunflower.scheme,
  });

  return <LogoutSuccessWidget urls={{ sunflower: sunflowerUrl }} />;
}
