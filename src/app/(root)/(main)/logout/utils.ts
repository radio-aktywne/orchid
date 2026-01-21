import { createDefaultUrl } from "../../../../common/core/lib/flow/create-default-url";
import { getOriginalBaseUrl } from "../../../../server/generic/lib/get-original-base-url";

export async function createReturnUrl(returnTo: string | undefined) {
  const returnToUrl = (() => {
    try {
      return returnTo ? new URL(returnTo) : undefined;
    } catch {
      return undefined;
    }
  })();

  const orchidBaseUrl = new URL((await getOriginalBaseUrl()).originalBaseUrl);

  return returnToUrl?.origin === orchidBaseUrl.origin &&
    returnToUrl?.pathname.startsWith(orchidBaseUrl.pathname)
    ? { url: returnToUrl.toString() }
    : createDefaultUrl();
}
