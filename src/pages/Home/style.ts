import styled from "styled-components";

export const Ancor = styled.a`
  font-size: 20px;
  height: 100px;
  transition: 0.3s;

  &.active {
    background-color: var(--primary-light-active);
  }
`;

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
  overflow-y: auto;
`;

export const StyledH2 = styled.h2`
  position: absolute;
  z-index: -1;
  width: 10px;
  margin-top: 330px;
  font-size: 30px;
  font-weight: bold;
  font-family: "Brolia";
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    margin-top: 350px;
    font-size: 50px;
    width: 100%;
  }
`;

export const StyledUL = styled.ul`
  padding-top: 7rem;
  padding-bottom: 7rem;
  display: flex;
  flex-direction: flex;
  justify-content: center;
  align-items: center;
  background: #161615;

  gap: 1rem;
`;
