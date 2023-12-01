import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IChildrenProps, iHotel, iReservation, iRoom } from "../../interface";
import { api } from "../../server/Api";
import {
  THotelCreateFormData,
  THotelUpdateFormData,
} from "../../validators/hotelValidators";
import {
  TReservationCreateData,
  TReservationUpdateData,
} from "../../validators/reservationValidators";
import {
  TRoomCreateData,
  TRoomUpdateData,
} from "../../validators/roomValidators";
import { IHotelContext } from "./@types";
import { useAuth } from "..";

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

export const HotelProvider = ({ children }: IChildrenProps) => {
  const [hotel, setHotel] = useState<iHotel | null>(null);
  const [hotels, setHotels] = useState<iHotel[] | []>([]);

  const [room, setRoom] = useState<iRoom | null>(null);
  const [rooms, setRooms] = useState<iRoom[] | []>([]);
  const [allRooms, setAllRooms] = useState<iRoom[] | []>([]);

  const [reservation, setReservation] = useState<iReservation | null>(null);
  const [reservations, setReservations] = useState<iReservation[] | []>([]);

  const { token, userId, hotelId, navigate } = useAuth();

  const createHotel = async (formData: THotelCreateFormData) => {
    try {
      const response = await api.post("/hotel/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Successful registration");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const listHotels = async () => {
    try {
      const response = await api.get("/hotel/");
      setHotels(response.data);
      if (response.data.length == 1) {
        localStorage.setItem("@DataHotel:hotelID", response.data[0].id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveHotel = async (hotelId: string | null) => {
    try {
      const response = await api.get(`/hotel/${hotelId}`);
      setHotel(response.data);
    } catch (error) {
      console.log(error);
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
    }
  };

  const deleteHotel = async (id: string) => {
    try {
      const response = await api.delete(`/hotel/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("User deleted");
      setHotel(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listHotels();

    if (hotelId) {
      retrieveHotel(hotelId);
    }
  }, [token]);

  // ---------------------ROOM-------------------------

  const createRoom = async (formData: TRoomCreateData) => {
    try {
      const response = await api.post("/room/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Room successful registration");
    } catch (error) {
      console.log(error);
    }
  };

  const listAllRooms = async () => {
    try {
      const response = await api.get("/room/");
      setAllRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const listRoomsByHotel = async (hotelId: string | null) => {
    try {
      const response = await api.get(`/room/?hotel_id=${hotelId}`);
      setRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveRoom = async () => {
    try {
      const response = await api.get(`/room/${room?.id}`);
      setRoom(response.data);
    } catch (error) {
      console.log(error);
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
    }
  };

  const deleteRoom = async () => {
    try {
      const response = await api.delete(`/room/${room?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Romm deleted");
      setRoom(null);
    } catch (error) {
      console.log(error);
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

      toast.success("Revervation successful registration");
    } catch (error) {
      console.log(error);
    }
  };

  const listReservations = async () => {
    try {
      const response = await api.get("/reservation/");
      setReservations(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveReservation = async () => {
    try {
      const response = await api.get(`/reservation/${reservation?.id}`);
      setReservation(response.data);
    } catch (error) {
      console.log(error);
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
    }
  };

  const deleteReservation = async () => {
    try {
      const response = await api.delete(`/reservation/${reservation?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Reservation deleted");
      setReservation(null);
    } catch (error) {
      console.log(error);
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
        allRooms,
        setAllRooms,
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
        listAllRooms,
        listRoomsByHotel,
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
