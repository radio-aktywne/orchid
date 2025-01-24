import { cookies } from "next/headers";
import "server-only";

import { falcon } from "../../../../services/falcon";
import { FalconError, NoSessionError } from "../../errors";
import { GetLogoutFlowInput, GetLogoutFlowOutput } from "./types";

export async function getLogoutFlow({
  returnTo,
}: GetLogoutFlowInput): Promise<GetLogoutFlowOutput> {
  const { data, error, response } = await falcon.GET(
    "/self-service/logout/browser",
    {
      headers: {
        Accept: "application/json",
        Cookie: cookies()
          .getAll()
          .map((cookie) => `${cookie.name}=${cookie.value}`)
          .join("; "),
      },
      params: {
        query: { return_to: returnTo },
      },
    },
  );

  if (error || !response.ok) {
    if (response.status === 401) throw new NoSessionError();
    throw new FalconError();
  }

  return { flow: data };
}
