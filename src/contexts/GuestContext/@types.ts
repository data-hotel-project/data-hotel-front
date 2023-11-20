import { NavigateFunction } from "react-router-dom";
import { iLoginRequest } from "../../interface";


export interface IGuestContext {
  navigate: NavigateFunction,
  guestLogin: (data: iLoginRequest) => Promise<void>;
}
