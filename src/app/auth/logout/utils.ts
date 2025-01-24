import { redirect } from "next/navigation";

import { decryptAuthLogoutRequest } from "../../../lib/auth/logout/decrypt-auth-logout-request";
import { NoSessionError } from "../../../lib/falcon/errors";
import { getUserSession } from "../../../lib/falcon/session/get-user-session";
import { createErrorPath } from "../../../lib/urls/create-error-path";

export async function safeDecryptAuthLogoutRequest(
  ...args: Parameters<typeof decryptAuthLogoutRequest>
) {
  try {
    return await decryptAuthLogoutRequest(...args);
  } catch {
    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }
}

export async function safeGetUserSession(
  ...args: Parameters<typeof getUserSession>
) {
  try {
    return await getUserSession(...args);
  } catch (error) {
    if (error instanceof NoSessionError) {
      return { session: null };
    }

    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }
}
