import { components } from "../../../../services/falcon";

export type GetSettingsFlowInput = {
  id: string;
};

export type GetSettingsFlowOutput = {
  flow: components["schemas"]["settingsFlow"];
};
