import { cookies } from "next/headers";
import "server-only";

import { falcon } from "../../../../services/falcon";
import { FalconError } from "../../errors";
import { GetLoginFlowInput, GetLoginFlowOutput } from "./types";

export async function getLoginFlow({
  id,
}: GetLoginFlowInput): Promise<GetLoginFlowOutput> {
  const { data, error, response } = await falcon.GET(
    "/self-service/login/flows",
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        Cookie: cookies()
          .getAll()
          .map((cookie) => `${cookie.name}=${cookie.value}`)
          .join("; "),
      },
      params: {
        query: { id: id },
      },
    },
  );

  if (error || !response.ok) throw new FalconError();

  return { flow: data };
}
