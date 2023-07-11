import { PortfolioContext } from "../../../providers/PortfolioContext/PortfolioContext";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { CreateProfileForm } from "./components/CreateProfileForm";
import { EditProfileForm } from "./components/EditProfileForm";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import {
  StyledContainerHeader,
  StyledContainerMain,
  StyledContainerUserData,
} from "./styles";
import { NavBar } from "../../../components/NavBar";
import { PageWrapper } from "../../PortfolioPage/styles";
import { StyledMain } from "../styles";

export const ProfilePage = () => {
  const [hasPortfolio, setHasPortfolio] = useState<boolean>(false);

  const { verifyPortfolio } = useContext(PortfolioContext);
  const { user, userLogout } = useContext(UserContext);

  useEffect(() => {
    const checkPortfolio = async () => {
      const hasPortfolio: boolean = await verifyPortfolio();
      setHasPortfolio(hasPortfolio);
    };

    checkPortfolio();
  }, []);

  return (
    <>
      <PageWrapper>
        <Header>
          <StyledContainerHeader>
            <span>{user?.name}</span>

            <Button
              name="Sair"
              type="button"
              widthsize="small"
              color="outline-black"
              onClick={userLogout}
            />
          </StyledContainerHeader>
        </Header>
        <StyledMain>
          <NavBar />
          <StyledContainerMain>
            <h1>Informações no perfil:</h1>

            <StyledContainerUserData>
              <small>
                <strong>Nome:</strong>
                {user?.name}
              </small>
              <small>
                <strong>Email:</strong>
                {user?.email}
              </small>
            </StyledContainerUserData>

            {hasPortfolio ? <EditProfileForm /> : <CreateProfileForm />}
          </StyledContainerMain>
        </StyledMain>

        <Footer />
      </PageWrapper>
    </>
  );
};
