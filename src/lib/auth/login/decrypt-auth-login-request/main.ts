import "server-only";

import { decrypt } from "../../../crypto/decrypt";
import { SchemaValidationError } from "./errors";
import { authLoginRequestSchema } from "./schemas";
import {
  DecryptAuthLoginRequestInput,
  DecryptAuthLoginRequestOutput,
} from "./types";

export async function decryptAuthLoginRequest({
  data,
}: DecryptAuthLoginRequestInput): Promise<DecryptAuthLoginRequestOutput> {
  const { data: decrypted } = await decrypt({ data: data });
  const { data: parsed, error } = authLoginRequestSchema.safeParse(decrypted);
  if (error) throw new SchemaValidationError();
  return { challenge: parsed.challenge };
}
