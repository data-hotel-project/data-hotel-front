import React, { useState } from "react";
import { StyledHeader } from "../../components/Header/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { StyledDashboard, StyledDashboardH2 } from "./style";
import { MenuContainer, ToggleButton } from "../Home/style";
import Button from "../../components/button";
import { StyledNoisy } from "../../components/Background/style";

export const GuestDashboard: React.FC = () => {
  const { userLogout, user } = useAuth();

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
          {/* <Link to={"/login"}> */}
          <Button size="medium" onClick={() => userLogout()}>
            Logout
          </Button>
          {/* </Link> */}
        </MenuContainer>
        <h3>DATA HOTEL</h3>
      </StyledHeader>
      <StyledDashboardH2>GUEST DASHBOARD</StyledDashboardH2>
      {/* <StyledDashboardH2>RESERVATION</StyledDashboardH2> */}
      {/* <StyledContainer>
              <StyledBox>
                <StyledSubtitles>
                  <p>Room Category</p>
                </StyledSubtitles>
              </StyledBox>
              <StyledBox>
                <StyledSubtitles>
                  <p>Your Choices</p>
                </StyledSubtitles>
              </StyledBox>
              <StyledBox>
                <StyledSubtitles>
                  <p>Current Price</p>
                </StyledSubtitles>
              </StyledBox>
              <StyledBox>
                <StyledSubtitles>
                  <p>Clients</p>
                </StyledSubtitles>
              </StyledBox>
              <StyledBox>
                <StyledSubtitles>
                  <p>Available Rooms</p>
                </StyledSubtitles>
              </StyledBox>
            </StyledContainer> */}
    </StyledDashboard>
  );
};
