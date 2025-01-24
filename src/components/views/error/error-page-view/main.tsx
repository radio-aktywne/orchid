import { getError } from "../../../../lib/falcon/errors/get-error";
import { ErrorDisplay } from "./components/error-display";
import { ErrorPageViewInput } from "./types";

export async function ErrorPageView({ id }: ErrorPageViewInput) {
  const { error } = await getError({ id: id });
  return <ErrorDisplay error={error} />;
}
