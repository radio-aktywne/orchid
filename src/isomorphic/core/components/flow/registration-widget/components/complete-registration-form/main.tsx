"use client";

import { msg } from "@lingui/core/macro";
import { Button, Stack, TextInput } from "@mantine/core";

import type { CompleteRegistrationFormInput } from "./types";

import { useLocalization } from "../../../../../../localization/hooks/use-localization";
import { constants } from "./constants";
import { getInputNode } from "./utils";

export function CompleteRegistrationForm({
  domain,
  flow,
}: CompleteRegistrationFormInput) {
  const { localization } = useLocalization();

  const nodes = {
    csrf: getInputNode(flow, constants.nodes.csrf),
    displayName: getInputNode(flow, constants.nodes.displayName),
    preferredLocale: getInputNode(flow, constants.nodes.preferredLocale),
    profilePictureUrl: getInputNode(flow, constants.nodes.profilePictureUrl),
    provider: getInputNode(flow, constants.nodes.provider),
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
        {domain && (
          <input name={constants.nodes.domain} type="hidden" value={domain} />
        )}
        <input name={constants.nodes.prompt} type="hidden" value="login" />
        <Button
          name={constants.nodes.provider}
          type="submit"
          value={nodes.provider.attributes.value as string}
        >
          {localization.localize(msg({ message: "Continue" }))}
        </Button>
      </Stack>
    </form>
  );
}
