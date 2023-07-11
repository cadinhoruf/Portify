import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../../../../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { TEditForm, EditFormSchema } from "./schema";
import { useContext, useEffect } from "react";
import { ProjectsContext } from "../../../../../../../providers/ProjectsContext/ProjectsContext";
import { StyledButton } from "../../../../../../../components/Button/styles";
import { StyledEditForm } from "./styles";

interface EditFormProps {
  setOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditForm: React.FC<EditFormProps> = () => {
  const { editProject, selectedProject, setOpenEditModal } =
    useContext(ProjectsContext);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditForm>({
    resolver: zodResolver(EditFormSchema),
  });

  const submit: SubmitHandler<TEditForm> = (formData) => {
    const projectId = selectedProject?.id;
    if (projectId !== null && projectId !== undefined) {
      editProject(formData, projectId);
      setOpenEditModal(false);
      reset();
    }
  };

  useEffect(() => {
    if (selectedProject) {
      reset({
        name: selectedProject.name,
        description: selectedProject.description,
        repository: selectedProject.repository,
        link: selectedProject.link,
        coverUrl: selectedProject.coverUrl,
      });
    }
  }, [selectedProject, reset]);

  return (
    <StyledEditForm onSubmit={handleSubmit(submit)}>
      <Input type="text" id="name" {...register("name")} placeholder="Nome" />
      {errors.name?.message && <p>{errors.name.message}</p>}
      <Input
        type="text"
        id="description"
        {...register("description")}
        placeholder="Descrição resumida"
      />
      {errors.description?.message && <p>{errors.description.message}</p>}
      <Input
        type="text"
        id="repository"
        {...register("repository")}
        placeholder="Repositório"
      />
      {errors.repository?.message && <p>{errors.repository.message}</p>}
      <Input
        type="text"
        id="link"
        {...register("link")}
        placeholder="Link do deploy (opcional)"
      />
      <Input
        type="text"
        id="coverUrl"
        {...register("coverUrl")}
        placeholder="URL da imagem (opcional)"
      />
      <StyledButton color="solid-green" widthsize="large1" type="submit">
        Editar Projeto
      </StyledButton>
    </StyledEditForm>
  );
};
