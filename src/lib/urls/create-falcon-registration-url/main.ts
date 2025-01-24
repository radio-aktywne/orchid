import "server-only";

import { falconConfig } from "../../../services/falcon";
import {
  CreateFalconRegistrationURLInput,
  CreateFalconRegistrationURLOutput,
} from "./types";

export function createFalconRegistrationURL(
  params: CreateFalconRegistrationURLInput = {},
): CreateFalconRegistrationURLOutput {
  const base = falconConfig.baseUrl;
  const path = "/self-service/registration/browser";
  const query = new URLSearchParams(params).toString();
  const url = query ? `${base}${path}?${query}` : `${base}${path}`;

  return { url: url };
}
