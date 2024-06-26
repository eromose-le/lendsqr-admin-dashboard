// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { deepReplace } from "@/utils/helper";
import { isObjectEmpty } from "@/utils/ObjectUtils";
import { type GlobalInitialStateType } from "../types/global";
import { lendsqlApi } from "./storeQuerySlice";
import { ApiUserStoreSlice } from "../api/ApiUserStoreSlice";

export const globalInitialState: GlobalInitialStateType = {
  userDetail: null,
};

const slice = createSlice({
  name: "global",
  initialState: globalInitialState,
  reducers: {
    updateUserDetails: (state, { payload }) => {
      state.userDetail = payload !== undefined ? payload : null;
    },
  },
});

export const { updateUserDetails } = slice.actions;

export default slice;

export function getGlobalSliceStorageState({
  userDetail,
}: GlobalInitialStateType) {
  const rtqStateVariables = {
    userDetail,
  };
  if (import.meta.env.VITE_NODE_ENV === "production") {
    return { ...rtqStateVariables };
  }
  return { ...rtqStateVariables };
}
