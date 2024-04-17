import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { favoriteCampersReducer } from "./favoriteCampers/slice";
import { campersAPI } from "./campers/campersAPI";

const persistConfig = {
  key: "root",
  storage,
  whitelist: "items",
};

const persistedReducer = persistReducer(persistConfig, favoriteCampersReducer);

export const store = configureStore({
  reducer: {
    favoriteCampers: persistedReducer,
    [campersAPI.reducerPath]: campersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    campersAPI.middleware,
  ],
});

export let persistor = persistStore(store);
