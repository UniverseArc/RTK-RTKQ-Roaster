import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleAddFavourite(state, { payload: recipe }) {
      const isExistsFavourite = state.some((r => r.id === recipe.id));

      if (isExistsFavourite) {
        const index = state.findIndex(item => item.id === recipe.id)
        if(index !== -1){
          state.splice(index, 1)
        }
      } 
      else state.push(recipe);
    },
  },
});

export const {actions, reducer} = favouritesSlice
