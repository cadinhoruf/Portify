import { styled } from "styled-components";

export const StyledProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 2rem;
  
  .any-project {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50vh;
  }

  .any-project h3 {
    text-align: center;
  }

  @media (min-width: 50rem) {
    gap: 2rem;
  }
`;
