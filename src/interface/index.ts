import { ReactNode } from "react";
import { Path, UseFormGetValues, UseFormRegister } from "react-hook-form";

export interface iProviderProps {
  children: ReactNode;
}

export interface ILoginRequest {
  login: string;
  password: string;
}

export interface iInputProps {
  default?: string;
  errorMessage?: string;
  errors?: any;
  getValues: UseFormGetValues<any>;
  id: Path<any>;
  label: string;
  login?: boolean;
  name?: string;
  register: UseFormRegister<any>;
  type: string;
  showPass?: boolean;
  defaultValue?: string;
}
