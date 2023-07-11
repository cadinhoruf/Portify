import { PortfolioContext } from "../../../../../providers/PortfolioContext/PortfolioContext";
import { UserContext } from "../../../../../providers/UserContext/UserContext";
import { EditProfileFormSchema, TEditProfileForm } from "./schema";
import { Button } from "../../../../../components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../../../../../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledProfileForm } from "../../styles";
import { useContext, useEffect } from "react";

export const EditProfileForm = () => {
  const { portfolio, editPortfolio } =
    useContext(PortfolioContext);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditProfileForm>({
    resolver: zodResolver(EditProfileFormSchema),
  });

  useEffect(() => {
    if (portfolio) {
      reset({
        position: portfolio.position,
        description: portfolio.description,
        color: portfolio.color,
      });
    }
  }, [portfolio, reset]);

  const submit: SubmitHandler<TEditProfileForm> = async (formData) => {
    editPortfolio(formData);
  };

  const { loading } = useContext(UserContext);

  return (
    <StyledProfileForm onSubmit={handleSubmit(submit)}>
      <label>Modo de cor</label>
      <select {...register("color")}>
        <option value="Claro">Claro</option>
        <option value="Escuro">Escuro</option>
      </select>

      <Input
        label="Cargo"
        placeholder="Cargo"
        {...register("position")}
        defaultValue={portfolio?.position}
      />
      {errors.position ? <p>{errors.position.message}</p> : null}

      <label>Descrição</label>
      <textarea
        placeholder="Descrição"
        {...register("description")}
        defaultValue={portfolio?.description}
      />
      {errors.description ? <p>{errors.description.message}</p> : null}

      <Button
        type="submit"
        widthsize="large1"
        color="solid-green"
        name={loading ? "Atualizando" : "Atualizar portfólio"}
      />
    </StyledProfileForm>
  );
};
