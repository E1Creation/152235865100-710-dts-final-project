import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const GamesAPI = createApi({
  reducerPath: "gamesapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.cheapshark.com/api/1.0/",
  }),
  endpoints: (builder) => ({
    allGames: builder.query({
      query: () => "/deals?storeID=1&upperPrice=15      ",
    }),
    dealLookUp: builder.query({
      query: (dealId) => `/deals?id=${dealId}`,
    }),
    searchGames: builder.query({
      query: (title) => `/games?title=${title}`,
    }),
    storesInfo: builder.query({
      query: () => `/stores`,
    }),
  }),
});

export const {
  useAllGamesQuery,
  useDealLookUpQuery,
  useSearchGamesQuery,
  useStoresInfoQuery,
} = GamesAPI;
