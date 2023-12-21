// src/features/themeSelectors.ts
import { useAppSelector } from "app/hooks"; // Replace 'app/hooks' with your actual path

export const useThemeSelector = () => useAppSelector((state) => state.theme);
