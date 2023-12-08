import styled from "styled-components";

export const StyledDashboard = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-normal);
  margin: 0 auto;

  @media (min-width: 1400px) {
    width: 1400px;
  }
`;

export const StyledContainer = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  width: 90%;
  border-top: 1px solid var(--secondary-normal);
  background-color: transparent;
  margin-top: 30px;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledDashboardH2 = styled.h2`
  font-size: 30px;
  margin-top: 90px;

  @media (min-width: 600px) {
    margin-top: 15px;
    font-size: 60px;
  }
`;

export const StyledSubtitles = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-bottom: 1px solid var(--secondary-normal);
`;

export const StyledBox = styled.div`
  height: 70vh;
  width: 100%;
  background-color: transparent;
  border-left: 1px solid var(--secondary-normal);
  border-right: 1px solid var(--secondary-normal);

  @media (min-width: 600px) {
    width: 20%;
  }
`;
