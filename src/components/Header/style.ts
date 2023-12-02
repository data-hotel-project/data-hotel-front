import styled from "styled-components";

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

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
