import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: undefined,
  isLoading: false,
  error: false,
  message: undefined,
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
      state.error = payload.error;
      state.message = payload.message;
      state.status = payload.status;
    },
  },
});

export const { homesFetchFailed, homesFetchInProgress, homesFetchSuccess } =
  homes.actions;

export default homes.reducer;
