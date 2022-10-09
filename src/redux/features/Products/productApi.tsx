import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductI } from "../../../types";

export const productApi=createApi({
    reducerPath: "productApi",
    baseQuery:fetchBaseQuery({
        baseUrl: "http://localhost:4000/product",
        credentials:'include',
        mode:'cors'
    }),
    endpoints:(builder)=>({
        getAllProducts:builder.query<void,ProductI>({
            query:()=>'/'
        })
    })

})

export const {useGetAllProductsQuery} = productApi