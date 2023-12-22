import { combineReducers } from "@reduxjs/toolkit";
import communities from "app/reducers/communities";

export const rootReducers = combineReducers({
  communities: communities,
});
