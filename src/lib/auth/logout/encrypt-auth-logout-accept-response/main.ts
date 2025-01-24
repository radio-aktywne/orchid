import "server-only";

import { encrypt } from "../../../crypto/encrypt";
import { payloadTypes } from "../../constants";
import {
  EncryptAuthLogoutAcceptResponseInput,
  EncryptAuthLogoutAcceptResponseOutput,
} from "./types";

export async function encryptAuthLogoutAcceptResponse({
  challenge,
}: EncryptAuthLogoutAcceptResponseInput): Promise<EncryptAuthLogoutAcceptResponseOutput> {
  const data = {
    challenge: challenge,
    type: payloadTypes.authLogoutAcceptResponse,
  };
  const { data: encrypted } = await encrypt({ data: data });
  return { data: encrypted };
}
