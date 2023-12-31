import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/students" }),
  endpoints: (builder) => ({
    getStudentData: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
    createStudentData: builder.mutation({
      query: (userData) => ({
        url: "add",
        method: "POST",
        body: userData,
        headers: {
          "content-type": "application/json",
        },
      }),
    }),
    deleteStudentData: builder.mutation({
      query: (userId) => ({
        url: `delete/${userId}`,
        method: "DELETE",
        body: "",
        headers: {
          "content-type": "application/json",
        },
      }),
    }),
    getOneData: builder.query({
      query: (userId) => ({
        url: `edit/${userId}`,
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }),
    }),
    updateStudentData: builder.mutation({
      query: ({ userId, ...userData }) => ({
        url: `edit/${userId}`,
        method: "PUT",
        body: userData,
        headers: {
          "content-type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetStudentDataQuery,
  useCreateStudentDataMutation,
  useDeleteStudentDataMutation,
  useUpdateStudentDataMutation,
  useGetOneDataQuery,
} = studentApi;
