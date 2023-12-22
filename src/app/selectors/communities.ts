import { useAppSelector } from "app/hooks";

export const useCommunitiesSelector = () =>
  useAppSelector((state) => state.communities);
