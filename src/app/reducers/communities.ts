import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: undefined,
  isLoading: false,
  error: false,
  message: undefined,
  status: undefined,
  moreInfo: undefined,
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
    communitiesMoreInfo: (state, { payload }: PayloadAction<any>) => {
      state.moreInfo = payload;
    },
  },
});

export const {
  communitiesFetchSuccess,
  communitiesFetchInProgress,
  communitiesFetchFailed,
  communitiesMoreInfo,
} = communities.actions;

export default communities.reducer;
