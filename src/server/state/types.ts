import "server-only";

import type { Sdk as FalconSDK } from "../../common/apis/falcon/sdk";
import type { Sdk as ICanHazDadJokeSDK } from "../../common/apis/icanhazdadjoke/sdk";
import type { Config } from "../config/types";

export type APIs = {
  falcon: FalconSDK;
  icanhazdadjoke: ICanHazDadJokeSDK;
};

export type State = {
  apis: APIs;
  config: Config;
};
