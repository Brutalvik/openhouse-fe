import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkmode: false,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkmode = !state.darkmode;
    },
  },
});

export const { setDarkMode } = theme.actions;

export default theme.reducer;
