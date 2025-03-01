import { redirect } from "next/navigation";

import { NoSessionError } from "../../lib/falcon/errors";
import { getLogoutFlow } from "../../lib/falcon/logout/get-logout-flow";
import { createErrorPath } from "../../lib/urls/create-error-path";

export async function safeGetLogoutFlow(
  ...args: Parameters<typeof getLogoutFlow>
) {
  try {
    return await getLogoutFlow(...args);
  } catch (error) {
    if (error instanceof NoSessionError) {
      const returnTo = args[0].returnTo;
      const url = process.env.ORCHID__URLS__PUBLIC || "http://localhost:20120";
      redirect(returnTo?.startsWith(url) ? returnTo : "/default");
    }

    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }
}
