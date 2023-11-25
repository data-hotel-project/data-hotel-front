import Header from "../../components/Header";
import { StyledH2 } from "./style";
import { StyledHeader } from "../../components/Header/style";
import Background from "../../components/Background";
import { useAuth } from "../../contexts/AuthContext";
import { useHotel } from "../../contexts/HotelContext";

export const Home = () => {
  const {} = useAuth()
  const {} = useHotel()

  
  return (
    <>
      <StyledHeader />
      <Background>
        <Header />
        <StyledH2>GRAND DATA HOTEL</StyledH2>
      </Background>
    </>
  );
};
