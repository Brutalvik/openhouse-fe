import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state, { payload }: PayloadAction<boolean>) => {
      state.darkmode = payload;
    },
  },
});

export const { setDarkMode } = theme.actions;

export default theme.reducer;
