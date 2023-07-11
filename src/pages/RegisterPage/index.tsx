import { RegisterForm } from "./components/RegisterForm";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import ArrowBack from "../../assets/icons/arrow-back.png"
import { Link } from "react-router-dom";
import {
  StyledContainerMain,
  StyledContainerHeading,
  StyledContainerForm,
  StyledLink,
} from "./styles";

export const RegisterPage = () => {
  return (
    <>
      <Header>
          <Link to="/register">
            <Button
              widthsize="med"
              name="cadastre-se"
              className="hidden"
              color="solid-black"
            />
          </Link>
          <Link to="/login">
            <Button
              widthsize="large1"
              color="solid-green"
              name="acesse seu portfólio"
            />
          </Link>
      </Header>
      <main>
        <StyledContainerMain>
          <StyledContainerHeading>
            <StyledLink to="/">
              <img
                src={ArrowBack}
                alt="Ícone de uma seta para esquerda"
              />
              voltar
            </StyledLink>
            <h1>Cadastre-se</h1>
            <p>Preencha os campos abaixo para criar uma conta</p>
          </StyledContainerHeading>
          <StyledContainerForm>
            <RegisterForm />
          </StyledContainerForm>
        </StyledContainerMain>
      </main>
      <Footer />
    </>
  );
};
