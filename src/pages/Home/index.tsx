import Header from "../../components/Header";
import { StyledH2, StyledUL } from "./style";
import { StyledHeader } from "../../components/Header/style";
import Background from "../../components/Background";
import { useAuth } from "../../contexts/AuthContext";
import { useHotel } from "../../contexts/HotelContext";
import { HotelCard } from "../../components/Cards/HotelCard";

export const Home = () => {
  const {} = useAuth();
  const { hotels } = useHotel();

  return (
    <>
      <StyledHeader />
      <Background>
        <Header />
        <StyledH2>GRAND DATA HOTEL</StyledH2>

        <StyledUL>
          {hotels?.map((hotel) => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              city={hotel.address.city}
              img={hotel.full_url}
            />
          ))}
        </StyledUL>
      </Background>
    </>
  );
};
