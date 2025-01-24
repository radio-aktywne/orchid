import "server-only";

import {
  CreateCrocusLoginAcceptURLInput,
  CreateCrocusLoginAcceptURLOutput,
} from "./types";
import { getCrocusURL } from "./utils";

export function createCrocusLoginAcceptURL({
  token,
}: CreateCrocusLoginAcceptURLInput): CreateCrocusLoginAcceptURLOutput {
  const base = getCrocusURL();
  const path = "/login/accept";
  const query = new URLSearchParams({ token: token }).toString();
  const url = query ? `${base}${path}?${query}` : `${base}${path}`;

  return { url: url };
}
