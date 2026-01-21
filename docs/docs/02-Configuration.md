---
slug: /config
title: Configuration
---

## Environment variables

You can configure the app at runtime using various environment variables:

- `ORCHID__APIS__FALCON__HOST` -
  host of the falcon API
  (default: `localhost`)
- `ORCHID__APIS__FALCON__PATH` -
  path of the falcon API
  (default: ``)
- `ORCHID__APIS__FALCON__PORT` -
  port of the falcon API
  (default: `20100`)
- `ORCHID__APIS__FALCON__SCHEME` -
  scheme of the falcon API
  (default: `http`)
- `ORCHID__APIS__ICANHAZDADJOKE__HOST` -
  host of the icanhazdadjoke API
  (default: `icanhazdadjoke.com`)
- `ORCHID__APIS__ICANHAZDADJOKE__PATH` -
  path of the icanhazdadjoke API
  (default: ``)
- `ORCHID__APIS__ICANHAZDADJOKE__PORT` -
  port of the icanhazdadjoke API
  (default: ``)
- `ORCHID__APIS__ICANHAZDADJOKE__SCHEME` -
  scheme of the icanhazdadjoke API
  (default: `https`)
- `ORCHID__DEBUG` -
  enable debug mode
  (default: `true`)
- `ORCHID__OIDC__GOOGLE__DOMAIN` -
  domain of the Google organization to enforce when logging in
  (default: ``)
- `ORCHID__SECRETS__SHARED` -
  shared secret for the app containing 32 characters
  (default: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
- `ORCHID__SERVER__HOST` -
  host to run the server on
  (default: `0.0.0.0`)
- `ORCHID__SERVER__PORT` -
  port to run the server on
  (default: `20120`)
- `ORCHID__URLS__CROCUS__HOST` -
  host of the public URL of the crocus app
  (default: `localhost`)
- `ORCHID__URLS__CROCUS__PATH` -
  path of the public URL of the crocus app
  (default: ``)
- `ORCHID__URLS__CROCUS__PORT` -
  port of the public URL of the crocus app
  (default: `20020`)
- `ORCHID__URLS__CROCUS__SCHEME` -
  scheme of the public URL of the crocus app
  (default: `http`)
- `ORCHID__URLS__FALCON__HOST` -
  host of the public URL of the falcon service
  (default: `localhost`)
- `ORCHID__URLS__FALCON__PATH` -
  path of the public URL of the falcon service
  (default: ``)
- `ORCHID__URLS__FALCON__PORT` -
  port of the public URL of the falcon service
  (default: `20100`)
- `ORCHID__URLS__FALCON__SCHEME` -
  scheme of the public URL of the falcon service
  (default: `http`)
