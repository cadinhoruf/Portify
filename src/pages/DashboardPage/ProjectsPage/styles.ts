import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

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
  margin-top:2rem;

  margin-left: 15%;
  margin-right: 15%;
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TittleAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;

  h2 {
    font-size: 2.5rem;
  }

  button {
    gap: 0.5rem;
  }

  img {
    width: 30px;
  }

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
