import styled from "styled-components";

export const StyledBody = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url(/bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;

  /* @media (min-width: 800px) {
    position: static;
    width: 1920px;
  } */
`;

export const StyledH1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  padding: 10px;
`;
