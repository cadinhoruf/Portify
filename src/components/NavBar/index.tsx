import { StyledNavBar } from "./styles";
import profile from "../../assets/icons/profile.png";
import projects from "../../assets/icons/projects.png";
import home from "../../assets/icons/home.png";
import { useState, useContext, useEffect } from "react";
import { PortfolioContext } from "../../providers/PortfolioContext/PortfolioContext";
import { Link } from "react-router-dom";

export const NavBar = () => {
  // const [isPortfolio, setIsPortfolio] = useState<boolean>(false);

  // const { verifyPortfolio } = useContext(PortfolioContext);

  // useEffect(() => {
  //   const hasPortfolio = async () => {
  //     const newIsPortfolio: boolean = await verifyPortfolio();
  //     setIsPortfolio(newIsPortfolio);
  //     console.log("effect");
  //   };
  //   hasPortfolio();
  //   console.log(hasPortfolio());
  // }, []);

  return (
    <StyledNavBar>
      <Link to="/dashboard">
        <figure>
          <img
            src={home}
            alt="ícone com desenho de uma casa, exibe a tela de inicio da dashboard"
          />
          <figcaption>início</figcaption>
        </figure>
      </Link>
      <Link to="/dashboard/profile">
        <figure>
          <img
            src={profile}
            alt="ícone com desenho de uma pessoa, representando o perfil, ao clicar exibe informações do perfil do usuario logado"
          />
          <figcaption>informações de perfil</figcaption>
        </figure>
      </Link>

      <Link to="/dashboard/projects">
        <figure>
          <img
            src={projects}
            alt="ícone com desenho de varios projetos, ao clicar, exiber os projetos do usuário logado"
          />
          <figcaption>meus projetos</figcaption>
        </figure>
      </Link>
    </StyledNavBar>
  );
};
