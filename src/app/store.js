import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sessionServicesApi } from "./services/session";

export const store = configureStore({
  reducer: {
    [sessionServicesApi.reducerPath]: sessionServicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sessionServicesApi.middleware,
    ),
});

setupListeners(store.dispatch);
