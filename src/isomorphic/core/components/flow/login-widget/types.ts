import type { OverrideProperties } from "type-fest";

import type {
  LoginFlow,
  UiNode,
  UiNodeInputAttributes,
} from "../../../../../common/apis/falcon/types";

export type InputNode = OverrideProperties<
  UiNode,
  {
    attributes: UiNodeInputAttributes;
  }
>;

export type LoginWidgetInput = {
  domain?: null | string;
  flow: LoginFlow;
};
