import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { api } from "./api/api";
import { createLogger } from "redux-logger";

const logger = createLogger({
    collapsed: true,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware).concat(logger)
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>