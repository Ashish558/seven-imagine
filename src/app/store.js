import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { sessionServicesApi } from "./services/session";
import { authServicesApi } from "./services/auth";
import userReducer from './slices/user'


export const store = configureStore({
  reducer: {
    user: userReducer,
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
