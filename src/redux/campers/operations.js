import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../../service/campersAPI";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async function ({ page, limit = 4 }, thunkAPI) {
    try {
      return await fetchCampers(page, limit);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
