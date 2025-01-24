import { z } from "zod";

export const searchParamsSchema = z.object({
  return_to: z.string().optional(),
});
