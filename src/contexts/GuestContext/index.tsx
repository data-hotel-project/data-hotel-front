import { createContext, useContext, useState } from "react";
import { IGuestContext } from "./@types";
import { IChildrenProps, iGuest } from "../../interface";
import { useNavigate } from "react-router-dom";
import { api } from "../../server/Api";
import { toast } from "react-toastify";
import { TGuestLoginData } from "../../validators/guestValidators";

export const GuestContext = createContext<IGuestContext>({} as IGuestContext);

export const GuestProvider = ({ children }: IChildrenProps) => {
  const [guest, setGuest] = useState<iGuest | null>(null);
  const navigate = useNavigate();

  const guestLogin = async (formData: TGuestLoginData) => {
    console.log("olá");
    try {
      const response = await api.post("/guest/login/", formData);
      // console.log(response.data)
      setGuest(response.data.user);
      localStorage.setItem("@DataHotel:TOKEN", response.data.accessToken);
      localStorage.setItem("@DataHotel:ID", response.data.user.guest.id);
      toast.success("Login efetuado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente");
    }
  };

  return (
    <GuestContext.Provider
      value={{
        navigate,
        guestLogin,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
};

export const useGuest = () => useContext(GuestContext);
