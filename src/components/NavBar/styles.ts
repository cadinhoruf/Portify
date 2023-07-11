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
      width: 30px;
      height: 30px;
    }

    figcaption {
      /* font-family: --font-family-primary; */
      font-size: 1.125rem;
      font-weight: 700;
      color: #0f1411;

      &:hover,
      &:active {
        color: var(--color-primary);
      }
    }
  }
`;
