"use client";

import { msg } from "@lingui/core/macro";
import { UserMenu } from "@radio-aktywne/ui";
import { MdApps, MdLogout } from "react-icons/md";

import type { IdentityWidgetInput } from "./types";

import { createUrl } from "../../../../common/generic/lib/create-url";
import { localizeHref } from "../../../../common/routing/lib/localize-href";
import { useLocalization } from "../../../localization/hooks/use-localization";
import { useLocaleRoutes } from "../../../routing/hooks/use-locale-routes";
import { useIdentity } from "../../hooks/use-identity";

export function IdentityWidget({ urls }: IdentityWidgetInput) {
  const { identity } = useIdentity();
  const { localization } = useLocalization();
  const { localeRoutes } = useLocaleRoutes();

  if (identity.user === null) return null;

  const { url: appsUrl } = createUrl({
    host: urls.sunflower.host,
    path: urls.sunflower.path,
    port: urls.sunflower.port,
    scheme: urls.sunflower.scheme,
  });

  const { href: logoutUrl } = localizeHref({
    href: "/logout/init",
    localeRoutes: localeRoutes,
  });

  return (
    <UserMenu
      items={[
        {
          icon: MdApps,
          label: localization.localize(msg({ message: "Apps" })),
          url: appsUrl,
        },
        {
          color: "red",
          icon: MdLogout,
          label: localization.localize(msg({ message: "Logout" })),
          url: logoutUrl,
        },
      ]}
      user={{ name: identity.user.traits.names.display }}
    />
  );
}
