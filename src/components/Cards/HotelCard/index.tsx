import { useAuth } from "../../../contexts/AuthContext";
import { useHotel } from "../../../contexts/HotelContext";
import { iHotel } from "../../../interface";
import { StyledHotelCard } from "./style";

interface CardProps {
  hotel: iHotel;
}

export const HotelCard = ({hotel}: CardProps) => {
  const { setShowModal } = useAuth();
  const { deleteHotel } = useHotel();
  return (
    <>
      <StyledHotelCard onClick={()=>setShowModal(hotel.full_url)}>
        <figure>
          <img src={hotel.full_url} alt="Cover" />
        </figure>
        <h3>{hotel.name}</h3>
        <h4>{hotel.address.city}</h4>
        <div>
          <button onClick={() => deleteHotel(hotel.id)}>deletar</button>
        </div>
      </StyledHotelCard>
    </>
  );
};
