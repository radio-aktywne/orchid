import { z } from "zod";

export const searchParamsSchema = z.object({
  flow: z.string(),
});
