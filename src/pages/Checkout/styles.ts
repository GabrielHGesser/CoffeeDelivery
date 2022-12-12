import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 90rem;
  height: 100vh;
  margin: 2.5rem auto 25rem; // Se der b.o modificar para padding ...
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 40rem;

  > h1 {
    margin-bottom: 0.9375rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 2.5rem;
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

export const CepContainer = styled.div`
  width: 200px;
`;

export const HouseInfos = styled.div`
  width: 100%;
  display: flex;
  gap: 0.75rem;

  .complemento {
    flex: 1;
  }
`;

export const LastInfos = styled.div`
  display: flex;
  gap: 0.75rem;

  .cidade {
    flex: 1;
  }

  .uf {
    width: 60px;
  }
`;

export const PurchaseContainer = styled.div`
  margin-top: 0.75rem;
  width: 100%;
  padding: 2.5rem;
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px;

  .paymentWays {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const ContainerDescription = styled.div`
  width: 100%;
  max-width: 28rem;

  > h1 {
    margin-bottom: 0.9375rem;
  }
`;

export const ContainerBuy = styled.div`
  width: 100%;
  padding: 2.5rem;
  background: ${({ theme }) => theme["base-card"]};
  border-radius: 6px 44px 6px 44px;

  .infosPay {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    .totalItens {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .ButtonConfirm {
    width: 100%;
    height: 46px;
    padding: 0.75rem 2.8125rem;

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;

    border: 0;
    border-radius: 6px;
    background: ${({ theme }) => theme["base-yellow"]};
    color: ${({ theme }) => theme.white};
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme["base-yellow-dark"]};
    }
  }
`;
