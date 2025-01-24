import { redirect } from "next/navigation";

import { createErrorPath } from "../../../../lib/urls/create-error-path";
import { LoginForm } from "./components/login-form";
import { LoginPageViewInput } from "./types";
import { safeGetLoginFlow } from "./utilts";

export async function LoginPageView({ flow: id }: LoginPageViewInput) {
  const { flow } = await safeGetLoginFlow({ id: id });

  if (flow.active !== undefined) {
    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }

  return (
    <LoginForm domain={process.env.ORCHID__OIDC__GOOGLE__DOMAIN} flow={flow} />
  );
}
