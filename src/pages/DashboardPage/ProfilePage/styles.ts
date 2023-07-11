import styled from "styled-components";

export const StyledContainerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);

    color: var(--color-white);
  }
`;

export const StyledContainerMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  width: 100%;
  max-width: 40.25rem;
  
  padding: 4rem;

  margin: 0 auto;

  h1 {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-2);
    font-size: clamp(1.75rem, 4vw, 2.25rem);

    align-self: center;
  }
`;

export const StyledContainerUserData = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  small {
    gap: 1rem;
    display: flex;
    align-items: center;

    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-1);

    color: var(--color-black-2);
  }
`;

export const StyledProfileForm = styled.form`
  width: 100%;
  min-width: 15.625rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .text-error {
    color: red;

    font-size: var(--font-size-1);
    font-weight: var(--font-weight-1);
    font-family: var(--font-family-secondary);
  }

  input {
    margin-top: 1rem;
    color: var(--color-black-text);
  }

  label {
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-1);

    color: var(--color-primary);
  }

  select,
  textarea {
    outline: none;
    max-width: 33rem;
    height: 4rem;

    border: .0625rem solid var(--color-primary);
    border-radius: 0.5rem;

    padding: 1rem;

    color: var(--color-black-text);

    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-1);
  }

  textarea {
    resize: none;
  }

  button {
    margin-top: 1rem;

    align-self: flex-end;

    @media (max-width: 28.125rem) {
      width: 100%;
    }
  }
`;
