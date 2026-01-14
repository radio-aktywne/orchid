import type {
  EncryptLogoutAcceptResponseInput,
  EncryptLogoutAcceptResponseOutput,
} from "./types";

import { CryptoError } from "../../../crypto/errors";
import { encrypt } from "../../../crypto/lib/encrypt";
import { constants } from "../../constants";
import { EncryptionError } from "../../errors";

export async function encryptLogoutAcceptResponse({
  challenge,
}: EncryptLogoutAcceptResponseInput): Promise<EncryptLogoutAcceptResponseOutput> {
  const data = {
    challenge: challenge,
    type: constants.payloadTypes.logoutAcceptResponse,
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
