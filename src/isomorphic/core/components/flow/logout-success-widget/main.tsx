"use client";

import { msg } from "@lingui/core/macro";
import { Button, Stack, Title } from "@mantine/core";
import { MdApps } from "react-icons/md";

import type { LogoutSuccessWidgetInput } from "./types";

import { useLocalization } from "../../../../../isomorphic/localization/hooks/use-localization";

export function LogoutSuccessWidget({ urls }: LogoutSuccessWidgetInput) {
  const { localization } = useLocalization();

  return (
    <Stack align="center">
      <Title ta="center">
        {localization.localize(msg({ message: "Logged out" }))}
      </Title>
      <Button component="a" href={urls.sunflower} leftSection={<MdApps />}>
        {localization.localize(msg({ message: "Go to apps" }))}
      </Button>
    </Stack>
  );
}
