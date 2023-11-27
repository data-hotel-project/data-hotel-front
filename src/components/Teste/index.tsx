import { useHotel } from "../../contexts/HotelContext";
import { StyledTeste } from "./style";

const Teste = () => {
  const { hotel } = useHotel();
  return (
    <>
      <StyledTeste>
        <img src={hotel?.full_url} alt="img" />
      </StyledTeste>
    </>
  );
};

export default Teste;
