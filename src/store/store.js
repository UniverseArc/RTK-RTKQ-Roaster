import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/favourites";

export default configureStore({
    reducer
})

