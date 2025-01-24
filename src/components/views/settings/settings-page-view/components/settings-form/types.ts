import { GetSettingsFlowOutput } from "../../../../../../lib/falcon/settings/get-settings-flow";

export type InputNode = {
  attributes: Extract<
    GetSettingsFlowOutput["flow"]["ui"]["nodes"][number]["attributes"],
    { node_type: "input" }
  >;
} & Omit<GetSettingsFlowOutput["flow"]["ui"]["nodes"][number], "attributes">;

export type SettingsFormInput = {
  flow: GetSettingsFlowOutput["flow"];
};
