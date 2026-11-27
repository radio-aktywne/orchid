import type { NextRequest } from "next/server";

import { connection } from "next/server";

import type { RouteInput } from "../../../../types";
import type { Keys } from "./types";

import { createDefaultUrl } from "../../../../../common/core/lib/flow/create-default-url";
import { localizedRedirect } from "../../../../../server/routing/lib/localized-redirect";

export async function GET(request: NextRequest, {}: RouteInput<Keys.Path>) {
  await connection();

  return await localizedRedirect({ href: createDefaultUrl().url });
}
