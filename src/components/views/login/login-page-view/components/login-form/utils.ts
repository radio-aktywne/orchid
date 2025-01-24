import { InputNode, LoginFormInput } from "./types";

export function getInputNode(flow: LoginFormInput["flow"], name: string) {
  return flow.ui.nodes.find(
    (node) =>
      node.attributes.node_type === "input" && node.attributes.name === name,
  ) as InputNode;
}
