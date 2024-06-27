import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import globalSlice, {
  getGlobalSliceStorageState,
  globalInitialState,
} from "./storeSlice";
import { lendsqlApi } from "./storeQuerySlice";
import { deepMerge, isObjectEmpty, throttle } from "@/utils/store";

const isDevelopment = import.meta.env.VITE_NODE_ENV === "development";

function getLocalStorageState() {
  const serializedState = localStorage.getItem("@state");
  if (serializedState) {
    return JSON.parse(serializedState);
  }
  return null;
}

function loadState(initialState = {}) {
  try {
    const newState = { ...initialState };
    const storageState = getLocalStorageState();
    if (storageState && !isObjectEmpty(storageState)) {
      Object.assign(newState, deepMerge(newState, storageState));
    }
    return newState;
  } catch (error) {
    //
  }
  return undefined;
}

const storeQ = configureStore({
  reducer: {
    [globalSlice.name]: globalSlice.reducer,
    [lendsqlApi.reducerPath]: lendsqlApi.reducer,
  },
  preloadedState: loadState({
    [globalSlice.name]: globalInitialState,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      lendsqlApi.middleware,
      rtkqOnResetMiddleware(lendsqlApi)
    ),

  devTools: isDevelopment,
});

setupListeners(storeQ.dispatch);

function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("@state", serializedState);
  } catch (error) {
    //
  }
}

storeQ.subscribe(
  throttle(() => {
    const state = storeQ.getState();
    saveState({
      [globalSlice.name]: getGlobalSliceStorageState(state[globalSlice.name]),
    });
  }, 1000)
);

export function rtkqOnResetMiddleware(...apis: any[]) {
  return (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    // for (const api of apis) {
    //   store.dispatch(api.util.resetApiState());
    // }
    return result;
  };
}

export default storeQ;
