import * as z from "zod";

export const Schemas = {
  Path: undefined as never,
  Query: z.object({
    flow: z.string().optional().catch(undefined),
  }),
};
