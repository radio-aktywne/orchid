import { CreateLogoutPathInput, CreateLogoutPathOutput } from "./types";

export function createLogoutPath(
  params: CreateLogoutPathInput = {},
): CreateLogoutPathOutput {
  const base = "/logout";
  const query = new URLSearchParams(params).toString();
  const path = query ? `${base}?${query}` : base;

  return { path: path };
}
