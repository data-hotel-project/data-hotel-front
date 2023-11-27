import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MenuContainer, ToggleButton } from "../../pages/Home/style";
import Button from "../button";
{
  /* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg> */
}

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHeader>
      {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><style>svg{fill:#ffffff}</style><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg> */}
      {/* <h2>Menu</h2> */}
      <ToggleButton onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "var(--primary-light)" }}
        />{" "}
        {/* {menuOpen?'Close Menu':'Open Menu'} */}
      </ToggleButton>
      <MenuContainer open={menuOpen}>
        <Link to={"/login"}>
          <Button size="medium">Login</Button>
        </Link>
        <Link to={"/register"}>
          <Button size="medium">Register</Button>
        </Link>
        <Link to={"/hotels"}>
          <Button size="medium">Hotels</Button>
        </Link>
      </MenuContainer>
      <h2>DATA HOTEL</h2>
    </StyledHeader>
  );
};

export default Header;
