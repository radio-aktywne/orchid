import { components } from "../../../../services/falcon";

export type GetRegistrationFlowInput = {
  id: string;
};

export type GetRegistrationFlowOutput = {
  flow: components["schemas"]["registrationFlow"];
};
