import type { NextRequest } from "next/server";

import { redirect } from "next/navigation";
import { connection } from "next/server";

import type { RouteInput } from "../../../types";
import type { Keys } from "./types";

import { createUrl } from "../../../../common/generic/lib/create-url";
import { state } from "../../../../server/state/vars/state";

export async function GET(request: NextRequest, {}: RouteInput<Keys.Path>) {
  await connection();

  redirect(
    createUrl({
      host: state.current.config.urls.sunflower.host,
      path: state.current.config.urls.sunflower.path,
      port: state.current.config.urls.sunflower.port,
      scheme: state.current.config.urls.sunflower.scheme,
    }).url,
  );
}
