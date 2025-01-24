import "server-only";

import { encrypt } from "../../../crypto/encrypt";
import { payloadTypes } from "../../constants";
import {
  EncryptAuthLoginDenyResponseInput,
  EncryptAuthLoginDenyResponseOutput,
} from "./types";

export async function encryptAuthLoginDenyResponse({
  challenge,
  error,
}: EncryptAuthLoginDenyResponseInput): Promise<EncryptAuthLoginDenyResponseOutput> {
  const data = {
    challenge: challenge,
    error: error,
    type: payloadTypes.authLoginDenyResponse,
  };
  const { data: encrypted } = await encrypt({ data: data });
  return { data: encrypted };
}
