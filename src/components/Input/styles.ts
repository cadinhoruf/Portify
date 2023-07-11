import { styled } from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  max-width: 33rem;
  height: 4rem;

  border: 1px solid var(--color-primary);
  border-radius: 0.5rem;

  padding: 1rem;

  font-family: var(--font-family-secondary);

  outline: none;

  ::placeholder {
    font-family: var(--font-family-secondary);
  }
`;
