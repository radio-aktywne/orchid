import "server-only";

import { decrypt } from "../../../crypto/decrypt";
import { SchemaValidationError } from "./errors";
import { authLogoutRequestSchema } from "./schemas";
import {
  DecryptAuthLogoutRequestInput,
  DecryptAuthLogoutRequestOutput,
} from "./types";

export async function decryptAuthLogoutRequest({
  data,
}: DecryptAuthLogoutRequestInput): Promise<DecryptAuthLogoutRequestOutput> {
  const { data: decrypted } = await decrypt({ data: data });
  const { data: parsed, error } = authLogoutRequestSchema.safeParse(decrypted);
  if (error) throw new SchemaValidationError();
  return { challenge: parsed.challenge };
}
