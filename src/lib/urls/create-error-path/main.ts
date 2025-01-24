import { CreateErrorPathInput, CreateErrorPathOutput } from "./types";

export function createErrorPath({
  id,
}: CreateErrorPathInput): CreateErrorPathOutput {
  const base = "/error";
  const query = new URLSearchParams({ id: id }).toString();
  const path = query ? `${base}?${query}` : base;

  return { path: path };
}
