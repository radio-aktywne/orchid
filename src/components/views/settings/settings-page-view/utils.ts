import { redirect } from "next/navigation";

import { getSettingsFlow } from "../../../../lib/falcon/settings/get-settings-flow";
import { createErrorPath } from "../../../../lib/urls/create-error-path";

export async function safeGetSettingsFlow(
  ...args: Parameters<typeof getSettingsFlow>
) {
  try {
    return await getSettingsFlow(...args);
  } catch {
    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }
}
