import { styled } from "styled-components";

export const StyledNavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  figure {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 1.875rem;
      height: 1.875rem;
    }

    figcaption {
      font-size: 1.125rem;
      font-weight: var(--font-weight-2);
      color: var(--color-black-2);

      &:hover,
      &:active {
        color: var(--color-primary);
      }
    }
  }
`;
