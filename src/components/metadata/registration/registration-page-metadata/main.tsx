"use client";

import { msg } from "@lingui/core/macro";
import { useLingui } from "@lingui/react";

import { useDocumentMetadata } from "../../../../hooks/use-document-metadata";
import { RegistrationPageMetadataInput } from "./types";

export function RegistrationPageMetadata({}: RegistrationPageMetadataInput) {
  const { _ } = useLingui();

  useDocumentMetadata({
    description: _(msg({ message: "orchid" })),
    title: _(msg({ message: "Registration • orchid" })),
  });

  return null;
}
