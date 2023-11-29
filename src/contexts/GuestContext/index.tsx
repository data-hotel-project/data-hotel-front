import { createContext, useContext, useState } from "react";
import { IGuestContext } from "./@types";
import { api } from "../../server/Api";
import { toast } from "react-toastify";
import { IChildrenProps, iGuest } from "../../interface";
import {
  TGuestFormData,
  TGuestLoginData,
  TGuestUpdateFormData,
} from "../../validators/guestValidators";
import { AuthContext, useAuth } from "../AuthContext";

export const GuestContext = createContext<IGuestContext>({} as IGuestContext);

export const GuestProvider = ({ children }: IChildrenProps) => {
  const { setUser, getLoggedUser } = useAuth();

  const [guest, setGuest] = useState<iGuest | null>(null);
  const [guests, setGuests] = useState<iGuest[] | null>(null);

  const { token, userId, navigate } = useContext(AuthContext);

  const loginGuest = async (formData: TGuestLoginData) => {
    try {
      const response = await api.post("/guest/login/", formData);
      setUser(response.data.user);
      localStorage.setItem("@DataHotel:TOKEN", response.data.access);
      localStorage.setItem("@DataHotel:userID", response.data.user.id);
      getLoggedUser();
    } catch (error) {
      console.log(error);
      toast.error("username or password invalid");
    }
  };

  const createGuest = async (formData: TGuestFormData) => {
    try {
      const response = await api.post("/guest/", formData);

      toast.success("Successful registration");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const listGuests = async () => {
    try {
      const response = await api.get("/guest/");
      setGuests(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveGuest = async () => {
    try {
      const response = await api.get(`/guest/${userId}`);
      setGuest(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateGuest = async (formData: TGuestUpdateFormData) => {
    try {
      const response = await api.patch(`/guest/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGuest(response.data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGuest = async () => {
    try {
      const response = await api.delete(`/guest/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("User deleted");
      setGuest(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GuestContext.Provider
      value={{
        navigate,
        guest,
        setGuest,
        guests,
        setGuests,
        loginGuest,
        createGuest,
        listGuests,
        retrieveGuest,
        updateGuest,
        deleteGuest,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
};

export const useGuest = () => useContext(GuestContext);
