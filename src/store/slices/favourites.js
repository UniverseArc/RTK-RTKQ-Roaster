import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleAddFavourite(state, { payload: recipe }) {
      const isExistsFavourite = state.some((r = r.id === recipe.id));

      if (isExistsFavourite) {
        state = state.filter((r = r.id !== recipe.id));
      } 
      else state.push(recipe);
    },
  },
});

export const {actions, reducer} = favouritesSlice
