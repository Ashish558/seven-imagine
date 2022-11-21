import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sessionServicesApi } from "./services/session";
import { authServicesApi } from "./services/auth";

export const store = configureStore({
  reducer: {
    [sessionServicesApi.reducerPath]: sessionServicesApi.reducer,
    [authServicesApi.reducerPath]: authServicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sessionServicesApi.middleware,
      authServicesApi.middleware,
    ),
});

setupListeners(store.dispatch);
