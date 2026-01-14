"use client";

import { msg } from "@lingui/core/macro";
import { Button, Stack, TextInput } from "@mantine/core";

import type { SettingsWidgetInput } from "./types";

import { useLocalization } from "../../../../localization/hooks/use-localization";
import { constants } from "./constants";
import { getInputNode } from "./utils";

export function SettingsWidget({ flow }: SettingsWidgetInput) {
  const { localization } = useLocalization();

  const nodes = {
    csrf: getInputNode(flow, constants.nodes.csrf),
    displayName: getInputNode(flow, constants.nodes.displayName),
    method: getInputNode(flow, constants.nodes.method),
    preferredLocale: getInputNode(flow, constants.nodes.preferredLocale),
    profilePictureUrl: getInputNode(flow, constants.nodes.profilePictureUrl),
  };

  return (
    <form action={flow.ui.action} method={flow.ui.method}>
      <Stack>
        <input
          name={constants.nodes.csrf}
          type="hidden"
          value={nodes.csrf.attributes.value as string}
        />
        <TextInput
          defaultValue={nodes.displayName.attributes.value as string}
          label={localization.localize(msg({ message: "Display Name" }))}
          name={constants.nodes.displayName}
          required={nodes.displayName.attributes.required}
          type={nodes.displayName.attributes.type}
        />
        <TextInput
          autoComplete={nodes.profilePictureUrl.attributes.autocomplete}
          defaultValue={nodes.profilePictureUrl.attributes.value as string}
          label={localization.localize(msg({ message: "Profile Picture URL" }))}
          name={constants.nodes.profilePictureUrl}
          required={nodes.profilePictureUrl.attributes.required}
          type={nodes.profilePictureUrl.attributes.type}
        />
        <TextInput
          defaultValue={nodes.preferredLocale.attributes.value as string}
          label={localization.localize(msg({ message: "Preferred Locale" }))}
          name={constants.nodes.preferredLocale}
          required={nodes.preferredLocale.attributes.required}
          type={nodes.preferredLocale.attributes.type}
        />
        <Button
          name={constants.nodes.method}
          type="submit"
          value={nodes.method.attributes.value as string}
        >
          {localization.localize(msg({ message: "Save" }))}
        </Button>
      </Stack>
    </form>
  );
}
