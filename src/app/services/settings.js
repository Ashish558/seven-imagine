import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants/constants";

export const settingsServicesApi = createApi({
   reducerPath: "settingsApi",
   baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
   }),

   endpoints: (builder) => ({
    
      updateSetting: builder.mutation({
         query: (body) => ({
            url: `/api/user/setting`,
            method: "PATCH",
            body: body,
            headers: {
               "Content-type": "application/json; charset=UTF-8",
            },
         })
      }),
      updateOfferImage: builder.mutation({
         query: (body) => ({
            url: `/api/user/setting/addimage`,
            method: "PATCH",
            body: body,
            headers: {
               "Content-type": "multipart/form-data",
            },
         })
      }),
   

   }),
});

export const {
   useUpdateSettingMutation,
   useUpdateOfferImageMutation
} = settingsServicesApi;
