import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "../../components/Header/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { StyledContainer, StyledDashboard } from "./style";
import { MenuContainer, StyledH2, ToggleButton } from "../Home/style";
import Button from "../../components/button";

export const GuestDashboard:React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        <StyledDashboard>
            <StyledHeader>
                <ToggleButton onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} style={{color: "var(--primary-light)",}} />        {/* {menuOpen?'Close Menu':'Open Menu'} */}
                </ToggleButton>
                <MenuContainer open={menuOpen}>
                <Link to={"/login"}>
                    <Button size="medium">Logout</Button>
                </Link>
                </MenuContainer>
                <h2>DATA HOTEL</h2>
            </StyledHeader>
            <StyledContainer>
                <StyledH2>RESERVATION</StyledH2>
            </StyledContainer>
        </StyledDashboard>
    );
};