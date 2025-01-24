import { GetErrorOutput } from "../../../../../../lib/falcon/errors/get-error";

export type ErrorDisplayInput = {
  error: GetErrorOutput["error"];
};
