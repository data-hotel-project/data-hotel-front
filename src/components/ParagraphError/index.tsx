import { RiErrorWarningFill } from "react-icons/ri";
import { ParagraphError } from "./style";
import { iProviderProps } from "../../interface";

export const ErrorMessage = ({ children }: iProviderProps) => {
  return (
    <ParagraphError>
      {children && <RiErrorWarningFill />}
      {children}
    </ParagraphError>
  );
};
