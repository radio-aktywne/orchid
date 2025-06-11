import { cookies } from "next/headers";
import "server-only";

import { falcon } from "../../../../services/falcon";
import { FalconError } from "../../errors";
import { GetRegistrationFlowInput, GetRegistrationFlowOutput } from "./types";

export async function getRegistrationFlow({
  id,
}: GetRegistrationFlowInput): Promise<GetRegistrationFlowOutput> {
  const { data, error, response } = await falcon.GET(
    "/self-service/registration/flows",
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
