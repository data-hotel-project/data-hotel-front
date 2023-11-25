import { createContext, useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../AuthContext";

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

export const HotelProvider = ({ children }: IChildrenProps) => {

  const [hotel, setHotel] = useState<iHotel | null>(null);
  const [hotels, setHotels] = useState<iHotel[] | null>(null);

  const [room, setRoom] = useState<iRoom | null>(null);
  const [rooms, setRooms] = useState<iRoom[] | null>(null);

  const [reservation, setReservation] = useState<iReservation | null>(null);
  const [reservations, setReservations] = useState<iReservation[] | null>(null);

  const { token, userId, hotelId, navigate } = useContext(AuthContext)
  
  

  const createHotel = async (formData: THotelCreateFormData) => {
    try {
      const response = await api.post("/hotel/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Successful registration");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const listHotels = async () => {
    try {
      const response = await api.get("/hotel/");
      console.log(response.data.lentgh)
      setHotels(response.data);
      if (response.data.lentgh == 1) {
        localStorage.setItem("@DataHotel:hotelID", response.data[0].id)
      }
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const retrieveHotel = async () => {
    try {
      const response = await api.get(`/hotel/${hotelId}`);
      setHotel(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const updateHotel = async (formData: THotelUpdateFormData) => {
    try {
      const response = await api.patch(`/hotel/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHotel(response.data);
      navigate(`/adminDashboard`);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const deleteHotel = async () => {
    try {
      const response = await api.delete(`/hotel/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("User deleted");
      setHotel(null);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  useEffect(() => {
    listHotels();
  }, [token]);

  // ---------------------ROOM-------------------------

  const createRoom = async (formData: TRoomCreateData) => {
    try {
      const response = await api.post("/room/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Room successful registration");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const listRooms = async () => {
    try {
      const response = await api.get("/room/");
      setRooms(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const retrieveRoom = async () => {
    try {
      const response = await api.get(`/room/${room?.id}`);
      setRoom(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const updateRoom = async (formData: TRoomUpdateData) => {
    try {
      const response = await api.patch(`/room/${room?.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRoom(response.data);
      navigate(`/employeeDashboard`);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const deleteRoom = async () => {
    try {
      const response = await api.delete(`/room/${room?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Romm deleted");
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
      toast.success("Revervation successful registration");
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const listReservations = async () => {
    try {
      const response = await api.get("/reservation/");
      setReservations(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const retrieveReservation = async () => {
    try {
      const response = await api.get(`/reservation/${reservation?.id}`);
      setReservation(response.data);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  const updateReservation = async (formData: TReservationUpdateData) => {
    try {
      const response = await api.patch(
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
      const response = await api.delete(`/reservation/${reservation?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      toast.success("Reservation deleted");
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

export const useHotel = () => useContext(HotelContext);
