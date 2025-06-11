import { i18n } from "@lingui/core";
import { msg } from "@lingui/core/macro";
import { MainLayout } from "@radio-aktywne/ui";
import { Metadata } from "next";
import { redirect } from "next/navigation";

import { ErrorPageMetadata } from "../../components/metadata/error/error-page-metadata";
import { ErrorPageView } from "../../components/views/error/error-page-view";
import { getLanguage } from "../../lib/i18n/get-language";
import { loadLocale } from "../../lib/i18n/load-locale";
import { createErrorPath } from "../../lib/urls/create-error-path";
import { parseQueryParams } from "../../lib/urls/parse-query-params";
import { searchParamsSchema } from "./schemas";
import { ErrorPageInput } from "./types";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { language } = getLanguage();
  await loadLocale({ i18n, language });

  return {
    description: i18n._(msg({ message: "orchid" })),
    title: i18n._(msg({ message: "Error • orchid" })),
  };
}

export default function ErrorPage({ searchParams }: ErrorPageInput) {
  const { data: params, error: paramsError } = parseQueryParams({
    params: new URLSearchParams(searchParams),
    schema: searchParamsSchema,
  });

  if (paramsError) {
    const { path } = createErrorPath({ id: "stub:500" });
    redirect(path);
  }

  const { id } = params;

  return (
    <MainLayout>
      <ErrorPageMetadata />
      <ErrorPageView id={id} />
    </MainLayout>
  );
}
