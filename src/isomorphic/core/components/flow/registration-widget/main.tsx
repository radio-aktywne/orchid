import type { RegistrationWidgetInput } from "./types";

import { CompleteRegistrationForm } from "./components/complete-registration-form";
import { RegistrationForm } from "./components/registration-form";

export function RegistrationWidget({ domain, flow }: RegistrationWidgetInput) {
  return flow.active ? (
    <CompleteRegistrationForm domain={domain} flow={flow} />
  ) : (
    <RegistrationForm domain={domain} flow={flow} />
  );
}
