import { z } from "zod";

import { payloadTypes } from "../../constants";

export const authLoginRequestSchema = z.object({
  challenge: z.string(),
  type: z.literal(payloadTypes.authLoginRequest),
});
