import type { NextRequest } from "next/server";

import { redirect } from "next/navigation";
import { connection } from "next/server";

import type { RouteInput } from "../../../../types";
import type { Keys } from "./types";

import { createDefaultUrl } from "../../../../../server/core/lib/flow/create-default-url";

export async function GET(request: NextRequest, {}: RouteInput<Keys.Path>) {
  await connection();

  redirect(createDefaultUrl());
}
