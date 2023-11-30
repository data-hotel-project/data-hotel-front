import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { HotelContext } from "./HotelContext";
import { EmployeeContext } from "./EmployeeContext";
import { GuestContext } from "./GuestContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth deve ser usado dentro de um provedor AuthContext");
  }

  return authContext;
};

export const useHotel = () => {
  const hotelContext = useContext(HotelContext);

  if (!hotelContext) {
    throw new Error(
      "useHotel deve ser usado dentro de um provedor HotelContext"
    );
  }

  return hotelContext;
};

export const useEmployee = () => {
  const employeeContext = useContext(EmployeeContext);

  if (!employeeContext) {
    throw new Error(
      "useEmployee deve ser usado dentro de um provedor EmployeeContext"
    );
  }

  return employeeContext;
};

export const useGuest = () => {
  const guestContext = useContext(GuestContext);

  if (!guestContext) {
    throw new Error(
      "useGuest deve ser usado dentro de um provedor GuestContext"
    );
  }

  return guestContext;
};
