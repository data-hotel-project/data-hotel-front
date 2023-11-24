import { NavigateFunction } from "react-router-dom";
import { iEmployee, iGuest } from "../../interface";

export interface iAuthProviderData {
  navigate: NavigateFunction;
  user: iEmployee | iGuest | null;
  setUser: React.Dispatch<React.SetStateAction<iEmployee | iGuest | null>>;
  token: string | null;
  userId: string | null;
  hotelId: string | null;
  getLoggedUser: (access:string) => Promise<void>;
  userLogout: () => void;
}
