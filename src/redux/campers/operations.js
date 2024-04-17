import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://661daf7898427bbbef0265db.mockapi.io";
const API_ENDPOINT = "/adverts";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async function ({ page, limit }, thunkAPI) {
    try {
      const { data } = await axios(
        `${BASE_URL}${API_ENDPOINT}?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
