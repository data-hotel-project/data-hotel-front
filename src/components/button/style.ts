import styled, { css } from "styled-components";
import { iButtonStyledProps } from "../../interface";

export const StyledButton = styled.button<iButtonStyledProps>`
  font-family: var(--font-family-3); // ajustar
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s;

  ${({ $backgroundColor, $fontColor, size, $borderColor }) => css`
    background-color: ${$backgroundColor ||
    "var(--primary-normal)"}; // ajustar valor default
    color: ${$fontColor || "var(--primary-light)"};
    font-size: ${size === "big" ? "16px" : "14px"};
    padding: ${size === "big" ? "12px" : "8px 20px"};
    border: 1.5px solid ${$borderColor || "var(--secondary-normal)"};
    padding: ${size === "big" ? "12px" : "8px 20px"};
  `}

  &:not(:disabled):hover {
    ${({
      $backgroundColor,
      $fontColor,
      $borderColor,
      $backgroundColorHover,
      $fontColorHover,
      $borderColorHover,
    }) => css`
      background-color: ${$backgroundColorHover || $backgroundColor};
      border: ${$borderColorHover || $borderColor};
      color: ${$fontColorHover || $fontColor};

      filter: ${!$borderColorHover &&
      !$backgroundColorHover &&
      "brightness(120%)"};
    `}
  }

  &:disabled {
    background-color: #ced4da;
    color: #ffffff;
    cursor: not-allowed;
  }
`;
