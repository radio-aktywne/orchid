import { cookies } from "next/headers";
import "server-only";

import { falcon } from "../../../../services/falcon";
import { FalconError, NoSessionError } from "../../errors";
import { GetUserSessionInput, GetUserSessionOutput } from "./types";

export async function getUserSession({}: GetUserSessionInput = {}): Promise<GetUserSessionOutput> {
  const { data, error, response } = await falcon.GET("/sessions/whoami", {
    cache: "no-store",
    headers: {
      Accept: "application/json",
      Cookie: cookies()
        .getAll()
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join("; "),
    },
  });

  if (error || !response.ok) {
    if (response.status === 401) throw new NoSessionError();
    throw new FalconError();
  }

  return { session: data };
}
