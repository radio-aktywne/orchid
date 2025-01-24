import { CreateLogoutInitPathInput, CreateLogoutInitPathOutput } from "./types";

export function createLogoutInitPath(
  params: CreateLogoutInitPathInput = {},
): CreateLogoutInitPathOutput {
  const base = "/logout/init";
  const query = new URLSearchParams(params).toString();
  const path = query ? `${base}?${query}` : base;

  return { path: path };
}
