import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterUserInput, UserI, LoginUserInput } from "../../types";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    credentials: "include",
    
    mode:'cors',
    prepareHeaders:(headers)=>{
      headers.set('Access-Control-Allow-Origin', '*');
      return headers
    }
  }),

  endpoints: (builder) => ({
    getAllUsers: builder.query<UserI, void>({
      query: () => `users`,
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation<void, LoginUserInput>({
      query: (body) => ({
        url: "session",
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useLoginUserMutation,
} = api;
