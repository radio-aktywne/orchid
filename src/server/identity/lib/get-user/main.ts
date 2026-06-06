import type { GetUserInput, GetUserOutput } from "./types";

import { state } from "../../../state/vars/state";
import { Schemas } from "./schemas";

export async function getUser({
  headers,
}: GetUserInput): Promise<GetUserOutput> {
  const { data: session } = await state.current.apis.falcon.toSession({
    headers: { Cookie: headers.get("Cookie") ?? undefined },
  });

  const [id, traits] = await Promise.all([
    Schemas.Id.safeParseAsync(session?.identity?.id),
    Schemas.Traits.safeParseAsync(session?.identity?.traits),
  ]);

  const user =
    id.success && traits.success ? { id: id.data, traits: traits.data } : null;

  return { user: user };
}
