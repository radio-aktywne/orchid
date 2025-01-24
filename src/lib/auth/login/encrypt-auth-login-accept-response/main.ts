import "server-only";

import { encrypt } from "../../../crypto/encrypt";
import { payloadTypes } from "../../constants";
import {
  EncryptAuthLoginAcceptResponseInput,
  EncryptAuthLoginAcceptResponseOutput,
} from "./types";

export async function encryptAuthLoginAcceptResponse({
  challenge,
  subject,
}: EncryptAuthLoginAcceptResponseInput): Promise<EncryptAuthLoginAcceptResponseOutput> {
  const data = {
    challenge: challenge,
    subject: subject,
    type: payloadTypes.authLoginAcceptResponse,
  };
  const { data: encrypted } = await encrypt({ data: data });
  return { data: encrypted };
}
