import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  padding: 5rem 4rem;
  margin: 0 auto;

  width: 100%;

  @media (max-width: 50rem) {
    flex-wrap: wrap-reverse;
    gap: 2rem;

    padding: 2rem;
  }

  @media (min-width: 64rem) {
    margin-top: 1.45%;
    margin-bottom: 1.45%;
  }
`;

export const StyledContainerImage = styled.div`
  width: 100%;
  min-width: 15rem;
  max-width: 26.5625rem;
`;

export const StyledContainerAlongside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const StyledContainerHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  max-width: 22.5rem;

  h1 {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-2);
    font-size: clamp(1.75rem, 4vw, 2.75rem);
  }

  p {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-1);
    font-size: clamp(0.75rem, 4vw, 1rem);
    
    color: var(--color-black-text);

    margin-top: 0.75rem;
  }

  img {
    width: 5.4375rem;
  }
`;

export const StyledContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 50rem) {
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
