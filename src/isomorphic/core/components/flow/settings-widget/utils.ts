import type { SettingsFlow } from "../../../../../common/apis/falcon/types";
import type { InputNode } from "./types";

export function getInputNode(flow: SettingsFlow, name: string) {
  return flow.ui.nodes.find(
    (node) =>
      node.attributes.node_type === "input" && node.attributes.name === name,
  ) as InputNode;
}
