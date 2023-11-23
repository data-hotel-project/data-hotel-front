import Header from "../../components/Header";
import { StyledH2 } from "./style";
import { StyledHeader } from "../../components/Header/style";
import Background from "../../components/Background";

export const Home:React.FC = () => {
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
