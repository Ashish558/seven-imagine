import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";


export const userServicesApi = createApi({
   reducerPath: "usersApi",
   baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
   }),

   endpoints: (builder) => ({
      getAllUsers: builder.query({
         query: () => ({
            url: `api/user`,
            method: "GET",
         }),
      }),

   }),
});

export const {
   useLazyGetAllUsersQuery
} = userServicesApi;
