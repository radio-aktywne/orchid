import type { CreateDefaultUrlInput, CreateDefaultUrlOutput } from "./types";

import { createUrl } from "../../../../../common/generic/lib/create-url";

export function createDefaultUrl({}: CreateDefaultUrlInput = {}): CreateDefaultUrlOutput {
  const { url } = createUrl({ path: "/default" });

  return { url: url };
}
