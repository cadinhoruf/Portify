import { PortfolioContext } from "../../../../../providers/PortfolioContext/PortfolioContext";
import { CreateProfileFormSchema, TCreateProfileForm } from "./schema";
import { Button } from "../../../../../components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledProfileForm } from "../../styles";
import { useContext } from "react";
import { UserContext } from "../../../../../providers/UserContext/UserContext";

export const CreateProfileForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCreateProfileForm>({
    resolver: zodResolver(CreateProfileFormSchema),
  });

  const { user, loading } = useContext(UserContext);
  const { createPortfolio } = useContext(PortfolioContext);

  const submit: SubmitHandler<TCreateProfileForm> = (formData) => {
    if (user?.id) {
      createPortfolio(formData, user.id);
      reset();
    }
  };

  return (
    <StyledProfileForm onSubmit={handleSubmit(submit)}>
      <label>Modo de cor</label>
      <select {...register("color")}>
        <option value="">Selecione uma cor</option>
        <option value="Claro">Claro</option>
        <option value="Escuro">Escuro</option>
      </select>
      {errors.color ? <p>{errors.color.message}</p> : null}

      <Input label="Cargo" placeholder="Cargo" {...register("position")} />
      {errors.position ? <p>{errors.position.message}</p> : null}

      <label>Descrição</label>
      <textarea placeholder="Descrição" {...register("description")} />
      {errors.description ? <p>{errors.description.message}</p> : null}

      <Button
        type="submit"
        widthsize="large1"
        color="solid-green"
        name={loading ? "Criando" : "Criar portfólio"}
      />
    </StyledProfileForm>
  );
};
