import { combineReducers } from "@reduxjs/toolkit";
import communities from "app/reducers/communities";
import actions from "app/reducers/actions";

export const rootReducers = combineReducers({
  communities: communities,
  actions: actions,
});
