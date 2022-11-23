import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

// 
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
      addUser: builder.mutation({
         query: (body) => ({
            url: `/api/user/addtutor`,
            method: "POST",
            body: body,
            headers: {
               "Content-type": "application/json; charset=UTF-8",
            },
         })
      }),
   }),
});

export const {
   useLazyGetAllUsersQuery,
   useAddUserMutation
} = userServicesApi;
