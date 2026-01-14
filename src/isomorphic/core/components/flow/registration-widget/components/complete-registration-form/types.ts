import type { OverrideProperties } from "type-fest";

import type {
  RegistrationFlow,
  UiNode,
  UiNodeInputAttributes,
} from "../../../../../../../common/apis/falcon/types";

export type InputNode = OverrideProperties<
  UiNode,
  {
    attributes: UiNodeInputAttributes;
  }
>;

export type CompleteRegistrationFormInput = {
  domain?: null | string;
  flow: RegistrationFlow;
};
