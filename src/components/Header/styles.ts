import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  gap: 1.5rem;
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;

  padding-top: 1rem;
  padding-bottom: 1rem;

  background-color: var(--color-black);

  @media (max-width: 708px) {
    justify-content: center;
  }
`;

export const StyledContainerHeader = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 675px) {
    .hidden {
      display: none;
    }
  }
`;
