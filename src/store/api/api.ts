import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRecipe } from "../../types/recipeTypes";

const API_URL = "http://localhost:4200/recipes";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  // Хотя бы один эндпоинт должен быть.
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipe[], string>({
      query: (searchTerm) => `?name=${searchTerm}`,
      providesTags: (result, error, searchTerm) => [
        { type: "Recipe", id: searchTerm },
      ],
    }),
  }),
});

export const { useGetRecipesQuery } = api; // Кажется useGetRecipesQuery - сгенерировался.
