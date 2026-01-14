import { createUrl } from "../../../../common/generic/lib/create-url";
import { createDefaultUrl } from "../../../../server/core/lib/flow/create-default-url";
import { state } from "../../../../server/state/vars/state";

export function createReturnUrl(returnTo: string | undefined) {
  const returnToUrl = (() => {
    try {
      return returnTo ? new URL(returnTo) : undefined;
    } catch {
      return undefined;
    }
  })();

  const orchidBaseUrl = new URL(
    createUrl({
      host: state.current.config.urls.orchid.host,
      path: state.current.config.urls.orchid.path,
      port: state.current.config.urls.orchid.port,
      scheme: state.current.config.urls.orchid.scheme,
    }),
  );

  return returnToUrl?.origin === orchidBaseUrl.origin &&
    returnToUrl?.pathname.startsWith(orchidBaseUrl.pathname)
    ? returnToUrl.toString()
    : createDefaultUrl();
}
