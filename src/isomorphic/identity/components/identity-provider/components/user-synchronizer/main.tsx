import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import type { UserSynchronizerInput } from "./types";

import { orpcClientSideQueryClient } from "../../../../../../client/orpc/vars/clients";
import { useSafeContext } from "../../../../../generic/hooks/use-safe-context";
import { IdentityContext } from "../../../../contexts/identity";

export function UserSynchronizer({}: UserSynchronizerInput) {
  const identity = useSafeContext(IdentityContext);

  const getUserQuery = useQuery(
    orpcClientSideQueryClient.identity.getUser.queryOptions(),
  );

  useEffect(() => {
    if (getUserQuery.data === undefined) return;
    identity.user = getUserQuery.data.user;
  }, [getUserQuery.data, identity]);

  return null;
}
