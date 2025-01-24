---
slug: /config
title: Configuration
---

## Environment variables

You can configure the app at runtime using various environment variables:

- `ORCHID__SERVER__HOST` -
  host to run the server on
  (default: `0.0.0.0`)
- `ORCHID__SERVER__PORT` -
  port to run the server on
  (default: `20120`)
- `ORCHID__URLS__PUBLIC` -
  public URL of the app
  (default: `http://localhost:20120`)
- `ORCHID__SECRETS__SHARED` -
  shared secret for the app containing 32 characters
  (default: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
- `ORCHID__FALCON__PUBLIC__SCHEME` -
  scheme of the public API of the falcon service
  (default: `http`)
- `ORCHID__FALCON__PUBLIC__HOST` -
  host of the public API of the falcon service
  (default: `localhost`)
- `ORCHID__FALCON__PUBLIC__PORT` -
  port of the public API of the falcon service
  (default: `20100`)
- `ORCHID__FALCON__PUBLIC__PATH` -
  path of the public API of the falcon service
  (default: ``)
- `ORCHID__CROCUS__PUBLIC__SCHEME` -
  scheme of the public site of the crocus app
  (default: `http`)
- `ORCHID__CROCUS__PUBLIC__HOST` -
  host of the public site of the crocus app
  (default: `localhost`)
- `ORCHID__CROCUS__PUBLIC__PORT` -
  port of the public site of the crocus app
  (default: `20020`)
- `ORCHID__CROCUS__PUBLIC__PATH` -
  path of the public site of the crocus app
  (default: ``)
- `ORCHID__OIDC__GOOGLE__DOMAIN` -
  domain of the Google organization to enforce when logging in
  (default: ``)
