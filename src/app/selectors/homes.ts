import { useAppSelector } from "app/hooks";

export const useHomesSelector = () => useAppSelector((state) => state.homes);
