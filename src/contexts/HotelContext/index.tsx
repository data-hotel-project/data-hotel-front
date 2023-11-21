import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IHotelContext } from "./@types";
import { api } from "../../server/Api";
import { toast } from "react-toastify";
import { IChildrenProps, iHotel, iReservation, iRoom } from "../../interface";
import {
  THotelCreateFormData,
  THotelUpdateFormData,
} from "../../validators/hotelValidators";
import {
  TRoomCreateData,
  TRoomUpdateData,
} from "../../validators/roomValidators";
import {
  TReservationCreateData,
  TReservationUpdateData,
} from "../../validators/reservationValidators";

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

export const HotelProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  const [hotel, setHotel] = useState<iHotel | null>(null);
  const [hotels, setHotels] = useState<iHotel[] | null>(null);

  const [room, setRoom] = useState<iRoom | null>(null);
  const [rooms, setRooms] = useState<iRoom[] | null>(null);

  const [reservation, setReservation] = useState<iReservation | null>(null);
  const [reservations, setReservations] = useState<iReservation[] | null>(null);

  const token = localStorage.getItem("@DataHotel:TOKEN");
  const userId = localStorage.getItem("@DataHotel:userID");
  const hotelId = localStorage.getItem("@DataHotel:hotelID");

  const createHotel = async (formData: THotelCreateFormData) => {
    try {
      const response = await api.post("/hotel/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Cadastro com sucesso");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const listHotels = async () => {
    try {
      const response = await api.post("/hotel/");
      setHotels(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const retrieveHotel = async () => {
    try {
      const response = await api.post(`/hotel/${hotelId}`);
      setHotel(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const updateHotel = async (formData: THotelUpdateFormData) => {
    try {
      const response = await api.post(`/hotel/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHotel(response.data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const deleteHotel = async () => {
    try {
      const response = await api.post(`/hotel/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Usuário deletado");
      setHotel(null);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  // ---------------------ROOM-------------------------

  const createRoom = async (formData: TRoomCreateData) => {
    try {
      const response = await api.post("/room/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Quarto com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const listRooms = async () => {
    try {
      const response = await api.post("/room/");
      setRooms(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const retrieveRoom = async () => {
    try {
      const response = await api.post(`/room/${room?.id}`);
      setRoom(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const updateRoom = async (formData: TRoomUpdateData) => {
    try {
      const response = await api.post(`/room/${room?.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRoom(response.data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const deleteRoom = async () => {
    try {
      const response = await api.post(`/room/${room?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Quarto deletado");
      setRoom(null);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  // ------------------RESERVATION---------------------

  const createReservation = async (formData: TReservationCreateData) => {
    try {
      const response = await api.post("/reservation/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Cadastro com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const listReservations = async () => {
    try {
      const response = await api.post("/reservation/");
      setReservations(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const retrieveReservation = async () => {
    try {
      const response = await api.post(`/reservation/${reservation?.id}`);
      setReservation(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const updateReservation = async (formData: TReservationUpdateData) => {
    try {
      const response = await api.post(
        `/reservation/${reservation?.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReservation(response.data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const deleteReservation = async () => {
    try {
      const response = await api.post(`/reservation/${reservation?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Reserva deletada");
      setReservation(null);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  return (
    <HotelContext.Provider
      value={{
        navigate,
        hotel,
        setHotel,
        hotels,
        setHotels,
        room,
        setRoom,
        rooms,
        setRooms,
        reservation,
        setReservation,
        reservations,
        setReservations,
        createHotel,
        listHotels,
        retrieveHotel,
        updateHotel,
        deleteHotel,
        createRoom,
        listRooms,
        retrieveRoom,
        updateRoom,
        deleteRoom,
        createReservation,
        listReservations,
        retrieveReservation,
        updateReservation,
        deleteReservation,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export const useGuest = () => useContext(HotelContext);
