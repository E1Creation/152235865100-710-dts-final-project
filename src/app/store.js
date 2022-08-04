import { configureStore } from "@reduxjs/toolkit";
import { FoodAPI } from "../services/api/FoodAPI";
import { GamesAPI } from "../services/api/GamesAPI";

export const store = configureStore({
  reducer: {
    [GamesAPI.reducerPath]: GamesAPI.reducer,
    [FoodAPI.reducerPath]: FoodAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(FoodAPI.middleware);
  },
});
