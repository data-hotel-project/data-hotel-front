import { useHotel } from "../../../contexts/HotelContext";
import { StyledHotelCard } from "./style";

interface hotelProps {
    id: string
    name: string
    city: string
    img: string
}

export const HotelCard = (hotel: hotelProps) => {
const {deleteHotel, setHotel} = useHotel()
  return (
    <>
      <StyledHotelCard>
        <figure>
          <img src={hotel.img} alt="Cover" />
        </figure>
        <h3>{hotel.name}</h3>
        <h4>{hotel.city}</h4>
        <div>
          {/* <button onClick={(e)=>setHotel(e.)}>editar</button> */}
          <button onClick={()=>deleteHotel(hotel.id)}>deletar</button>
        </div>
      </StyledHotelCard>
    </>
  );
};
