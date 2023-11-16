import { ReactNode } from "react";

export interface iProviderProps {
  children: ReactNode;
}

export interface ILoginRequest {
  login: string;
  password: string;
}