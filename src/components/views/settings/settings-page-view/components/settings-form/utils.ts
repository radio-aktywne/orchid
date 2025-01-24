import { InputNode, SettingsFormInput } from "./types";

export function getInputNode(flow: SettingsFormInput["flow"], name: string) {
  return flow.ui.nodes.find(
    (node) =>
      node.attributes.node_type === "input" && node.attributes.name === name,
  ) as InputNode;
}
