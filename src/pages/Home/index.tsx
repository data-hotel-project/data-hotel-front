import Header from "../../components/Header";
import { StyledH2, StyledUL } from "./style";
import { StyledHeader } from "../../components/Header/style";
import Background from "../../components/Background";
import { useAuth } from "../../contexts/AuthContext";
import { useHotel } from "../../contexts/HotelContext";
import { HotelCard } from "../../components/Cards/HotelCard";
import { Modal } from "../../components/Modal";
import Teste from "../../components/Teste";

export const Home = () => {
  const {user, showModal} = useAuth();
  const { hotels } = useHotel();

  console.log(user)
  return (
    <>
      {showModal != "" ? <Modal title={"Modal Teste"}><Teste url="http://res.cloudinary.com/dl6chlmjd/image/upload/v1700924204/igmrhpw7lntvlfwtkagw.jpg"/></Modal>:null}

      <StyledHeader />
      <Background>
        <Header />
        <StyledH2>GRAND DATA HOTEL</StyledH2>

        <StyledUL>
          {hotels?.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
            
          ))}
        </StyledUL>
      </Background>
    </>
  );
};
