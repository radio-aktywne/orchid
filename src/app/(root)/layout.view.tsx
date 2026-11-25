import { PageLayout } from "@radio-aktywne/ui";

import type { LayoutViewInput } from "../types";
import type { Schemas } from "./schemas";
import type { Keys } from "./types";

import { IdentityWidget } from "../../isomorphic/identity/components/identity-widget";
import { state } from "../../server/state/vars/state";

export async function RootLayoutView({
  children,
}: LayoutViewInput<typeof Schemas.Path, Keys.Slots>) {
  return (
    <PageLayout>
      <IdentityWidget
        urls={{ sunflower: state.current.config.urls.sunflower }}
      />
      {children}
    </PageLayout>
  );
}
