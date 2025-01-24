import "server-only";

import { encrypt } from "../../../crypto/encrypt";
import { payloadTypes } from "../../constants";
import {
  EncryptAuthLogoutDenyResponseInput,
  EncryptAuthLogoutDenyResponseOutput,
} from "./types";

export async function encryptAuthLogoutDenyResponse({
  challenge,
}: EncryptAuthLogoutDenyResponseInput): Promise<EncryptAuthLogoutDenyResponseOutput> {
  const data = {
    challenge: challenge,
    type: payloadTypes.authLogoutDenyResponse,
  };
  const { data: encrypted } = await encrypt({ data: data });
  return { data: encrypted };
}
