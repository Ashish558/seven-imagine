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
               // "Authorization": localStorage.getItem('token'),
            },
         })
      }),
      getTestDetails: builder.query({
         query: (id) => ({
            url: `/api/test/${id}`,
            method: "GET",
            headers: {
               "Authorization": localStorage.getItem('token'),
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
               // "Authorization": localStorage.getItem('token'),
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
               // "Authorization": localStorage.getItem('token'),
            },
         })
      }),
      attendTest: builder.mutation({
         query: (body) => ({
            url: `/api/test/attendtest/${body.id}`,
            method: "POST",
            body: body.reqbody,
            headers: {
               "Authorization": localStorage.getItem('token'),
            },
         })
      }),
      updateTime: builder.mutation({
         query: (body) => ({
            url: `/api/test/updatetime/${body.id}`,
            method: "POST",
            body: body.reqbody,
            headers: {
               "Authorization": localStorage.getItem('token'),
            },
         })
      }),
      getSections: builder.query({
         query: (body) => ({
            url: `/api/test/getsections/${body.id}`,
            method: "GET",
            headers: {
               "Authorization": localStorage.getItem('token'),
            },
         })
      }),
      getAssignedTest: builder.query({
         query: (id) => ({
            url: `/api/test/assigntest`,
            method: "GET",
            headers: {
               "Authorization": localStorage.getItem('token'),
            },
         })
      }),

      getTime: builder.query({
         query: (id) => ({
            url: `/api/test/gettime/${id}`,
            method: "GET",
            headers: {
               "Authorization": localStorage.getItem('token'),
            },
         })
      }),
      startTest: builder.mutation({
         query: (body) => ({
            url: `/api/test/start/${body.id}`,
            method: "POST",
            body: body.reqbody,
            headers: {
               "Authorization": localStorage.getItem('token'),
            },
         })
      }),
      continueTest: builder.query({
         query: (body) => ({
            url: `/api/test/continuetest/${body.id}`,
            method: "GET",
            headers: {
               "Authorization": localStorage.getItem('token'),
            },
         })
      }),
      getTestResponse: builder.query({
         query: (body) => ({
            url: `/api/test/getresponse/${body.id}`,
            method: "GET",
            headers: {
               "Authorization": localStorage.getItem('token'),
            },
         })
      }),
      submitTest: builder.mutation({
         query: (body) => ({
            url: `/api/test/submit/${body.submitId}`,
            method: "POST",
            body: body.reqbody,
            headers: {
               "Authorization": localStorage.getItem('token'),
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
   useLazyGetAssignedTestQuery,
   useLazyGetTimeQuery,
   useLazyGetTestDetailsQuery,
   useLazyGetSectionsQuery,
   useStartTestMutation,
   useLazyContinueTestQuery,
   useSubmitTestMutation,
   useLazyGetTestResponseQuery
} = testServicesApi;
