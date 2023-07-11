import styled from "styled-components";

export const StyledContainerFields = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  span {
    color: red;

    font-size: var(--font-size-1);
    font-weight: var(--font-weight-1);
    font-family: var(--font-family-secondary);
  }
`;

export const StyledContainerButtons = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 46.25rem) {
    button {
      width: 100%;
    }

    p {
      align-self: center;
    }
  }
`;
