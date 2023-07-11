import logo from "../../assets/images/logo-green.png";
import home from "../../assets/images/home.png";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

import {
  StyledContainerMain,
  StyledContainerImage,
  StyledContainerAlongside,
  StyledContainerHeading,
  StyledContainerButtons,
  StyledLink
} from "./styles";

export const HomePage = () => {
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
              src={home}
              alt="mulher com roupa verder segurando um laptop nas mãos"
            />
          </StyledContainerImage>

          <StyledContainerAlongside>
            <StyledContainerHeading>
              <img src={logo} alt="logotipo da pagina na cor verde" />
              <h1>Crie seu portfólio online</h1>
              <p>Crie um portfólio para você em minutos</p>
            </StyledContainerHeading>

            <StyledContainerButtons>
              <StyledLink to="/register">
                <Button
                  widthsize="med"
                  name="cadastre-se"
                  color="solid-green"
                />
              </StyledLink>

              <p>ou</p>

              <StyledLink to="/login">
                <Button
                  name="acesse seu portfólio"
                  color="outline-white"
                  widthsize="large2"
                />
              </StyledLink>
            </StyledContainerButtons>
          </StyledContainerAlongside>
        </StyledContainerMain>
      </main>

      <Footer />
    </>
  );
};
