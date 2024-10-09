import { combineReducers } from "@reduxjs/toolkit";
import { reducer as favouritesReducerInRootReducer } from "./slices/favouritesSlice";
import { userSlice } from "./slices/userSlice";
import { api } from "./api/api";

export const rootReducer = combineReducers({
    favourites: favouritesReducerInRootReducer,
    users: userSlice.reducer,
    [api.reducerPath]: api.reducer,
});

