import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledHeaderButton, StyledMain } from "./styles";
import { PortfolioContext } from "../../providers/PortfolioContext/PortfolioContext";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { PageWrapper } from "../PortfolioPage/styles";

export const DashboardPage = () => {
  const [isPortfolio, setIsPortfolio] = useState<boolean>(false);

  const { userLogout, user } = useContext(UserContext);
  const { verifyPortfolio } = useContext(PortfolioContext);

  const navigate = useNavigate();

  useEffect(() => {
    const hasPortfolio = async () => {
      const newIsPortfolio: boolean = await verifyPortfolio();
      setIsPortfolio(newIsPortfolio);
    };
    hasPortfolio();
  }, []);

  return (
    <>
      <PageWrapper>
        <Header>
          <StyledHeaderButton>
            <h3>{user?.name}</h3>
            <Button
              name="Sair"
              color="outline-black"
              widthsize="small"
              onClick={userLogout}
            />
          </StyledHeaderButton>
        </Header>
        <StyledMain>
          <h1>
            Seja bem-vindo: <span> {user?.name}</span>
          </h1>
          <p>Selecione uma das opções abaixo:</p>
          <NavBar />
          {isPortfolio ? (
            <section>
              <h2>Seu portfólio está online</h2>
              <small>Acesse em</small>
              <a href="/portfolio" target="_blank">
              https://m3-g5-portify.vercel.app/portfolio
              </a>
            </section>
          ) : (
            <section>
              <p>Seu portfólio ainda não está publicado</p>
              <Button
                name="Publicar portfólio"
                color="solid-green"
                widthsize="large1"
                onClick={() => navigate("/dashboard/profile")}
              />
            </section>
          )}
        </StyledMain>
        <Footer />
      </PageWrapper>
    </>
  );
};
