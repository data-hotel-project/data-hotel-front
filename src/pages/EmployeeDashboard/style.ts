import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 90%;
  height: 460px;

  margin-top: 10rem;
  border: 1px solid var(--secondary-normal);
`;

export const UlContainer = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;

  height: 87%;
  width: 97%;

  overflow-y: scroll;
`;

export const LiContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 160px;
  width: 150px;

  padding-bottom: 15px;
  border: 1px solid var(--secondary-normal);
`;
