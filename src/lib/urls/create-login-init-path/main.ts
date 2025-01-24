import { CreateLoginInitPathInput, CreateLoginInitPathOutput } from "./types";

export function createLoginInitPath(
  params: CreateLoginInitPathInput = {},
): CreateLoginInitPathOutput {
  const base = "/login/init";
  const query = new URLSearchParams(params).toString();
  const path = query ? `${base}?${query}` : base;

  return { path: path };
}
