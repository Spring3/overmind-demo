import { ReleaseProps } from "contentful-management";
import { derived } from "overmind";

export type State = {
  list: ReleaseProps[];
  byId: Record<string, ReleaseProps>;
};

export const state: State = {
  list: [],
  byId: derived((state: State) => {
    return state.list.reduce((acc, currentRelease) => {
      return {
        ...acc,
        [currentRelease.sys.id]: currentRelease,
      };
    }, {} as Record<string, ReleaseProps>);
  }),
};
