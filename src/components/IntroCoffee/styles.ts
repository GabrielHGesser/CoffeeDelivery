import styled from "styled-components";

export const Container = styled.div`
  padding: 5.75rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const InfoTexts = styled.div`
  width: 100%;
  max-width: 36.75rem;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const CardsInfo = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const ExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: flex-start;
  justify-content: center;

  .areas {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
  }
`;

interface IconProps {
  variant: "purple" | "yellow" | "yellow-dark" | "text";
}

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${({ variant, theme }) => theme[`base-${variant}`]};
`;
