import styled, { css } from "styled-components";


interface Props {
  isSelected: boolean;
}

export const PaymentContainer = styled.button<Props>`
  height: 3.1875rem;
  background: ${({ theme }) => theme["base-button"]};
  border: 0;
  border-radius: 6px;
  padding: 1rem;
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  text-transform: uppercase;
  cursor: pointer;

  font-size: 0.75rem;
  line-height: 0;
  color: ${({ theme }) => theme["base-text"]};

  > svg {
    color: ${({ theme }) => theme["base-purple"]};
  }

  &:hover {
    background: ${({ theme }) => theme["base-hover"]};
  }

  ${({isSelected}) => isSelected && css`
    border: 1px solid ${({theme}) => theme["base-purple"]}
  `}
`;
