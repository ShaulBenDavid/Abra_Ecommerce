import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./Redux/storeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
  key: "root",
  storage,
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const persistedReducer = persistReducer(persistConfig, storeReducer);

export const store = configureStore({
  reducer: {
    store: persistedReducer,
  },
  middleware: customizedMiddleware,
});

export const persistor = persistStore(store);
