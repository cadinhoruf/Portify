import LogoBlack from "../../assets/images/logo-black.png";

import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <img src={LogoBlack} alt="Logo do Portify" />
      <p>Todos os direitos reservados - Ricardo Rufino</p>
    </StyledFooter>
  );
};
