import { cookies } from "next/headers";
import "server-only";

import { falcon } from "../../../../services/falcon";
import { FalconError } from "../../errors";
import { GetSettingsFlowInput, GetSettingsFlowOutput } from "./types";

export async function getSettingsFlow({
  id,
}: GetSettingsFlowInput): Promise<GetSettingsFlowOutput> {
  const { data, error, response } = await falcon.GET(
    "/self-service/settings/flows",
    {
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
