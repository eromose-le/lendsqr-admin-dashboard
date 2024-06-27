import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@/utils/axios-base-request";

import { LendsqlHttp } from "../configs/HttpConfig";
import { RtkqTagEnum } from "@/constants/Strings";
import { UserDetail, Users } from "@/types/user";
import { updateUserDetails } from "./storeSlice";

// Function to simulate a delay
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const fetchUsersData = async () => {
  const response = await import("../data.ts");
  return response.USERS_DATA;
};

const fetchUserDetailData = async () => {
  const response = await import("../data.ts");
  return response.USER_DETAIL;
};

export const lendsqlApi = createApi({
  reducerPath: "lendsql",
  baseQuery: axiosBaseQuery({}, LendsqlHttp),
  tagTypes: [RtkqTagEnum.USERS],
  endpoints: (builder) => ({
    getUsers: builder.query<Users[], void>({
      queryFn: async () => {
        await delay(1000);
        const data = await fetchUsersData();
        return { data };
      },
      providesTags: [RtkqTagEnum.USERS],
    }),
    getUser: builder.query<UserDetail, void>({
      queryFn: async () => {
        await delay(1000);
        const data = await fetchUserDetailData();
        return { data };
      },
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const data = await queryFulfilled;

          dispatch(updateUserDetails(data?.data));
        } catch (error) {}
      },
      providesTags: [RtkqTagEnum.USERS],
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
