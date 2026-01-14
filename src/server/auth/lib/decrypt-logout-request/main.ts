import type {
  DecryptLogoutRequestInput,
  DecryptLogoutRequestOutput,
} from "./types";

import { CryptoError } from "../../../crypto/errors";
import { decrypt } from "../../../crypto/lib/decrypt";
import { DecryptionError } from "../../errors";
import { Schemas } from "./schemas";

export async function decryptLogoutRequest({
  data,
}: DecryptLogoutRequestInput): Promise<DecryptLogoutRequestOutput> {
  const { data: decrypted } = await (async () => {
    try {
      return await decrypt({ data: data });
    } catch (error) {
      if (error instanceof CryptoError)
        throw new DecryptionError("Decryption failed", { cause: error });

      throw error;
    }
  })();

  const { data: parsed, error } = Schemas.Request.safeParse(decrypted);

  if (error)
    throw new DecryptionError("Decrypted data is invalid", { cause: error });

  return { challenge: parsed.challenge };
}
