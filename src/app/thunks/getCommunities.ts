import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  communitiesFetchInProgress,
  communitiesFetchSuccess,
  communitiesFetchFailed,
} from "app/reducers/communities";
import { CommunitiesInterface } from "features/interface";

const COMMUNITIES_URL = `${process.env.REACT_APP_URL}${process.env.REACT_APP_COMMUNITIES_URL}`;

export const getCommunities = createAsyncThunk(
  "getcommunities",
  async (_, { dispatch }) => {
    dispatch(communitiesFetchInProgress(true));
    try {
      const { data, status }: CommunitiesInterface = await axios.get(
        COMMUNITIES_URL
      );
      dispatch(communitiesFetchSuccess({ data, status }));
    } catch (error) {
      console.log(error);
    }
  }
);
