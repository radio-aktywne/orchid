import type {
  EncryptLogoutDenyResponseInput,
  EncryptLogoutDenyResponseOutput,
} from "./types";

import { CryptoError } from "../../../crypto/errors";
import { encrypt } from "../../../crypto/lib/encrypt";
import { constants } from "../../constants";
import { EncryptionError } from "../../errors";

export async function encryptLogoutDenyResponse({
  challenge,
}: EncryptLogoutDenyResponseInput): Promise<EncryptLogoutDenyResponseOutput> {
  const data = {
    challenge: challenge,
    type: constants.payloadTypes.logoutDenyResponse,
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
