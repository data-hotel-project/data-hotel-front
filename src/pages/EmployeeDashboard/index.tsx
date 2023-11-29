import { useState } from "react";
import { StyledHeader } from "../../components/Header/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { StyledDashboard } from "../GuestDashboard/style";
import { MenuContainer, ToggleButton } from "../Home/style";
import Button from "../../components/button";
import { StyledNoisy } from "../../components/Background/style";
import { UlContainer, Container, LiContainer } from "./style";
import { useAuth } from "../../contexts/AuthContext";

export const EmployeeDashboard = () => {
  const { userLogout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledDashboard>
      <StyledNoisy />
      <StyledHeader>
        <ToggleButton onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "var(--primary-light)" }}
          />
        </ToggleButton>
        <MenuContainer open={menuOpen}>
          <Button size="medium" onClick={() => userLogout()}>
            Logout
          </Button>
        </MenuContainer>
        <h3>DATA HOTEL</h3>
      </StyledHeader>

      <Container>
        <UlContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
        </UlContainer>
      </Container>
    </StyledDashboard>
  );
};
