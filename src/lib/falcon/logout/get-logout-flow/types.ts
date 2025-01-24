import { components } from "../../../../services/falcon";

export type GetLogoutFlowInput = {
  returnTo?: string;
};

export type GetLogoutFlowOutput = {
  flow: components["schemas"]["logoutFlow"];
};
