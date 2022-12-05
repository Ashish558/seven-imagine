import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";


export const testServicesApi = createApi({
   reducerPath: "testsApi",
   baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
   }),

   endpoints: (builder) => ({
      getTestsByName: builder.query({
         query: (name) => ({
            url: `api/test/`,
            params: {
               search: name
            },
            method: "GET",
         }),
      }),

      addTest: builder.mutation({
         query: (body) => ({
            url: `/api/test`,
            method: "POST",
            body: body,
            headers: {
               "Content-type": "application/json; charset=UTF-8",
               // "Authorization": sessionStorage.getItem('token'),
            },
         })
      }),
      assignTest: builder.mutation({
         query: (body) => ({
            url: `/api/test/assigntest`,
            method: "POST",
            body: body,
            headers: {
               "Content-type": "application/json; charset=UTF-8",
               // "Authorization": sessionStorage.getItem('token'),
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
               // "Authorization": sessionStorage.getItem('token'),
            },
         })
      }),
      attendTest: builder.mutation({
         query: (body) => ({
            url: `/api/test/attendtest/${body.id}`,
            method: "POST",
            body: body.reqbody,
            headers: {
               "Authorization": sessionStorage.getItem('token'),
            },
         })
      }),
      updateTime: builder.mutation({
         query: (body) => ({
            url: `/api/test/updatetime/${body.id}`,
            method: "POST",
            body: body.reqbody,
            headers: {
               "Authorization": sessionStorage.getItem('token'),
            },
         })
      }),
      getTime: builder.query({
         query: (id) => ({
            url: `/api/test/gettime/${id}`,
            method: "GET",
            headers: {
               "Authorization": sessionStorage.getItem('token'),
            },
         })
      }),

   }),
});

export const {
   useLazyGetTestsByNameQuery,
   useAssignTestMutation,
   useAddTestMutation,
   useAddPdfMutation,
   useAttendTestMutation,
   useUpdateTimeMutation,
   useLazyGetTimeQuery
} = testServicesApi;
