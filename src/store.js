import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./Redux/storeSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, storeReducer);

export const store = configureStore({
  reducer: {
    store: persistedReducer,
  },
});

export const persistor = persistStore(store);
