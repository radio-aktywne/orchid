import type { RegistrationFlow } from "../../../../../common/apis/falcon/types";

export type RegistrationWidgetInput = {
  domain?: null | string;
  flow: RegistrationFlow;
};
