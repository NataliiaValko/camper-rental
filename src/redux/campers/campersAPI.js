import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://661daf7898427bbbef0265db.mockapi.io";
const API_ANDPOINT = "/adverts";

export const campersAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Campers"],
  endpoints: (build) => ({
    getAllCampers: build.query({
      query: () => API_ANDPOINT,
      //   transformResponse: (response, meta, arg) => response.data,
      //   transformErrorResponse: (response, meta, arg) => response.status,
      providesTags: ["Campers"],
    }),
  }),
});

export const { useGetAllCampersQuery } = campersAPI;
