import styled from "styled-components";
import { iButtonStyledProps } from "../../interface";

export const StyledButton = styled.button <iButtonStyledProps>`
  font-family: var(--font-family-3); // ajustar
  font-weight: 600;
  background-color: ${(props) => props.backgroundColor || "var(--primary-normal)"}; // ajustar valor default
  color: ${(props) => props.fontColor || "var(--primary-light)"};
  font-size: ${(props) => (props.size === "big" ? "16px" : "14px")};
  padding: ${(props) =>
    props.size === "big" ? "12px" : "8px 20px"};
  border: 1.5px solid ${(props) => props.borderColor || "transparent"};
  transition: background-color 0.2s;
  border: 1px solid var(--secondary-normal);
  text-decoration: none;

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.backgroundColorHover || props.backgroundColor};
    border: ${(props) => props.borderColorHover || props.borderColor};
    color: ${(props) => props.fontColorHover || props.fontColor};
    ${(props) =>
      !props.borderColorHover &&
      !props.backgroundColorHover &&
      `filter: brightness(120%);`}
  }

  &:disabled {
    background-color: #ced4da;
    color: #ffffff;
    cursor: not-allowed;
  }
`;
