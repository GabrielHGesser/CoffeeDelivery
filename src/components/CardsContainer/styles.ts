import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    margin: 2rem 0 3.375rem;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`;
