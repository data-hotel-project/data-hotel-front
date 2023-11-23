import { NavigateFunction } from "react-router-dom";
import { iHotel, iReservation, iRoom } from "../../interface";
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

export interface IHotelContext {
  navigate: NavigateFunction;
  hotel: iHotel | null;
  setHotel: React.Dispatch<React.SetStateAction<iHotel | null>>;
  hotels: iHotel[] | null;
  setHotels: React.Dispatch<React.SetStateAction<iHotel[] | null>>;
  room: iRoom | null;
  setRoom: React.Dispatch<React.SetStateAction<iRoom | null>>;
  rooms: iRoom[] | null;
  setRooms: React.Dispatch<React.SetStateAction<iRoom[] | null>>;
  reservation: iReservation | null;
  setReservation: React.Dispatch<React.SetStateAction<iReservation | null>>;
  reservations: iReservation[] | null;
  setReservations: React.Dispatch<React.SetStateAction<iReservation[] | null>>;
  createHotel: (formData: THotelCreateFormData) => Promise<void>;
  listHotels: () => Promise<void>;
  retrieveHotel: () => Promise<void>;
  updateHotel: (formData: THotelUpdateFormData) => Promise<void>;
  deleteHotel: () => Promise<void>;
  createRoom: (formData: TRoomCreateData) => Promise<void>;
  listRooms: () => Promise<void>;
  retrieveRoom: () => Promise<void>;
  updateRoom: (formData: TRoomUpdateData) => Promise<void>;
  deleteRoom: () => Promise<void>;
  createReservation: (formData: TReservationCreateData) => Promise<void>;
  listReservations: () => Promise<void>;
  retrieveReservation: () => Promise<void>;
  updateReservation: (formData: TReservationUpdateData) => Promise<void>;
  deleteReservation: () => Promise<void>;
}
