import "server-only";

import { CreateAuthLogoutURLInput, CreateAuthLogoutURLOutput } from "./types";

export function createAuthLogoutURL(
  params: CreateAuthLogoutURLInput = {},
): CreateAuthLogoutURLOutput {
  const base = process.env.ORCHID__URLS__PUBLIC || "http://localhost:20120";
  const path = "/auth/logout";
  const query = new URLSearchParams(params).toString();
  const url = query ? `${base}${path}?${query}` : `${base}${path}`;

  return { url: url };
}
