import { createClient as createFalconClient } from "./common/apis/falcon/client";
import { Sdk as FalconSDK } from "./common/apis/falcon/sdk";
import { createClient as createICanHazDadJokeClient } from "./common/apis/icanhazdadjoke/client";
import { Sdk as ICanHazDadJokeSDK } from "./common/apis/icanhazdadjoke/sdk";
import { createUrl } from "./common/generic/lib/create-url";
import { loadConfig } from "./server/config/lib/load-config";
import { state } from "./server/state/vars/state";

export async function register() {
  const { config } = await loadConfig();

  const apis = {
    falcon: new FalconSDK({
      client: createFalconClient({
        baseUrl: createUrl({
          host: config.apis.falcon.host,
          path: config.apis.falcon.path,
          port: config.apis.falcon.port,
          scheme: config.apis.falcon.scheme,
        }).url,
      }),
    }),

    icanhazdadjoke: new ICanHazDadJokeSDK({
      client: createICanHazDadJokeClient({
        baseUrl: createUrl({
          host: config.apis.icanhazdadjoke.host,
          path: config.apis.icanhazdadjoke.path,
          port: config.apis.icanhazdadjoke.port,
          scheme: config.apis.icanhazdadjoke.scheme,
        }).url,
      }),
    }),
  };

  state.current = {
    apis: apis,
    config: config,
  };
}
