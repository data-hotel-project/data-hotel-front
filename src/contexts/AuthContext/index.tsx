import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildrenProps, iEmployee, iGuest } from "../../interface";
import { iAuthProviderData } from "./@types";
import { api } from "../../server/Api";
import { toast } from "react-toastify";

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const AuthProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<iEmployee | iGuest | null>(null);

  const token = localStorage.getItem("@DataHotel:TOKEN");
  const userId = localStorage.getItem("@DataHotel:userID");
  const hotelId = localStorage.getItem("@DataHotel:hotelID");

  const getLoggedUser = async (access:string) => {
    try {
      const response = await api.get("/logged/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });
      setUser(response.data);

      if (token && response.data.is_superuser == true) {
        navigate("/adminDashboard");
        toast.success("Login successfully");
      } else if (token && response.data.is_staff == true) {
        localStorage.setItem("@DataHotel:hotelID", response.data.hotel);
        navigate("/employeeDashboard");
        toast.success("Login successfully");
      } else if (token && response.data.is_staff == false) {
        navigate("/guestDashboard");
        toast.success("Login successfully");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@DataHotel:TOKEN");
    localStorage.removeItem("@DataHotel:userID");
    localStorage.removeItem("@DataHotel:hotelID");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        navigate,
        user,
        setUser,
        token,
        userId,
        hotelId,
        getLoggedUser,
        userLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
