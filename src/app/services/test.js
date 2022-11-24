import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";


export const testServicesApi = createApi({
   reducerPath: "testsApi",
   baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
   }),

   endpoints: (builder) => ({
      // getTutorsByName: builder.query({
      //    query: (name) => ({
      //       url: `api/user/tutor`,
      //       params: {
      //          search: name
      //       },
      //       method: "GET",
      //    }),
      // }),headers: {

      addTest: builder.mutation({
         query: (body) => ({
            url: `/api/test `,
            method: "POST",
            body: body,
            headers: {
               "Content-type": "application/json; charset=UTF-8",
            },
         })
      }),
      addPdf: builder.mutation({
         query: (body) => ({
            url: `/api/test/addpdf/${body.id}`,
            method: "POST",
            body: body.formData,
            headers: {
               "Content-type": "multipart/form-data",
            },
         })
      }),

   }),
});

export const {
   useAddTestMutation,
   useAddPdfMutation
} = testServicesApi;
