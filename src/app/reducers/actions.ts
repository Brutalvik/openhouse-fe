import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TabsInterface } from "features/interface";

const initialState: TabsInterface = {
  activeTab: 0,
  isModalOpen: false,
};

const actions = createSlice({
  name: "actions",
  initialState,
  reducers: {
    setActiveTab: (state, { payload }: PayloadAction<number>) => {
      state.activeTab = payload;
    },
    setModalOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isModalOpen = payload;
    },
  },
});

export const { setActiveTab, setModalOpen } = actions.actions;

export default actions.reducer;
