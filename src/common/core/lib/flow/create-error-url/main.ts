import type { CreateErrorUrlInput, CreateErrorUrlOutput } from "./types";

import { createUrl } from "../../../../../common/generic/lib/create-url";
import { constants } from "./constants";

export function createErrorUrl({
  id,
}: CreateErrorUrlInput = {}): CreateErrorUrlOutput {
  const { url } = createUrl({
    path: "/error",
    query: { id: id ?? constants.defaultErrorId },
  });

  return { url: url };
}
