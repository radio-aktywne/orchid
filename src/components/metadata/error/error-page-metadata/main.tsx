"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { ErrorPageMetadataInput } from "./types";

export function ErrorPageMetadata({}: ErrorPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "orchid" })),
    title: _(msg({ message: "Error • orchid" })),
  });

  return null;
}
