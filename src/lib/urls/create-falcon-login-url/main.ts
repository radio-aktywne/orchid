import "server-only";

import { falconConfig } from "../../../services/falcon";
import { CreateFalconLoginURLInput, CreateFalconLoginURLOutput } from "./types";

export function createFalconLoginURL(
  params: CreateFalconLoginURLInput = {},
): CreateFalconLoginURLOutput {
  const base = falconConfig.baseUrl;
  const path = "/self-service/login/browser";
  const query = new URLSearchParams(params).toString();
  const url = query ? `${base}${path}?${query}` : `${base}${path}`;

  return { url: url };
}
