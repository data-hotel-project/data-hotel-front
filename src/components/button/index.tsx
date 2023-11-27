import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./style";

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  fontColor?: string;
  size: "big" | "medium";
  borderColor?: string;
  backgroundColorHover?: string;
  borderColorHover?: string;
  fontColorHover?: string;
}

const Button = ({
  children,
  backgroundColor,
  fontColor,
  size,
  borderColor,
  backgroundColorHover,
  borderColorHover,
  fontColorHover,
  ...rest
}: iButtonProps) => {
  return (
    <StyledButton
      backgroundcolor={backgroundColor}
      size={size}
      fontColor={fontColor}
      borderColor={borderColor}
      backgroundColorHover={backgroundColorHover}
      borderColorHover={borderColorHover}
      fontColorHover={fontColorHover}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
