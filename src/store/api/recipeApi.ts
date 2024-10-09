import { api } from "./api";

// Отдельно выносим логику по работе с рецептами и общее апи.

export const recipeApi = api.injectEndpoints({
    endpoints: builder => ({
        createRecipe: builder.mutation({
            query: (recipe) => ({
                body: recipe,
                url: "/",
                method: "POST",
            }),
            invalidatesTags: ["Recipe"]
        })
    })
})

export const {useCreateRecipeMutation} = recipeApi