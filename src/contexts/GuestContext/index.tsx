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
import { AuthContext } from "../AuthContext";

export const GuestContext = createContext<IGuestContext>({} as IGuestContext);

export const GuestProvider = ({ children }: IChildrenProps) => {
  const [guest, setGuest] = useState<iGuest | null>(null);
  const [guests, setGuests] = useState<iGuest[] | null>(null);

  const { token, userId, navigate } = useContext(AuthContext);

  const loginGuest = async (formData: TGuestLoginData) => {
    console.log("olá");
    try {
      const response = await api.post("/guest/login/", formData);
      console.log(response.data);
      setGuest(response.data.user);
      localStorage.setItem("@DataHotel:TOKEN", response.data.access);
      localStorage.setItem("@DataHotel:userID", response.data.user.id);
      toast.success("Login efetuado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("username ou senha inválido");
    }
  };

  const createGuest = async (formData: TGuestFormData) => {
    try {
      const response = await api.post("/guest/", formData);
      console.log(response.data);
      toast.success("Cadastro com sucesso");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const listGuests = async () => {
    try {
      const response = await api.post("/guest/");
      setGuests(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const retrieveGuest = async () => {
    try {
      const response = await api.post(`/guest/${userId}`);
      setGuest(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const updateGuest = async (formData: TGuestUpdateFormData) => {
    try {
      const response = await api.post(`/guest/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGuest(response.data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const deleteGuest = async () => {
    try {
      const response = await api.post(`/guest/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Usuário deletado");
      setGuest(null);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
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
