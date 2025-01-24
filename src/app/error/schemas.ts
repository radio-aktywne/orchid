import { z } from "zod";

export const searchParamsSchema = z.object({
  id: z.string(),
});
