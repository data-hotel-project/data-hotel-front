import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "../../components/Header/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  StyledBox,
  StyledContainer,
  StyledDashboard,
  StyledDashboardH2,
  StyledSubtitles,
} from "../GuestDashboard/style";
import { MenuContainer, StyledUL, ToggleButton } from "../Home/style";
import Button from "../../components/button";
import { StyledNoisy } from "../../components/Background/style";
import { useAuth } from "../../contexts/AuthContext";
import { useHotel } from "../../contexts/HotelContext";
import { HotelCard } from "../../components/Cards/HotelCard";

export const AdminDashboard = () => {
  const { userLogout, user } = useAuth();
  const { hotels } = useHotel();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  console.log(user);
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
        <StyledUL>
          {hotels?.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </StyledUL>

        {/* <StyledBox>
                    <StyledSubtitles>
                        <p>Employee List</p>
                    </StyledSubtitles>
                </StyledBox>
                <StyledBox>
                    <StyledSubtitles> 
                        <p>Reservation List</p>
                    </StyledSubtitles>
                </StyledBox>
                <StyledBox>
                    <StyledSubtitles>
                        <p>Unavailable Rooms</p>
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
                </StyledBox> */}
      </StyledContainer>
    </StyledDashboard>
  );
};
