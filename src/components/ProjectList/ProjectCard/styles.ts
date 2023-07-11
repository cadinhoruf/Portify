import { styled } from "styled-components";

export const StyledProjectCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  h1 {
    font-size: var(--font-size-5);
    color: var(--color-black);
  }

  .img-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .img-project {
    border: 1px solid var(--color-black);
    border-radius: 1.25rem;
    width: 250px;
    height: 150px;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;

    h1 {
      color: var(--color-black);
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
