import { combineReducers } from "@reduxjs/toolkit";
import theme from "app/reducers/theme";

export const rootReducers = combineReducers({
  theme: theme,
});
