import logo from "../../assets/images/logo-white.png";
import { StyledHeader, StyledContainerHeader } from "./styles";

interface IHeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<IHeaderProps> = ({ children }) => {
  return (
    <StyledHeader>
      <img src={logo} alt="Logotipo da Página" />
      <StyledContainerHeader>{children}</StyledContainerHeader>
    </StyledHeader>
  );
};
