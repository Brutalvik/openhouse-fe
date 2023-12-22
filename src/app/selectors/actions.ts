import { useAppSelector } from "app/hooks";

export const useActiveTabSelector = () =>
  useAppSelector((state) => state.actions);
