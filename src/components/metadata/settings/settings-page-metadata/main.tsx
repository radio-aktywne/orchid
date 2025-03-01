"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { SettingsPageMetadataInput } from "./types";

export function SettingsPageMetadata({}: SettingsPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "orchid" })),
    title: _(msg({ message: "Settings • orchid" })),
  });

  return null;
}
