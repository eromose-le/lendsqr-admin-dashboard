import { User } from "./user";

declare global {
  interface Window {
    analytics: any;
    lintrk: any;
  }
}

export interface GlobalInitialStateType {
  userDetail: User | null;
}
