import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_SERVER_URL || "http://localhost:4000",
  credentials: "include",
  mode: "cors",
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  //Token is expired! We log out user and clear localStorage
  //@ts-ignore
  if (result?.error?.data?.error === "Unauthorized") {
    console.log("ERROR: " + result.error);
    localStorage.clear();
    window.location.href = `${
      process.env.REACT_APP_SERVER_URL || "http://localhost:3000"
    }`;
  }
  //@ts-ignore
  if (result?.error?.data?.error === "Access token is required") {
    localStorage.clear();
    window.location.href = `${
      process.env.REACT_APP_SERVER_URL || "http://localhost:3000"
    }`;
  }
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Product", "Category", "Cart"],
  endpoints: (builder) => ({}),
});
