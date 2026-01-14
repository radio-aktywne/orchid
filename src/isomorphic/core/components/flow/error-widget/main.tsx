"use client";

import { msg } from "@lingui/core/macro";
import { Stack, Text, Title } from "@mantine/core";

import type { ErrorWidgetInput } from "./types";

import { useLocalization } from "../../../../../isomorphic/localization/hooks/use-localization";

export function ErrorWidget({ error }: ErrorWidgetInput) {
  const { localization } = useLocalization();

  if (!error)
    return (
      <Title>
        {localization.localize(msg({ message: "Error not found" }))}
      </Title>
    );

  const message = error.error?.message as string | undefined;

  return (
    <Stack align="center">
      <Title>
        {localization.localize(msg({ message: "Error in identity flow" }))}
      </Title>
      {message && <Text>{message}</Text>}
    </Stack>
  );
}
