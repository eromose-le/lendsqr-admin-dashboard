import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/utils/axios-base-request";

import { LendsqlHttp } from "../configs/HttpConfig";
import { RtkqTagEnum } from "@/constants/Strings";
import { User, Users } from "@/types/user";
import { updateUserDetails } from "./storeSlice";

export const lendsqlApi = createApi({
  reducerPath: "lendsql",
  baseQuery: axiosBaseQuery({}, LendsqlHttp),
  tagTypes: [RtkqTagEnum.USERS],
  endpoints: (builder) => ({
    getUsers: builder.query<Users, void>({
      query: () => ({
        url: `/5c284082-0921-4612-8ffa-8ce5e22352c6`,
        method: "GET",
      }),
      providesTags: [RtkqTagEnum.USERS],
    }),

    getUser: builder.query<User, void>({
      query: () => ({
        url: `/02a90542-16e8-4f69-983e-f4cf96d7a550`,
        method: "GET",
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const data = await queryFulfilled;

          dispatch(updateUserDetails(data?.data));
        } catch (error) {}
      },
      providesTags: [RtkqTagEnum.USER],
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: "/auth/logout",
        data,
      }),
    }),
  }),
});

[lendsqlApi].forEach((api) => {
  api.enhanceEndpoints({ addTagTypes: Object.values(RtkqTagEnum) });
});
