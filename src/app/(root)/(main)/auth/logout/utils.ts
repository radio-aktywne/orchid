import { trimEnd } from "es-toolkit/string";

import { createUrl } from "../../../../../common/generic/lib/create-url";
import { getOriginalBaseUrl } from "../../../../../server/generic/lib/get-original-base-url";
import { state } from "../../../../../server/state/vars/state";

export async function createLogoutInitUrl(token: string) {
  const baseUrl = new URL((await getOriginalBaseUrl()).originalBaseUrl);

  return createUrl({
    path: "/logout/init",
    query: {
      return_to: createUrl({
        host: baseUrl.hostname,
        path: `${trimEnd(baseUrl.pathname, "/")}/auth/logout`,
        port: baseUrl.port ? Number(baseUrl.port) : undefined,
        query: { token: token },
        scheme: baseUrl.protocol.replace(":", ""),
      }).url,
    },
  });
}

export function createLogoutAcceptUrl(token: string) {
  return createUrl({
    host: state.current.config.urls.crocus.host,
    path: `${trimEnd(state.current.config.urls.crocus.path ?? "", "/")}/logout/accept`,
    port: state.current.config.urls.crocus.port,
    query: { token: token },
    scheme: state.current.config.urls.crocus.scheme,
  });
}
