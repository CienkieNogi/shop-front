import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterUserInput, UserI, LoginUserInput } from "../../../types";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    credentials: "include",
    
    mode:'cors',
    
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
    //TEST
    getAllProducts:builder.query({
      query:()=>'product'
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useGetAllProductsQuery
} = authApi;
export default authApi.reducer
