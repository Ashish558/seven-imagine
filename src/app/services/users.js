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
            params: {
               limit: 200
            },
            method: "GET",
         }),
      }),
      getUserDetail: builder.query({
         query: (body) => ({
            url: `api/user/${body.id}`,
            method: "GET",
         }),
      }),
      updateUserFields: builder.mutation({
         query: (body) => ({
            url: `api/user/updatedetails/${body.id}`,
            method: "PATCH",
            body: body.fields,
            headers: {
               "Content-type": "application/json; charset=UTF-8",
            },
         })
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
   useAddUserMutation,
   useLazyGetUserDetailQuery,
   useUpdateUserFieldsMutation
} = userServicesApi;
