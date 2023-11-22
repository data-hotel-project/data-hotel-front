import { NavigateFunction } from "react-router-dom";

export interface iAuthProviderData {
  navigate: NavigateFunction;
  token: string | null;
  userId: string | null;
  hotelId: string | null;
}
