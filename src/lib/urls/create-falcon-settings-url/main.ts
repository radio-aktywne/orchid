import "server-only";

import { falconConfig } from "../../../services/falcon";
import {
  CreateFalconSettingsURLInput,
  CreateFalconSettingsURLOutput,
} from "./types";

export function createFalconSettingsURL(
  params: CreateFalconSettingsURLInput = {},
): CreateFalconSettingsURLOutput {
  const base = falconConfig.baseUrl;
  const path = "/self-service/settings/browser";
  const query = new URLSearchParams(params).toString();
  const url = query ? `${base}${path}?${query}` : `${base}${path}`;

  return { url: url };
}
