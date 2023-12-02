import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 90%;
  height: 460px;

  padding-left: 7px;
  padding-right: 7px;
  margin-top: 10rem;
  border: 1px solid var(--secondary-normal);
`;

export const BoxAdd = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: green;

    &:hover {
      filter: brightness("120%");
    }
  }
`;

export const UlContainer = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;

  height: 87%;
  width: 97%;
  padding-bottom: 1rem;

  overflow-y: scroll;

  @media (max-width: 386px) {
    justify-content: center;
  }

  @media (min-width: 410px) and (max-width: 449px) {
    padding-left: 10px;
  }

  @media (min-width: 450px) and (max-width: 489px) {
    padding-left: 15px;
  }

  @media (min-width: 490px) and (max-width: 549px) {
    padding-left: 45px;
  }

  @media (min-width: 550px) and (max-width: 595px) {
    padding-left: 55px;
  }

  @media (min-width: 625px) and (max-width: 699px),
    (min-width: 820px) and (max-width: 899px),
    (min-width: 1030px) and (max-width: 1069px),
    (min-width: 1070px) {
    padding-left: 30px;
  }

  @media (min-width: 700px) and (max-width: 758px),
    (min-width: 900px) and (max-width: 943px),
    (min-width: 1070px) and (max-width: 1186px) {
    padding-left: 50px;
  }
`;

export const LiContainer = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;

  height: 160px;
  width: 150px;

  padding: 10px;
  border: 1px solid var(--secondary-normal);
  border-radius: 5px;
  background-color: #151515;
`;

export const BoxImage = styled.figure`
  display: flex;
  border-radius: 5px;

  img {
    border-radius: 4px;
    width: 100%;
  }
`;

export const SubTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 3px;

  color: #dcdcdc;
  padding-left: 4px;
  font-size: 11px;
`;

export const Span = styled.span`
  font-size: 10px;
  color: #bfbfbf;
`;

export const BoxPersons = styled.div`
  display: flex;
  height: 10px;
  gap: 3px;
  padding-left: 4px;

  svg {
    font-size: 10px;
    color: #dcdcdc;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 3px;
  justify-content: space-around;
  width: 98%;

  margin-top: 4px;
  padding-left: 4px;
`;
