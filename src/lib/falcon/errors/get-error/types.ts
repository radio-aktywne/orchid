import { components } from "../../../../services/falcon";

export type GetErrorInput = {
  id: string;
};

export type GetErrorOutput = {
  error: components["schemas"]["flowError"];
};
