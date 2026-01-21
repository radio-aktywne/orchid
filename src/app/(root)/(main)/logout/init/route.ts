import type { NextRequest } from "next/server";

import { redirect } from "next/navigation";
import { connection } from "next/server";

import type { RouteInput } from "../../../../types";
import type { Keys } from "./types";

import { createUrl } from "../../../../../common/generic/lib/create-url";

export async function GET(request: NextRequest, {}: RouteInput<Keys.Path>) {
  await connection();

  redirect(
    createUrl({
      path: "/logout",
      query: Object.fromEntries(request.nextUrl.searchParams),
    }).url,
  );
}
