"use client";

import { Loader } from "@mantine/core";
import { useEffect, useRef } from "react";

import type { RegistrationFormInput } from "./types";

import { constants } from "./constants";
import { getInputNode } from "./utils";

export function RegistrationForm({ domain, flow }: RegistrationFormInput) {
  const formRef = useRef<HTMLFormElement>(null);

  const nodes = {
    csrf: getInputNode(flow, constants.nodes.csrf),
    provider: getInputNode(flow, constants.nodes.provider),
  };

  useEffect(() => {
    formRef.current?.submit();
  }, []);

  return (
    <>
      <Loader />
      <form action={flow.ui.action} method={flow.ui.method} ref={formRef}>
        <input
          name={constants.nodes.csrf}
          type="hidden"
          value={nodes.csrf.attributes.value as string}
        />
        {domain && (
          <input name={constants.nodes.domain} type="hidden" value={domain} />
        )}
        <input name={constants.nodes.prompt} type="hidden" value="login" />
        <input
          name={constants.nodes.provider}
          type="hidden"
          value={nodes.provider.attributes.value as string}
        />
      </form>
    </>
  );
}
