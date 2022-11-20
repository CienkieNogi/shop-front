import {  UserI, LoginUserInput } from "../../../types";
import { api } from "../api/api";

// Define a service using a base URL and expected endpoints
export const authApi = api.injectEndpoints({
  
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
    loginUser: builder.mutation<{ttl:string,id:string,role:string,username:string}, LoginUserInput>({
      query: (body) => ({
        url: "session",
        method: "POST",
        body,
      }),
    }),
    checkIfLoggedIn: builder.mutation<void,void>({
      query:()=>({
        url:'session',
        method:'GET'
      })
    }),
    logout:builder.mutation<void,void>({
      query:()=>({
        url:'session/logout',
        method:'POST'
      })
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllUsersQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useCheckIfLoggedInMutation,
  useLogoutMutation
} = authApi;
export default authApi.reducer
