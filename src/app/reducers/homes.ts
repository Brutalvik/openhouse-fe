import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: undefined,
  isLoading: false,
  error: false,
  message: "",
  status: undefined,
};

const homes = createSlice({
  name: "homes",
  initialState,
  reducers: {
    homesFetchSuccess: (state, { payload }: PayloadAction<any>) => {
      state.data = payload.data;
      state.status = payload.status;
    },
    homesFetchInProgress: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    homesFetchFailed: (state, { payload }: PayloadAction<any>) => {
      state.error = true;
      state.message = "Error loading homes !";
      state.status = payload.status;
    },
    resetHomes: () => {
      return { ...initialState };
    },
  },
});

export const {
  homesFetchFailed,
  homesFetchInProgress,
  homesFetchSuccess,
  resetHomes,
} = homes.actions;

export default homes.reducer;
