import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FoodAPI = createApi({
  reducerPath: "foodapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1",
  }),
  endpoints: (builder) => ({
    categories: builder.query({
      query: () => "/categories.php",
    }),
    mealById: builder.query({
      query: (id) => `/lookup.php?i=${id}`,
    }),
  }),
});

export const { useCategoriesQuery, useMealByIdQuery } = FoodAPI;
