import styled, { keyframes } from "styled-components";

interface MenuProps {
  open?: boolean;
}

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

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  height: 8vh;
  width: 100%;
  box-shadow: rgba(100, 100, 100, 1) 1.95px 1.95px 2.6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  background-color: var(--primary-normal);

  @media (min-width: 1300px) {
    width: 1300px;
  }
`;

export const MenuContainer = styled.div<MenuProps>`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: var(--primary-normal);
  padding-top: 55px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid var(--secondary-normal);
  animation: ${({ open }) => (open ? openAnimate : closeAnimate)} 0.3s both;

  a {
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const ToggleButton = styled.button`
  z-index: 3;
  background-color: transparent;
  color: var(--primary-light);
  border: 0;
  cursor: pointer;
  padding: 5px 10px;
`;
