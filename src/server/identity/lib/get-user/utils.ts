import { IdentitySchemas } from "../../../../common/identity/schemas";
import { state } from "../../../state/vars/state";

export async function parseUserFromSession(headers: Headers) {
  const { data: session } = await state.current.apis.falcon.toSession({
    headers: { Cookie: headers.get("Cookie") ?? undefined },
  });

  const user = { id: session?.identity?.id, traits: session?.identity?.traits };
  return await IdentitySchemas.User.safeParseAsync(user);
}
