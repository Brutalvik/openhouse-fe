import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TabsInterface } from "features/interface";

const initialState: TabsInterface = {
  activeTab: 0,
};

const actions = createSlice({
  name: "actions",
  initialState,
  reducers: {
    setActiveTab: (state, { payload }: PayloadAction<any>) => {
      state.activeTab = payload;
    },
  },
});

export const { setActiveTab } = actions.actions;

export default actions.reducer;
