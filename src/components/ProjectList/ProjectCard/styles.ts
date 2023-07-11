import { styled } from "styled-components";

export const StyledProjectCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  
  .img-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    @media (max-width: 799px) {
      justify-content: center;
      align-items: center;
    }
  }
  
  .img-project {
    border: 1px solid var(--color-black);
    border-radius: 1.25rem;
    width: 250px;
    height: 150px;
  }
  
  .title-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
  
    h1 {
      color: ${(props) => props.theme.colors.text};
    }
  
    p {
      width: 100%;
      max-width: 300px;
      align-self: center;
    }
  
    @media (max-width: 799px) {
      align-items: center;
    }
  }
  
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .title-container-page {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 1rem;
    h1 {
      color: var(--color-black);
    }
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
 
  img {
    cursor: pointer;
  }
`;
