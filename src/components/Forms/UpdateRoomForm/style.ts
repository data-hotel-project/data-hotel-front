import styled, { css } from "styled-components";

export const StyledForm = styled.form<{
  $labelbackground: string;
  $labelcolor: string;
  $inputscolor: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${({ $labelbackground, $labelcolor, $inputscolor }) => css`
    --labelbackground: ${$labelbackground};
    --labelcolor: ${$labelcolor};
    --inputscolor: ${$inputscolor};
  `}
`;
