import { trimEnd } from "es-toolkit/string";

import type { CreateErrorUrlInput, CreateErrorUrlOutput } from "./types";

import { createUrl } from "../../../../../common/generic/lib/create-url";
import { state } from "../../../../state/vars/state";
import { constants } from "./constants";

export function createErrorUrl({
  id,
}: CreateErrorUrlInput = {}): CreateErrorUrlOutput {
  return createUrl({
    path: `${trimEnd(state.current.config.urls.orchid.path ?? "", "/")}/error`,
    query: { id: id ?? constants.defaultErrorId },
  });
}
