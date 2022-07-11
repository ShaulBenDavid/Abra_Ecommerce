import { configureStore } from "@reduxjs/toolkit";
import storeReducer from './Redux/storeSlice';

export const store = configureStore({
    reducer: {
        store: storeReducer,
    },
});

