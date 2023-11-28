import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "../../components/Header/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  StyledDashboard,
  StyledDashboardH2,
  StyledSubtitles,
} from "../GuestDashboard/style";
import { MenuContainer, ToggleButton } from "../Home/style";
import Button from "../../components/button";
import { StyledNoisy } from "../../components/Background/style";
import { StyledBox, StyledContainer } from "./style";
import { useAuth } from "../../contexts/AuthContext";

export const EmployeeDashboard = () => {
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
      <StyledDashboardH2>RESERVATION</StyledDashboardH2>
      <StyledContainer>
        <StyledBox>
          <StyledSubtitles>
            <p>Reservation List</p>
          </StyledSubtitles>
        </StyledBox>
        <StyledBox>
          <StyledSubtitles>
            <p>Unvailable Rooms</p>
          </StyledSubtitles>
        </StyledBox>
        <StyledBox>
          <StyledSubtitles>
            <p>Available Rooms</p>
          </StyledSubtitles>
        </StyledBox>
      </StyledContainer>
    </StyledDashboard>
  );
};
