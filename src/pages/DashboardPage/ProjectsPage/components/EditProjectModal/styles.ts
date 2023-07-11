import { styled } from "styled-components";

export const StyledModal = styled.div`
  z-index: 99;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: var(--color-white);

  padding:1rem 3rem;

  img{
    opacity: 50%;
  }

  .title-container{
    display:flex;
    flex-direction: row;
    align-items: center;
  }
`;
