import type { NextRequest } from "next/server";

import { connection } from "next/server";

import type { RouteInput } from "../../../../types";
import type { Keys } from "./types";

import { createUrl } from "../../../../../common/generic/lib/create-url";
import { localizedRedirect } from "../../../../../server/routing/lib/localized-redirect";

export async function GET(request: NextRequest, {}: RouteInput<Keys.Path>) {
  await connection();

  return await localizedRedirect({
    href: createUrl({
      path: "/logout",
      query: Object.fromEntries(request.nextUrl.searchParams),
    }).url,
  });
}
