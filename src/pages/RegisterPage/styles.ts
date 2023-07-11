import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainerHeader = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 42.1875rem) {
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
  gap: 2rem;

  margin: 0 auto;
  padding: 8rem 5rem;

  max-width: 1000px;
  width: 100%;

  @media (max-width: 48rem) {
    padding: 4rem;
  }

  @media (max-width: 34.375rem) {
    padding: 2rem 3rem;
  }

  @media (min-width: 64rem) {
    margin-top: 5.7%;
    margin-bottom: 5.7%;
  }
`;

export const StyledContainerHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
    
  min-width: 16.75rem;
  width: 100%;

  h1 {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-2);
    font-size: clamp(2rem, 4vw, 3rem);
  }

  p {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);

    color: var(--color-black-text);
  }
`;

export const StyledContainerForm = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 16.75rem;
  width: 100%;
`

export const StyledLink = styled(Link)`
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-2);
  font-size: var(--font-size-3);

  color: var(--color-primary);

  display: flex;
  align-items: center;
  gap: .5rem;
`;
