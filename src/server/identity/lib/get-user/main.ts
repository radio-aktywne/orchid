import type { GetUserInput, GetUserOutput } from "./types";

import { parseUserFromSession } from "./utils";

export async function getUser({
  headers,
}: GetUserInput): Promise<GetUserOutput> {
  const result = await parseUserFromSession(headers);

  const user = result.success ? result.data : null;

  return { user: user };
}
