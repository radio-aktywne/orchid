import type {
  EncryptLoginDenyResponseInput,
  EncryptLoginDenyResponseOutput,
} from "./types";

import { CryptoError } from "../../../crypto/errors";
import { encrypt } from "../../../crypto/lib/encrypt";
import { constants } from "../../constants";
import { EncryptionError } from "../../errors";

export async function encryptLoginDenyResponse({
  challenge,
  error,
}: EncryptLoginDenyResponseInput): Promise<EncryptLoginDenyResponseOutput> {
  const data = {
    challenge: challenge,
    error: error,
    type: constants.payloadTypes.loginDenyResponse,
  };

  const { data: encrypted } = await (async () => {
    try {
      return await encrypt({ data: data });
    } catch (error) {
      if (error instanceof CryptoError)
        throw new EncryptionError("Encryption failed", { cause: error });

      throw error;
    }
  })();

  return { data: encrypted };
}
