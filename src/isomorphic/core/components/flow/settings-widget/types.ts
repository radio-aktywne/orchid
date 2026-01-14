import type { OverrideProperties } from "type-fest";

import type {
  SettingsFlow,
  UiNode,
  UiNodeInputAttributes,
} from "../../../../../common/apis/falcon/types";

export type InputNode = OverrideProperties<
  UiNode,
  {
    attributes: UiNodeInputAttributes;
  }
>;

export type SettingsWidgetInput = {
  flow: SettingsFlow;
};
