import { SettingsForm } from "./components/settings-form";
import { SettingsPageViewInput } from "./types";
import { safeGetSettingsFlow } from "./utils";

export async function SettingsPageView({ flow: id }: SettingsPageViewInput) {
  const { flow } = await safeGetSettingsFlow({ id: id });

  return <SettingsForm flow={flow} />;
}
