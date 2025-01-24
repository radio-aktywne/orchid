import { CompleteRegistrationForm } from "./components/complete-registration-form";
import { RegistrationForm } from "./components/registration-form";
import { RegistrationPageViewInput } from "./types";
import { safeGetRegistrationFlow } from "./utils";

export async function RegistrationPageView({
  flow: id,
}: RegistrationPageViewInput) {
  const { flow } = await safeGetRegistrationFlow({ id: id });

  return flow.active === undefined ? (
    <RegistrationForm
      domain={process.env.ORCHID__OIDC__GOOGLE__DOMAIN}
      flow={flow}
    />
  ) : (
    <CompleteRegistrationForm
      domain={process.env.ORCHID__OIDC__GOOGLE__DOMAIN}
      flow={flow}
    />
  );
}
