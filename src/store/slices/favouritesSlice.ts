import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipeTypes";

const initialState: IRecipe[] = [];

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleAddFavourite(state, { payload: recipe }: PayloadAction<IRecipe>) {
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
