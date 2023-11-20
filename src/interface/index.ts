import { ReactNode } from "react";
import { Path, UseFormGetValues, UseFormRegister } from "react-hook-form";

export interface IChildrenProps {
  children: ReactNode;
}

export interface iLoginRequest {
  username: string;
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

export interface iAddress {
  id: string;
  street: string;
  number?: string;
  city: string;
  state: string;
  complement?: string;
}

export interface iHotel {
  id: string;
  name: string;
  email: string;
  num_rooms: number;
  image: string;
  address: iAddress;
}

export interface iEmployee {
  id: string;
  username: string;
  email: string;
  birthdate: string;
  nationality: string;
  contact: string;
  contact_aditional?: string;
  emergency_num: string;
  job_function: string;
  admission_date: string;
  is_working: boolean;
  address: iAddress;
  hotel: string;
  is_staff: boolean;
  is_superuser: boolean;
}

export interface iGuest {
  id: string;
  username: string;
  email: string;
  birthdate: string;
  nationality: string;
  contact: string;
  contact_aditional?: string;
  emergency_num: string;
  address: iAddress;
  is_staff: boolean;
  is_superuser: boolean;
}

export interface iRoom {
  id: string;
  number: number;
  quantity: number;
  status: string;
  entry_date: string | null;
  departure_date: string | null;
  daily_rate: string;
  total_value: string;
  hotel: string;
  guest: string | null;
}

export interface iReservation {
  id:string
  quantity:number
  entry_date:string
  departure_date:string
  guest:string
  hotel:string
}
