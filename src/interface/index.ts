import { ReactNode } from "react";
import { Path, UseFormGetValues, UseFormRegister } from "react-hook-form";

export interface IChildrenProps {
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

export interface iButtonStyledProps {
  backgroundColor?: string;
  buttonSize: "big" | "medium";
  fontColor?: string;
  borderColor?: string;
  backgroundColorHover?: string;
  borderColorHover?: string;
  fontColorHover?: string;
}