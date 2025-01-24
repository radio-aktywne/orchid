import { CompleteRegistrationFormInput, InputNode } from "./types";

export function getInputNode(
  flow: CompleteRegistrationFormInput["flow"],
  name: string,
) {
  return flow.ui.nodes.find(
    (node) =>
      node.attributes.node_type === "input" && node.attributes.name === name,
  ) as InputNode;
}
