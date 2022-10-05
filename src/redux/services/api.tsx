import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserI } from '../../types'

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<UserI,void>({
      query: () => `product`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery } = api