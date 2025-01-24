"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Stack, Text, Title } from "@mantine/core";

import { ErrorDisplayInput } from "./types";

export function ErrorDisplay({ error }: ErrorDisplayInput) {
  const { _ } = useLingui();

  return (
    <Stack align="center">
      <Title>{_(msg({ message: "Error in identity flow" }))}</Title>
      <Text>{error.error?.message}</Text>
    </Stack>
  );
}
