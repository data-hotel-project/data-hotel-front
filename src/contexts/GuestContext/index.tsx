import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IGuestContext } from "./@types";
import { api } from "../../server/Api";
import { toast } from "react-toastify";
import { IChildrenProps, iGuest } from "../../interface";
import {
  TGuestFormData,
  TGuestLoginData,
  TGuestUpdateFormData,
} from "../../validators/guestValidators";

export const GuestContext = createContext<IGuestContext>(
  {} as IGuestContext
);

export const GuestProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  const [guest, setGuest] = useState<iGuest | null>(null);
  const [guests, setGuests] = useState<iGuest[] | null>(null);

  const token = localStorage.getItem("@DataHotel:TOKEN");
  const userId = localStorage.getItem("@DataHotel:ID");

  

  const loginGuest = async (formData: TGuestLoginData) => {
    try {
        const response = await api.post("/guest/login/", formData);
        console.log(response.data)
        setGuest(response.data.user);
        localStorage.setItem("@DataHotel:TOKEN", response.data.accessToken);
        localStorage.setItem("@DataHotel:ID", response.data.user.id);
        toast.success("Login efetuado com sucesso");
        navigate("/");
      } catch (error) {
        console.log(error);
        toast.error("Tente novamente");
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
