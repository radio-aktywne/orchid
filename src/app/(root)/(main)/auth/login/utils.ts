import { trimEnd } from "es-toolkit/string";

import { createUrl } from "../../../../../common/generic/lib/create-url";
import { state } from "../../../../../server/state/vars/state";

export function createLoginInitUrl(token: string) {
  return createUrl({
    path: `${trimEnd(state.current.config.urls.orchid.path ?? "", "/")}/login/init`,
    query: {
      return_to: createUrl({
        host: state.current.config.urls.orchid.host,
        path: `${trimEnd(state.current.config.urls.orchid.path ?? "", "/")}/auth/login`,
        port: state.current.config.urls.orchid.port,
        query: { token: token },
        scheme: state.current.config.urls.orchid.scheme,
      }),
    },
  });
}

export function createLoginAcceptUrl(token: string) {
  return createUrl({
    host: state.current.config.urls.crocus.host,
    path: `${trimEnd(state.current.config.urls.crocus.path ?? "", "/")}/login/accept`,
    port: state.current.config.urls.crocus.port,
    query: { token: token },
    scheme: state.current.config.urls.crocus.scheme,
  });
}
