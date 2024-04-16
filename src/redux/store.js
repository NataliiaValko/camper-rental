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

const persistConfig = {
  key: "root",
  storage,
  whitelist: "items",
};

const persistedReducer = persistReducer(persistConfig, favoriteCampersReducer);

export const store = configureStore({
  reducer: { favoriteCampers: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
