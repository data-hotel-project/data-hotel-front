import { createContext, useContext } from "react";


import { NavigateFunction, useNavigate } from "react-router-dom";
import { IChildrenProps } from "../interface";

export interface iAuthProviderData {
  navigate: NavigateFunction;
}

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const AuthProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  return (
    <AuthContext.Provider
      value={{
        navigate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
