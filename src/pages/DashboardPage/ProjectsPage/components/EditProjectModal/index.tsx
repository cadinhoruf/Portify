import { RefObject, useContext, useEffect } from "react";
import { useOutsideClick } from "../../../../../hooks/useOutsideClick";
import CloseButtonBlack from "../../../../../assets/icons/close-black.png";
import { StyledModal } from "../../../../../styles/modalStyles";
import { EditForm } from "./components/EditForm";
import { ProjectsContext } from "../../../../../providers/ProjectsContext/ProjectsContext";

export const EditProjectModal = () => {
  const { setOpenEditModal } = useContext(ProjectsContext);

  const modalRef: RefObject<HTMLDivElement> = useOutsideClick({
    callback: () => {
      setOpenEditModal(false);
    },
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenEditModal(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpenEditModal]);

  return (
    <StyledModal role="dialog">
      <div ref={modalRef} className="modal-box">
        <div className="title-container">
          <h1>Editar Projeto</h1>
          <img src={CloseButtonBlack} onClick={() => setOpenEditModal(false)} />
        </div>
        <EditForm
          setOpenEditModal={setOpenEditModal}
        />
      </div>
    </StyledModal>
  );
};
