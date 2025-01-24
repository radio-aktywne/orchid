import { GetLoginFlowOutput } from "../../../../../../lib/falcon/login/get-login-flow";

export type InputNode = {
  attributes: Extract<
    GetLoginFlowOutput["flow"]["ui"]["nodes"][number]["attributes"],
    { node_type: "input" }
  >;
} & Omit<GetLoginFlowOutput["flow"]["ui"]["nodes"][number], "attributes">;

export type LoginFormInput = {
  domain?: string;
  flow: GetLoginFlowOutput["flow"];
};
