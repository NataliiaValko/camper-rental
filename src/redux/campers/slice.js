import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    // page: 1,
    // limit: 4,
    showLoadMore: false,
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   // setPage: (state) => {
  //   //   state.page = state.page + 1;
  //   // },
  // },
  extraReducers: (builder) =>
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.showLoadMore = false;
      })
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (!payload.length) {
          state.showLoadMore = false;
          return;
        }
        state.showLoadMore = true;

        state.items = [...state.items, ...payload];
      })
      .addCase(getCampers.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.showLoadMore = false;
      }),

  selectors: {
    selectItems(state) {
      return state.items;
    },
    // selectPage(state) {
    //   return state.page;
    // },
    // selectLimit(state) {
    //   return state.limit;
    // },
    selectError(state) {
      return state.error;
    },
    selectIsLoading(state) {
      return state.isLoading;
    },
    selectShowLoadMore(state) {
      return state.showLoadMore;
    },
  },
});

export const {
  selectItems,
  // selectLimit,
  // selectPage,
  selectError,
  selectIsLoading,
  selectShowLoadMore,
} = campersSlice.selectors;
// export const { setPage } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
