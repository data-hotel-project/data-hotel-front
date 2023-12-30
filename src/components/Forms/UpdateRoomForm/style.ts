import styled, { css } from "styled-components";

interface StyledFormProps {
  $labelbackground: string;
  $labelcolor: string;
  $inputscolor: string;
}

export const StyledForm = styled.form<StyledFormProps>`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${({ $labelbackground, $labelcolor, $inputscolor }) => css`
    --labelbackground: ${$labelbackground};
    --labelcolor: ${$labelcolor};
    --inputscolor: ${$inputscolor};
  `}

  .boxInputsOfNumber {
    display: flex;
    gap: 0.5rem;

    div {
      width: 25%;
    }

    div:last-child {
      width: 50%;
    }
  }
`;

export const BoxButtonAddImage = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 110px;
    height: 30px;
    font-size: 13px;
  }
`;
