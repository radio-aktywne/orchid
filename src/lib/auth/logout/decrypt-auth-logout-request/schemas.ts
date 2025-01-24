import { z } from "zod";

import { payloadTypes } from "../../constants";

export const authLogoutRequestSchema = z.object({
  challenge: z.string(),
  type: z.literal(payloadTypes.authLogoutRequest),
});
