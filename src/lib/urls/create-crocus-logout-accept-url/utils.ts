export function getCrocusURL() {
  const scheme = process.env.ORCHID__CROCUS__PUBLIC__SCHEME || "http";
  const host = process.env.ORCHID__CROCUS__PUBLIC__HOST || "localhost";
  const port = process.env.ORCHID__CROCUS__PUBLIC__PORT ?? 20020;
  const path = (process.env.ORCHID__CROCUS__PUBLIC__PATH || "")
    // Ensure path starts with a slash
    .replace(/^(?!\/)(.*)$/, "/$1")
    // Remove trailing slashes
    .replace(/\/+$/, "");
  return `${scheme}://${host}${port ? `:${port}` : ""}${path}`;
}
