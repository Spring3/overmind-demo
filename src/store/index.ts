import { IContext } from "overmind";
import { merge, namespaced } from "overmind/config";
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook,
} from "overmind-react";

import * as releaseStore from "./release";
import { createEffects } from "./createEffects";
import { PlainClientAPI } from "contentful-management";

const createConfig = (sdk: PlainClientAPI) => {
  const config = merge(
    {
      state: {},
      effects: createEffects(sdk),
      actions: {},
    },
    namespaced({
      release: releaseStore,
    })
  );

  return config;
};

type OvermindConfig = IContext<ReturnType<typeof createConfig>>;

declare module "overmind" {
  type Context = OvermindConfig;
}

const useOvermindActions = createActionsHook<OvermindConfig>();
const useOvermindState = createStateHook<OvermindConfig>();
const useOvermindEffects = createEffectsHook<OvermindConfig>();
const useOvermindReactions = createReactionHook<OvermindConfig>();

export {
  useOvermindActions,
  useOvermindEffects,
  useOvermindState,
  useOvermindReactions,
  createConfig,
};
