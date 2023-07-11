import { RefObject, useEffect } from "react";
import { useOutsideClick } from "../../../../../hooks/useOutsideClick";
import CloseButtonBlack from "../../../../../assets/icons/close-black.png";
import { StyledModal } from "../../../../../styles/modalStyles";
import { AddForm } from "./components/AddForm";

interface AddProjectModalProps {
  setOpenAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  isPortfolioId: number | null;
}

export const AddProjectModal = ({ setOpenAddModal, isPortfolioId, }: AddProjectModalProps) => {
  const modalRef: RefObject<HTMLDivElement> = useOutsideClick({
    callback: () => {
      setOpenAddModal(false);
    },
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenAddModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpenAddModal]);

  return (
    <StyledModal role="dialog">
      <div ref={modalRef} className="modal-box">
        <div className="title-container">
          <h1>Criar Projeto</h1>
          <img src={CloseButtonBlack} onClick={() => setOpenAddModal(false)} />
        </div>
        <AddForm isPortfolioId={isPortfolioId} setOpenAddModal={setOpenAddModal} />
      </div>
    </StyledModal>
  );
};
