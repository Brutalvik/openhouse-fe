import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  homesFetchSuccess,
  homesFetchFailed,
  homesFetchInProgress,
  resetHomes,
} from "app/reducers/homes";
import { CommunitiesInterface } from "features/interface";

const HOMES_URL = `${process.env.REACT_APP_URL}${process.env.REACT_APP_HOMES_URL}`;

export const getHomes = createAsyncThunk(
  "getHomes",
  async (_, { dispatch }) => {
    dispatch(homesFetchInProgress(true));
    try {
      dispatch(resetHomes());
      const { data, status }: CommunitiesInterface = await axios.get(HOMES_URL);
      dispatch(homesFetchSuccess({ data, status }));
      dispatch(homesFetchInProgress(false));
    } catch ({ response }: any) {
      dispatch(resetHomes());
      dispatch(homesFetchFailed(response));
      dispatch(homesFetchInProgress(false));
    }
  }
);
