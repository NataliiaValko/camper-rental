import { createSlice } from "@reduxjs/toolkit";

const favoriteCampersSlice = createSlice({
  name: "favoriteCampers",
  initialState: { items: [] },
  reducers: {
    addFavorite(state, { payload }) {
      state.items.push(payload);
    },
    removeFavorite(state, { payload }) {
      const index = state.items.findIndex(({ _id }) => _id === payload);
      if (index === -1) return;
      state.items.splice(index, 1);
    },
  },
  selectors: {
    selectFavoriteItems(state) {
      return state.items;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteCampersSlice.actions;
export const favoriteCampersReducer = favoriteCampersSlice.reducer;
