import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
  error: false,
  message: null,
  status: null,
};

const communities = createSlice({
  name: "communities",
  initialState,
  reducers: {
    communitiesFetchSuccess: (state, { payload }: PayloadAction<any>) => {
      state.data = payload.data;
      state.status = payload.status;
    },
    communitiesFetchInProgress: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isLoading = payload;
    },
    communitiesFetchFailed: (state, { payload }: PayloadAction<any>) => {
      state.error = payload.error;
      state.message = payload.message;
      state.status = payload.status;
    },
  },
});

export const {
  communitiesFetchSuccess,
  communitiesFetchInProgress,
  communitiesFetchFailed,
} = communities.actions;

export default communities.reducer;
