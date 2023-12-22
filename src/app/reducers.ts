import { combineReducers } from "@reduxjs/toolkit";
import communities from "app/reducers/communities";
import actions from "app/reducers/actions";
import homes from "app/reducers/homes";

export const rootReducers = combineReducers({
  communities: communities,
  homes: homes,
  actions: actions,
});
