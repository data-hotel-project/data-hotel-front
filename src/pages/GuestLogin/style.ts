import styled, { keyframes } from "styled-components";

interface BoxIsEmployeeProps {
  isEmployee: boolean;
}

export const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    position: relative;
  }

  .name {
    text-align: center;
    margin-bottom: 2rem;
  }

  .box {
    border: 1px solid rgba(223, 99, 71, 0.3);
    border-radius: 1rem;
    background-color: rgba(223, 99, 71, 0.3);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: rgba(250, 250, 250, 0.8);
    }

    input {
      border-color: rgba(230, 230, 230, 0.5);
      background-color: rgba(230, 230, 230, 0.2);
    }

    input::placeholder {
    }

    .links {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
      color: rgba(250, 250, 250, 0.8);
    }

    button {
      width: 100%;
      height: 3rem;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

const openAnimateCondition = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(15px);
  }
`;

const closeAnimateCondition = keyframes`
  0% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const BoxIsEmployee = styled.div<BoxIsEmployeeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 20px;
  gap: 10px;
  margin-top: 10px;
  width: 100%;

  .boxCondition {
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 20px;
    width: 40px;
    background: ${({ isEmployee }) => (isEmployee ? "green" : "red")};
    transition: 0.3s;
    border-radius: 20px;
    cursor: pointer;

    .condition {
      display: flex;
      height: 16px;
      width: 20px;
      background: white;
      border-radius: 20px;
      animation: ${({ isEmployee }) =>
          isEmployee ? openAnimateCondition : closeAnimateCondition}
        0.3s both;
    }
  }

  h4 {
    font-size: 14px;
  }
`;
