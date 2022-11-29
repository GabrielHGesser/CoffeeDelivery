import styled from "styled-components";

export const Container = styled.div`
  max-width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 0 1.25rem;

  border-radius: 6px 36px 6px 36px;

  background: ${({ theme }) => theme["base-card"]};


  > h1 {
    margin-bottom: 0.5rem;
  }

  > p {
    margin-bottom: 2.062rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  align-items: center;
  justify-content: center;
  margin: 0.75rem 0 1rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    border-radius: 100px;

    background: ${({ theme }) => theme["base-yellow-light"]};

    text-transform: uppercase;
    color: ${({ theme }) => theme["base-yellow-dark"]};
    font-size: 0.625rem;
    font-weight: 700;
  }
`;


export const ContainerPurchase = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;