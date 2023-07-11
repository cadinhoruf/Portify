import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../../../../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { TAddForm, AddFormSchema } from "./schema";
import { useContext } from "react";
import { ProjectsContext } from "../../../../../../../providers/ProjectsContext/ProjectsContext";
import { StyledButton } from "../../../../../../../components/Button/styles";
import { StyledAddForm } from "./styles";

interface AddFormProps {
  isPortfolioId: number | null;
  setOpenAddModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddForm: React.FC<AddFormProps> = ({
  isPortfolioId,
  setOpenAddModal,
}) => {
  const { createProject } = useContext(ProjectsContext);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAddForm>({
    resolver: zodResolver(AddFormSchema),
  });

  const submit: SubmitHandler<TAddForm> = (formData) => {
    if (isPortfolioId !== null) {
      const requestData = {
        portfolioId: isPortfolioId,
        name: formData.name,
        description: formData.description,
        repository: formData.repository,
        link: formData.link,
        coverUrl: formData.coverUrl,
      };
      createProject(requestData, isPortfolioId);
      setOpenAddModal(false);
      reset();
    }
  };

  return (
    <StyledAddForm onSubmit={handleSubmit(submit)}>
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
        Criar Projeto
      </StyledButton>
    </StyledAddForm>
  );
};
