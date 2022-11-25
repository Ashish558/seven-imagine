import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";


export const dashboardServicesApi = createApi({
   reducerPath: "dashboardApi",
   baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
   }),

   endpoints: (builder) => ({
      getParentLedger: builder.query({
         query: () => ({
            url: `api/ledger`,
            method: "GET",
            headers: {
               "Authorization": sessionStorage.getItem('token'),
            },
         }),
      })

      // addTest: builder.mutation({
      //    query: (body) => ({
      //       url: `/api/test `,
      //       method: "POST",
      //       body: body,
      //       headers: {
      //          "Content-type": "application/json; charset=UTF-8",
      //       },
      //    })
      // }),
      // addPdf: builder.mutation({
      //    query: (body) => ({
      //       url: `/api/test/addpdf/${body.id}`,
      //       method: "POST",
      //       body: body.formData,
      //       headers: {
      //          "Content-type": "multipart/form-data",
      //       },
      //    })
      // }),

   }),
});

export const {
   useLazyGetParentLedgerQuery
} = dashboardServicesApi;
