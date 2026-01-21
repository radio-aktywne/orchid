import "server-only";
import * as z from "zod";

export const ConfigSchemas = {
  Config: z
    .object({
      apis: z
        .object({
          falcon: z
            .object({
              host: z.string().default("localhost"),
              path: z.string().nullish(),
              port: z.coerce
                .number()
                .min(0)
                .max(65535)
                .nullish()
                .default(20100),
              scheme: z.string().default("http"),
            })
            .prefault({}),
          icanhazdadjoke: z
            .object({
              host: z.string().default("icanhazdadjoke.com"),
              path: z.string().nullish(),
              port: z.coerce.number().min(0).max(65535).nullish(),
              scheme: z.string().default("https"),
            })
            .prefault({}),
        })
        .prefault({}),
      debug: z.stringbool().default(true),
      oidc: z
        .object({
          google: z
            .object({
              domain: z.string().nullish(),
            })
            .prefault({}),
        })
        .prefault({}),
      secrets: z
        .object({
          shared: z
            .string()
            .length(32)
            .default("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"),
        })
        .prefault({}),
      server: z
        .object({
          host: z.string().default("0.0.0.0"),
          port: z.coerce.number().min(0).max(65535).default(20120),
        })
        .prefault({}),
      urls: z
        .object({
          crocus: z
            .object({
              host: z.string().default("localhost"),
              path: z.string().nullish(),
              port: z.coerce
                .number()
                .min(0)
                .max(65535)
                .nullish()
                .default(20020),
              scheme: z.string().default("http"),
            })
            .prefault({}),
          falcon: z
            .object({
              host: z.string().default("localhost"),
              path: z.string().nullish(),
              port: z.coerce
                .number()
                .min(0)
                .max(65535)
                .nullish()
                .default(20100),
              scheme: z.string().default("http"),
            })
            .prefault({}),
        })
        .prefault({}),
    })
    .prefault({}),
};
