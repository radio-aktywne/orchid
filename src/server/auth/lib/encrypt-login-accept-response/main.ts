import type {
  EncryptLoginAcceptResponseInput,
  EncryptLoginAcceptResponseOutput,
} from "./types";

import { CryptoError } from "../../../crypto/errors";
import { encrypt } from "../../../crypto/lib/encrypt";
import { constants } from "../../constants";
import { EncryptionError } from "../../errors";

export async function encryptLoginAcceptResponse({
  challenge,
  subject,
  traits,
}: EncryptLoginAcceptResponseInput): Promise<EncryptLoginAcceptResponseOutput> {
  const data = {
    challenge: challenge,
    subject: subject,
    traits: traits,
    type: constants.payloadTypes.loginAcceptResponse,
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
