import styled from "styled-components";

export const Container = styled.div`
  padding: 8px 4px;
  display: flex;
  gap: 3.125rem;
  align-items: flex-start;
  justify-content: center;
  height: 6.5rem;

  border-bottom: 1px solid ${({ theme }) => theme["base-button"]};
  margin-bottom: 1.5rem;

  .main {
    display: flex;
    gap: 1.25rem;

    .infos {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    > img {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const ContainerPrices = styled.div`
  width: 4.5rem;
  height: 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;

  .remover {
    display: flex;
    align-items: center;
    gap: 4px;
    background: ${({ theme }) => theme["base-button"]};
    padding: 6.5px 8px;
    border-radius: 6px;
    cursor: pointer;
    border: none;

    > svg {
      color: ${({ theme }) => theme["base-purple"]};
    }

    > span {
      text-transform: uppercase;
      font-size: 12px;
    }

    &:hover {
      background: ${({ theme }) => theme["base-hover"]};
    }
  }
`;

export const AmountPrice = styled.div`
  height: 2rem;
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
