import { useAppSelector } from "app/hooks";

export const useActionsSelector = () =>
  useAppSelector((state) => state.actions);
