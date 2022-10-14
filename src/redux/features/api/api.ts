import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:4000/',
        credentials:'include',
        mode:"cors"
    }),
    tagTypes:['Product','Category'],
    endpoints:builder=>({})
})