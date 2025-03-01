import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import { SettingsPageMetadata } from "../../components/metadata/settings/settings-page-metadata";
import { SettingsPageView } from "../../components/views/settings/settings-page-view";
import { getLanguage } from "../../lib/i18n/get-language";
import { loadLocale } from "../../lib/i18n/load-locale";
import { createErrorPath } from "../../lib/urls/create-error-path";
import { parseQueryParams } from "../../lib/urls/parse-query-params";
import { searchParamsSchema } from "./schemas";
import { SettingsPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "orchid" })),
    title: i18n._(msg({ message: "Settings • orchid" })),
  };
}

export default function SettingsPage({ searchParams }: SettingsPageInput) {
  const { data: params, error: paramsError } = parseQueryParams({
    params: new URLSearchParams(searchParams),
    schema: searchParamsSchema,
  });

  if (paramsError) {
    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }

  const { flow } = params;

  return (
    <>
      <SettingsPageMetadata />
      <SettingsPageView flow={flow} />
    </>
  );
}
