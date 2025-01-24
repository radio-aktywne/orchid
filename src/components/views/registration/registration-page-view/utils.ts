import { redirect } from "next/navigation";

import { getRegistrationFlow } from "../../../../lib/falcon/registration/get-registration-flow";
import { createErrorPath } from "../../../../lib/urls/create-error-path";

export async function safeGetRegistrationFlow(
  ...args: Parameters<typeof getRegistrationFlow>
) {
  try {
    return await getRegistrationFlow(...args);
  } catch {
    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }
}
