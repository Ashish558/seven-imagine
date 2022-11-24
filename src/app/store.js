import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { sessionServicesApi } from "./services/session";
import { authServicesApi } from "./services/auth";
import { userServicesApi } from "./services/users";
import { testServicesApi } from "./services/test";

import userReducer from './slices/user'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [sessionServicesApi.reducerPath]: sessionServicesApi.reducer,
    [authServicesApi.reducerPath]: authServicesApi.reducer,
    [userServicesApi.reducerPath]: userServicesApi.reducer,
    [testServicesApi.reducerPath]: testServicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sessionServicesApi.middleware,
      authServicesApi.middleware,
      userServicesApi.middleware,
      testServicesApi.middleware,
    ),
});

setupListeners(store.dispatch);
