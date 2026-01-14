import * as z from "zod";

export const Schemas = {
  Path: undefined as never,
  Query: z.object({
    return_to: z.string().optional().catch(undefined),
  }),
};
