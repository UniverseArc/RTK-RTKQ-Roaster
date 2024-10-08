import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:4200/recipes";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  // Хотя бы один эндпоинт должен быть.
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => "/?_sort=name",
      providesTags: ["Recipe"]
    }),
  }),
});

export const { useGetRecipesQuery } = api // Кажется useGetRecipesQuery - сгенерировался.
