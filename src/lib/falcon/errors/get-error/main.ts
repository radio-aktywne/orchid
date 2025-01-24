import { cookies } from "next/headers";
import "server-only";

import { falcon } from "../../../../services/falcon";
import { FalconError } from "../../errors";
import { GetErrorInput, GetErrorOutput } from "./types";

export async function getError({ id }: GetErrorInput): Promise<GetErrorOutput> {
  const { data, error, response } = await falcon.GET("/self-service/errors", {
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
  });

  if (error || !response.ok) throw new FalconError();

  return { error: data };
}
