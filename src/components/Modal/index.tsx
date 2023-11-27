import { useAuth } from "../../contexts/AuthContext";
import { StyledModal } from "./styles";

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

export const Modal = ({ title, children }: ModalProps) => {
  const { setShowModal, closeModal, showModal } = useAuth();

  return (
    <StyledModal>
      <div
        className="container"
        onClick={showModal != "" ? closeModal : undefined}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="header">
            <h4 className="title">{title}</h4>
            <div className="close" onClick={() => setShowModal("")}>
              x
            </div>
          </header>
          <div className="content">{children}</div>
        </div>
      </div>
    </StyledModal>
  );
};
