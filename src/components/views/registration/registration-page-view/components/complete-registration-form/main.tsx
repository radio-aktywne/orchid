"use client";

import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { Button, Stack, TextInput } from "@mantine/core";

import { CompleteRegistrationFormInput } from "./types";
import { getInputNode } from "./utils";

export function CompleteRegistrationForm({
  domain,
  flow,
}: CompleteRegistrationFormInput) {
  const { _ } = useLingui();

  const csrfTokenNode = getInputNode(flow, "csrf_token");
  const displayNameNode = getInputNode(flow, "traits.names.display");
  const profilePictureURLNode = getInputNode(
    flow,
    "traits.pictures.profile.url",
  );
  const preferredLocaleNode = getInputNode(flow, "traits.locales.preferred");
  const providerNode = getInputNode(flow, "provider");

  return (
    <form action={flow.ui.action} method={flow.ui.method}>
      <Stack>
        <input
          name={csrfTokenNode.attributes.name}
          type="hidden"
          value={csrfTokenNode.attributes.value as string}
        />
        <TextInput
          defaultValue={displayNameNode.attributes.value as string}
          label={_(msg({ message: "Display Name" }))}
          name={displayNameNode.attributes.name}
          required={displayNameNode.attributes.required}
          type={displayNameNode.attributes.type}
        />
        <TextInput
          autoComplete={preferredLocaleNode.attributes.autocomplete}
          defaultValue={profilePictureURLNode.attributes.value as string}
          label={_(msg({ message: "Profile Picture URL" }))}
          name={profilePictureURLNode.attributes.name}
          required={profilePictureURLNode.attributes.required}
          type={profilePictureURLNode.attributes.type}
        />
        <TextInput
          defaultValue={preferredLocaleNode.attributes.value as string}
          label={_(msg({ message: "Preferred Locale" }))}
          name={preferredLocaleNode.attributes.name}
          required={preferredLocaleNode.attributes.required}
          type={preferredLocaleNode.attributes.type}
        />
        {domain && (
          <input name="upstream_parameters.hd" type="hidden" value={domain} />
        )}
        <input name="upstream_parameters.prompt" type="hidden" value="login" />
        <Button
          name={providerNode.attributes.name}
          type="submit"
          value={providerNode.attributes.value as string}
        >
          {_(msg({ message: "Continue" }))}
        </Button>
      </Stack>
    </form>
  );
}
