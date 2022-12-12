import styled from "styled-components";

interface Props {
  variant: "purple" | "yellow-dark";5
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  > svg {
    color: ${({ theme, variant }) => theme[`base-${variant}`]};
  }
`;

export const TextDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;
