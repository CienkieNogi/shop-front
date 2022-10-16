import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
        baseUrl: 'http://localhost:4000/',
        credentials:'include',
        mode:"cors"
    })

const baseQueryWithReauth :BaseQueryFn<
string | FetchArgs,
unknown,
FetchBaseQueryError
>=async(args, api, extraOptions)=>{
    let result = await baseQuery(args, api, extraOptions)
    //Token is expired! We log out user and clear localStorage
    //@ts-ignore
    if(result?.error?.data?.error==='Unauthorized'){
        localStorage.clear()
        window.location.href = 'http://localhost:3000/account/login'
    }
return result
}

export const api = createApi({
    reducerPath:'api',
    baseQuery:baseQueryWithReauth,
    tagTypes:['Product','Category'],
    endpoints:builder=>({})
})