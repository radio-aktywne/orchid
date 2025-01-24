import "server-only";

import { CreateAuthLoginURLInput, CreateAuthLoginURLOutput } from "./types";

export function createAuthLoginURL(
  params: CreateAuthLoginURLInput = {},
): CreateAuthLoginURLOutput {
  const base = process.env.ORCHID__URLS__PUBLIC || "http://localhost:20120";
  const path = "/auth/login";
  const query = new URLSearchParams(params).toString();
  const url = query ? `${base}${path}?${query}` : `${base}${path}`;

  return { url: url };
}
