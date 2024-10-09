import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../types/userTypes";

const userTypeThunk = "users/by-id";

const fetchUserById = (userId: number): Promise<IUser> =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "Max" }), 1000)
  );

export const getUserById = createAsyncThunk<IUser, number>(
  userTypeThunk,
  async (userId, thunkApi) => {
    try {
      const response = await fetchUserById(userId);
      return response;
    } catch {
      return thunkApi.rejectWithValue({});
    }
  }
);
