import { msg } from "@lingui/core/macro";
import { connection } from "next/server";

import type {
  PageInput,
  PageMetadataInput,
  PageMetadataUtilityInput,
} from "../../../types";
import type { Keys } from "./types";

import { Metadata } from "../../../../isomorphic/metadata/components/metadata";
import { createMetadata } from "../../../../server/metadata/lib/create-metadata";
import { RegistrationPageView } from "./page.view";
import { Schemas } from "./schemas";

async function getTitle({}: PageMetadataUtilityInput<
  typeof Schemas.Path,
  typeof Schemas.Query
>) {
  return msg({ message: "Registration • orchid" });
}

export async function generateMetadata({
  searchParams,
}: PageMetadataInput<Keys.Path, Keys.Query>) {
  const queryParameters = await Schemas.Query.parseAsync(await searchParams);

  return await createMetadata({
    title: await getTitle({ queryParameters: queryParameters }),
  });
}

export default async function RegistrationPage({
  searchParams,
}: PageInput<Keys.Path, Keys.Query>) {
  await connection();

  const queryParameters = await Schemas.Query.parseAsync(await searchParams);

  return (
    <>
      <Metadata title={await getTitle({ queryParameters: queryParameters })} />
      <RegistrationPageView queryParameters={queryParameters} />
    </>
  );
}
