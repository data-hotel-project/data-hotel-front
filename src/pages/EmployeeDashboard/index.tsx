import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { StyledNoisy } from "../../components/Background/style";
import { StyledHeader } from "../../components/Header/style";
import Button from "../../components/button";
import { StyledDashboard } from "../GuestDashboard/style";
import { MenuContainer, ToggleButton } from "../Home/style";
import { BoxAdd, Container, LiContainer, UlContainer } from "./style";

import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { useAuth, useHotel } from "../../contexts";

export const EmployeeDashboard = () => {
  const { hotelId, userLogout } = useAuth();
  const { listRoomsByHotel, rooms } = useHotel();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    listRoomsByHotel(hotelId);
  }, []);

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
        <BoxAdd>
          <FontAwesomeIcon icon={faSquarePlus} size="2x" />
        </BoxAdd>

        <UlContainer>
          {rooms.map((room) => {
            return (
              <LiContainer key={room.id}>
                <h2>{room?.status}</h2>
              </LiContainer>
            );
          })}
          {/* <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer>
          <LiContainer></LiContainer> */}
        </UlContainer>
      </Container>
    </StyledDashboard>
  );
};
