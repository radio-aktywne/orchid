import { redirect } from "next/navigation";

import { decryptAuthLoginRequest } from "../../../lib/auth/login/decrypt-auth-login-request";
import { NoSessionError } from "../../../lib/falcon/errors";
import { getUserSession } from "../../../lib/falcon/session/get-user-session";
import { createErrorPath } from "../../../lib/urls/create-error-path";

export async function safeDecryptAuthLoginRequest(
  ...args: Parameters<typeof decryptAuthLoginRequest>
) {
  try {
    return await decryptAuthLoginRequest(...args);
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
