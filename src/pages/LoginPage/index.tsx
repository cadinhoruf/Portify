import login from "../../assets/images/login.png";
import { LoginForm } from "./components/LoginForm";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import {
  StyledContainerMain,
  StyledContainerImage,
  StyledContainerForm,
} from "./styles";

export const LoginPage = () => {
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
          <StyledContainerImage>
            <img
              src={login}
              alt="Homem de óculos segurando e olhando um tablet"
            />
          </StyledContainerImage>
          <StyledContainerForm>
            <h1>Login</h1>
            <p>Acesse o portfólio</p>
            <LoginForm />
          </StyledContainerForm>
        </StyledContainerMain>
      </main>
      <Footer />
    </>
  );
};
