import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserData } from '../types/IUserInfo';

export const userApi= createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<UserData, void>({
      query: (name) => `/users/${name}`,
      providesTags: ["User"],
    }),
  }),
});


export const {useLazyGetUserQuery} = userApi;
