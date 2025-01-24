import "server-only";

import {
  CreateCrocusLogoutAcceptURLInput,
  CreateCrocusLogoutAcceptURLOutput,
} from "./types";
import { getCrocusURL } from "./utils";

export function createCrocusLogoutAcceptURL({
  token,
}: CreateCrocusLogoutAcceptURLInput): CreateCrocusLogoutAcceptURLOutput {
  const base = getCrocusURL();
  const path = "/logout/accept";
  const query = new URLSearchParams({ token: token }).toString();
  const url = query ? `${base}${path}?${query}` : `${base}${path}`;

  return { url: url };
}
