import { Footer } from "../../components/Footer";
import Logo from "../../assets/images/logo-green.png";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import {
  StyledHeader,
  UserContainer,
  UserInfoContainer,
  SectionStyled,
  PageWrapper,
  ContentWrapper,
} from "./styles";
import { ProjectList } from "../../components/ProjectList";
import { ProjectCard } from "../../components/ProjectList/ProjectCard";
import { PortfolioContext } from "../../providers/PortfolioContext/PortfolioContext";

export const PortfolioPage = () => {
  const { user }  = useContext(UserContext);
  const { portfolio } = useContext(PortfolioContext);

  return (
    <PageWrapper>
      <StyledHeader>
        <img src={Logo} alt="Logotipo da Portify na cor verde" />
      </StyledHeader>
      <ContentWrapper>
        <UserContainer>
          <UserInfoContainer>
            <h2>{user?.name}</h2>
            <span>{portfolio?.position}</span>
          </UserInfoContainer>
          <p>{portfolio?.description}</p>
        </UserContainer>
        <SectionStyled>
          <h1>Meus Projetos</h1>
          <ProjectList>
            <ProjectCard />
          </ProjectList>
        </SectionStyled>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};
