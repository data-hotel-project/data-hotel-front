import { createContext, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { IChildrenProps } from "../../interface";
import { iAuthProviderData } from "./@types";

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const AuthProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("@DataHotel:TOKEN");
  const userId = localStorage.getItem("@DataHotel:userID");
  const hotelId = localStorage.getItem("@DataHotel:hotelID");

  return (
    <AuthContext.Provider
      value={{
        navigate,
        token,
        userId,
        hotelId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
