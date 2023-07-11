import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  width: 100%;

  padding-left: 15%;
  padding-right: 15%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  background-color: var(--color-light-gray);
  
  img {
    width: 5rem;
    height: 1.5rem;

    color: var(--color-black);
  }

  p {
    font-size: 1rem;
    font-family: var(--font-family-secondary);

    text-align: center;

    max-width: 25rem;

    color: var(--color-black);
  }

  @media (max-width: 43.5rem) {
    justify-content: center;

    p {
      max-width: 25rem;
    }
  }
`;
