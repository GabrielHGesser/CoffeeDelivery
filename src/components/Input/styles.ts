import styled, { css } from "styled-components";



export const Container = styled.div`
  height: 2.625rem;
  background: ${({ theme }) => theme["base-input"]};
  border: 1px solid ${({ theme }) => theme["base-button"]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > input {
    height: inherit;
    border-radius: inherit;
    background: transparent;
    border: 0;
    padding: 0.75rem;
    flex: 1;
    outline: none;
  }

  > span {
    height: inherit;
    display: flex;
    align-items: center;
    padding-right: 12px;
    font-size: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme["base-label"]};
  }
`;
