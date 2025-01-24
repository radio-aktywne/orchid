import { redirect } from "next/navigation";

import { getLoginFlow } from "../../../../lib/falcon/login/get-login-flow";
import { createErrorPath } from "../../../../lib/urls/create-error-path";

export async function safeGetLoginFlow(
  ...args: Parameters<typeof getLoginFlow>
) {
  try {
    return await getLoginFlow(...args);
  } catch {
    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }
}
