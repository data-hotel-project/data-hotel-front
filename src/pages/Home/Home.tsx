import Header from "../../components/Header";
import { StyledH2, StyledUL } from "./style";
import { StyledHeader } from "../../components/Header/style";
import Background from "../../components/Background";
import { HotelCard } from "../../components/Cards/HotelCard";
import { Modal } from "../../components/Modal";
import HotelInfo from "../../components/HotelInfo";
import { useAuth, useHotel } from "../../contexts";

export const Home = () => {
  const { showModal } = useAuth();
  const { hotels, hotel } = useHotel();

  return (
    <>
      {showModal != "" ? (
        <Modal title={hotel?.name}>
          <HotelInfo />
        </Modal>
      ) : null}
      <StyledHeader />
      <Background>
        <Header />
        <StyledH2>GRAND DATA HOTEL</StyledH2>
      </Background>
      <StyledUL>
        {hotels?.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </StyledUL>
    </>
  );
};
