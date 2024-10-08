import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { api } from "./api/api";
import { createLogger } from "redux-logger";

const logger = createLogger({
    collapsed: true,
})

export default configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware).concat(logger)
})

