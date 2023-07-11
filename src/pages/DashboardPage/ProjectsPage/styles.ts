import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.1rem;

  min-height: 100vh;

  section {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const NameButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  h3 {
    color: var(--color-white);

    font-family: var(--font-family-secondary);
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-1);
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-top: 1rem;
  margin-left: 15%;
  margin-right: 15%;
  
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding-bottom: 2rem;

  ul {
    display: flex;
    gap: 4rem;
  }
`;

export const TittleAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);

    margin-bottom: 1rem;
  }

  button {
    gap: 0.5rem;
  }

  img {
    width: 1.875rem;
  }

  @media (min-width: 50rem) {
    flex-direction: row;
  }
`;
