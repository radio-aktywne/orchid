import { createSecretKey } from "crypto";

export function getSecret() {
  const secret =
    process.env.ORCHID__SECRETS__SHARED || "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  if (!secret) throw new Error("Secret not found.");
  return secret;
}

export function getSecretKey() {
  const secret = getSecret();
  return createSecretKey(secret, "utf8");
}
