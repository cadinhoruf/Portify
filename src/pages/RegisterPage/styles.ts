import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainerHeader = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 675px) {
    .hidden {
      display: none;
    }
  }
`;

export const StyledContainerMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;

  max-width: 1000px;
  padding: 8rem 5rem;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 550px) {
    padding: 2rem 3rem;
  }
`;

export const StyledContainerHeading = styled.div`
  display: flex;
  flex-direction: column;
    
  min-width: 268px;
  width: 100%;
  gap: 1.5rem;

  h1 {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-2);
    font-size: clamp(2rem, 4vw, 3rem);
  }

  p {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);
    color: #00000080;
  }
`;

export const StyledContainerForm = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 268px;
  width: 100%;
`

export const StyledLink = styled(Link)`
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-3);
  color: var(--color-primary);

  gap: .5rem;
  display: flex;
  align-items: center;
`;
