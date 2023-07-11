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
  padding: 4rem;
  max-width: 644px;

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
    color: #0F1411;
  }
`;

export const StyledProfileForm = styled.form`
  width: 100%;
  min-width: 250px;
  gap: 1rem;

  display: flex;
  flex-direction: column;


  input {
    margin-top: 16px;
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

    border: 1px solid var(--color-primary);
    border-radius: 0.5rem;

    padding: 1rem;

    font-family: var(--font-family-secondary);

    ::placeholder {
      font-family: var(--font-family-secondary);
    }
  }

  textarea {
    resize: none;
  }

  button {
    margin-top: 1rem;
    align-self: flex-end;

    @media (max-width: 450px) {
      width: 100%;
    }
  }
`;
