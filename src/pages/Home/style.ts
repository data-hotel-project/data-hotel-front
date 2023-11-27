import styled, { keyframes } from "styled-components";

const openAnimate = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const closeAnimate = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: var(--primary-normal);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid var(--secondary-normal);
  animation: ${({ open }) => (open ? openAnimate : closeAnimate)} 0.3s both;

  a {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Ancor = styled.a`
  font-size: 20px;
  height: 100px;
  transition: 0.3s;

  &.active {
    background-color: var(--primary-light-active);
  }
`

export const ToggleButton = styled.button`
  z-index: 3;
  background-color: transparent;
  color: var(--primary-light);
  border: 0;
  cursor: pointer;
  padding: 5px 10px;
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
  font-family: 'Brolia';
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    margin-top: 350px;
    font-size: 50px;
    width: 100%;
  };
`;
