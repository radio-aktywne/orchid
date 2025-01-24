"use client";

import { Loader } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import { LoginFormInput } from "./types";
import { getInputNode } from "./utils";

export function LoginForm({ domain, flow }: LoginFormInput) {
  const formRef = useRef<HTMLFormElement>(null);

  const router = useRouter();

  const csrfTokenNode = getInputNode(flow, "csrf_token");
  const providerNode = getInputNode(flow, "provider");

  useEffect(() => {
    formRef.current?.submit();
  }, [router]);

  return (
    <>
      <Loader />
      <form action={flow.ui.action} method={flow.ui.method} ref={formRef}>
        <input
          name={csrfTokenNode.attributes.name}
          type="hidden"
          value={csrfTokenNode.attributes.value as string}
        />
        {domain && (
          <input name="upstream_parameters.hd" type="hidden" value={domain} />
        )}
        <input name="upstream_parameters.prompt" type="hidden" value="login" />
        <input
          name={providerNode.attributes.name}
          type="hidden"
          value={providerNode.attributes.value as string}
        />
      </form>
    </>
  );
}
