import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5rem 4rem;
  width: 100%;
  gap: 3rem;

  margin: 0 auto;

  @media (max-width: 800px) {
    flex-wrap: wrap-reverse;
    padding: 2rem;
    gap: 2rem;
  }
`;

export const StyledContainerImage = styled.div`
  width: 100%;
  min-width: 240px;
  max-width: 425px;
`;

export const StyledContainerAlongside = styled.div`
  gap: 2.5rem;

  display: flex;
  flex-direction: column;

  `;

export const StyledContainerHeading = styled.div`
  gap: 1.5rem;
  width: 100%;
  max-width: 360px;
  
  display: flex;
  flex-direction: column;
  
  h1 {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-2);
    font-size: clamp(1.75rem, 4vw, 2.75rem);
  }
  
  p {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-1);
    font-size: clamp(0.75rem, 4vw, 1rem);
    color: #00000080;

    margin-top: .75rem;
  }

  img {
    width: 87px;
  }
`;

export const StyledContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;

    button {
      width: 100%;
    }
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
`;
