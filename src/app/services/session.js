import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";


export const sessionServicesApi = createApi({
   reducerPath: "sessionApi",
   baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
   }),

   endpoints: (builder) => ({
      getTutorsByName: builder.query({
         query: (name) => ({
            url: `api/user/tutor`,
            params: {
               search: name
            },
            method: "GET",
         }),
      }),
      getStudentsByName: builder.query({
         query: (name) => ({
            url: `api/user/student`,
            params: {
               search: name
            },
            method: "GET",
         }),
      }),
      getSettings: builder.query({
         query: (name) => ({
            url: `/api/user/setting`,
            params: {
               search: name
            },
            method: "GET",
         }),
      }),
      submitSession: builder.mutation({
         query: (body) => ({
            url: `/api/session`,
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
   useLazyGetTutorsByNameQuery,
   useLazyGetStudentsByNameQuery,
   useLazyGetSettingsQuery,
   useSubmitSessionMutation
} = sessionServicesApi;
