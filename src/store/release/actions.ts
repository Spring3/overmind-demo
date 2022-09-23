import {
  CursorPaginatedCollectionProp,
  ReleaseProps,
} from "contentful-management";
import { IAction } from "overmind";
import type { Context } from "overmind";

type getManyType = {
  status: "active" | "archived";
};

export const getMany: IAction<
  getManyType,
  Promise<CursorPaginatedCollectionProp<ReleaseProps>>
> = async ({ effects, state }: Context, { status }) => {
  const pageOfReleases = await effects.sdk.release.query({
    query: {
      "sys.status[in]": status,
    },
  });

  state.release.list = pageOfReleases.items;

  return pageOfReleases;
};
