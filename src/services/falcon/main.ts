import createClient, { ClientOptions } from "openapi-fetch";
import "server-only";

import { paths } from "./types";

const scheme = process.env.ORCHID__FALCON__PUBLIC__SCHEME || "http";
const host = process.env.ORCHID__FALCON__PUBLIC__HOST || "localhost";
const port =
  process.env.ORCHID__FALCON__PUBLIC__PORT === undefined
    ? 20100
    : process.env.ORCHID__FALCON__PUBLIC__PORT;
const path = (process.env.ORCHID__FALCON__PUBLIC__PATH || "")
  // Ensure path starts with a slash
  .replace(/^(?!\/)(.*)$/, "/$1")
  // Remove trailing slashes
  .replace(/\/+$/, "");
const url = `${scheme}://${host}${port ? `:${port}` : ""}${path}`;

export const falconConfig = {
  baseUrl: url,
} satisfies ClientOptions;

export const falcon = createClient<paths>(falconConfig);
