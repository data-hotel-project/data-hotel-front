import styled from "styled-components";

export const StyledBackground = styled.div`
  position: static;
  z-index: -1;
  height: 100vh;
  width: 100%;
  background-image: url(/bg.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export const StyledShadow = styled.div`
  position: relative;
  z-index: 0;
  height: 100vh;
  width: 100%;
  background-color: black;
  opacity: 70%;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

export const StyledNoisy = styled.div`
  position: absolute;
  z-index: 0;
  height: 100vh;
  width: 100%;
  background-image: url(/tinyNoisy.jpg);
  background-position: center;
  background-size: cover;
  opacity: 5%;
  overflow-y: auto;
`;

