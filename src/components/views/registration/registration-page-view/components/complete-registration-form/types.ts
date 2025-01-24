import { GetRegistrationFlowOutput } from "../../../../../../lib/falcon/registration/get-registration-flow";

export type InputNode = {
  attributes: Extract<
    GetRegistrationFlowOutput["flow"]["ui"]["nodes"][number]["attributes"],
    { node_type: "input" }
  >;
} & Omit<
  GetRegistrationFlowOutput["flow"]["ui"]["nodes"][number],
  "attributes"
>;

export type CompleteRegistrationFormInput = {
  domain?: string;
  flow: GetRegistrationFlowOutput["flow"];
};
