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
    (min-width: 1200px) and (max-width: 1279px) {
    padding-left: 30px;
  }

  @media (min-width: 700px) and (max-width: 758px),
    (min-width: 900px) and (max-width: 943px),
    (min-width: 1070px) and (max-width: 1135px),
    (min-width: 1280px) {
    padding-left: 50px;
  }
`;
