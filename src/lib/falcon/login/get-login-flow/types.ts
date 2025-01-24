import { components } from "../../../../services/falcon";

export type GetLoginFlowInput = {
  id: string;
};

export type GetLoginFlowOutput = {
  flow: components["schemas"]["loginFlow"];
};
