import styled from "styled-components";

export const StyledContainerFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 550px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

export const StyledContainerIntern = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;

  p {
    color: red;
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-1);
    font-family: var(--font-family-secondary);
  }
`;

export const StyledContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 1.5rem;

  @media (max-width: 550px) {
    button {
      width: 100%;
    }
  }
`;
