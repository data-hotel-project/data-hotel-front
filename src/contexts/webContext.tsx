import { createContext, useContext } from "react";
import { iProviderProps } from "../interface";

import { NavigateFunction, useNavigate } from "react-router-dom";

export interface iAuthProviderData {
  navigate: NavigateFunction;
}

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const AuthProvider = ({ children }: iProviderProps) => {
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
