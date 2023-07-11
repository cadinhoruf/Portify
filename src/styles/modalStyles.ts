import { styled } from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 2rem;
  margin: 0 auto;

  background: #11bcc750;

  .modal-box {
    position: relative;

    width: 100%;
    max-width: 31.25rem;

    padding: 2rem;
    
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    background: var(--color-white);

    form {
      p {
        color: red;

        font-family: var(--font-family-secondary);
      }
    }

    button {
      align-self: flex-end;

      @media (max-width: 47.5rem) {
        width: 100%;
      }
    }
  }

  .title-container {
    img {
      position: absolute;
      top: 10px;
      right: 25px;

      cursor: pointer;

      opacity: 50%;

      width: 37px;
    }
  }
`;
