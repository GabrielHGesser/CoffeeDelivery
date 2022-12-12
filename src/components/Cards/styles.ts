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

  img {
    margin-top: -1rem;
  }

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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.25rem;
`;

export const Prices = styled.div`
  > p {
    font-size: 0.875rem;
    line-height: 130%;
    text-align: right;
    color: ${({ theme }) => theme["base-text"]};

    span {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
      text-align: right;
      color: ${({ theme }) => theme["base-text"]};
    }
  }
`;

export const ContainerPrices = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const AmountPrice = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8.5px 8px;

  background: ${({ theme }) => theme["base-button"]};
  border-radius: 6px;

  > span {
    width: 1.25rem;
    height: 1.3125rem;
    font-size: 1rem;
    line-height: 130%;
    text-align: center;
    color: ${({ theme }) => theme["base-title"]};
  }
`;

export const ButtonAmounts = styled.button`
  width: 0.875rem;
  height: 1.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme["base-purple"]};

    &:hover {
      color: ${({ theme }) => theme["base-purple-dark"]};
    }
  }
`;

export const AddCart = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  padding: 0.5rem;
  cursor: pointer;
  background: ${({ theme }) => theme["base-purple-dark"]};
  border-radius: 6px;
  transition: background-color 0.3s;

  &:hover {
    background: ${({ theme }) => theme["base-purple"]};
  }
`;
