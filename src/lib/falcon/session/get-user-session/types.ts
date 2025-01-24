import { components } from "../../../../services/falcon";

export type GetUserSessionInput = {
  [key: string]: never;
};

export type GetUserSessionOutput = {
  session: components["schemas"]["session"];
};
