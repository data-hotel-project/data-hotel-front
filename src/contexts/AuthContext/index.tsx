import { createContext, useContext, useEffect, useState } from "react";
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

  const [showModal, setShowModal] = useState<string>("");

  const closeModal = () => {
    setShowModal("");
  };

  const getLoggedUser = async () => {
    if (token) {
      try {
        const response = await api.get("/logged/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data)
        setUser(response.data.user);

        if (token && response.data.user.is_superuser == true) {
          navigate("/adminDashboard");
          toast.success("Login successfully");
        } else if (token && response.data.user.is_staff == true) {
          localStorage.setItem("@DataHotel:hotelID", response.data.hotel);
          navigate("/employeeDashboard");
          toast.success("Login successfully");
        } else if (token && response.data.user.is_staff == false) {
          navigate("/guestDashboard");
          toast.success("Login successfully");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@DataHotel:TOKEN");
    localStorage.removeItem("@DataHotel:userID");
    localStorage.removeItem("@DataHotel:hotelID");
    navigate("/");
  };

  useEffect(() => {
    getLoggedUser();
  }, [token]);

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
        showModal,
        setShowModal,
        closeModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
