import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getUserById } from "../user/userThunk";
import { IInitialStateType, IUser } from "../../types/userTypes";


const initialState: IInitialStateType = { //Лучше всегда отдельно выносить и типизировать.
    isLoading: false,
    error: null,
    user: {} as IUser //Зачем это??
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUserById.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.isLoading = false
            state.user = action.payload
        })
        builder.addCase(getUserById.rejected, (state, action: any) => { // Ошибки очень сложно типизировать, многое зависит от сервера поэтому оставили any,
            state.isLoading = false
            state.error = action.payload.error
            state.user = {} as IUser // Зачем это??
        })
        builder.addMatcher
    }
})