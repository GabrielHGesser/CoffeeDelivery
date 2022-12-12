import { Link } from "react-router-dom";
import styled from "styled-components";

interface ContainerProps {
  variant: "purple" | "yellow";
  state: "empty" | "full";
  to: string;
}

interface ContainerPropsDois {
  variant: "purple" | "yellow";
  state: "empty" | "full";
}

export const ContainerDois = styled(Link)<ContainerProps>`
  position: relative;
  max-height: 2.375rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;

  outline: none;
  border: 0;
  border-radius: 6px;
  background-color: ${({ variant, theme }) => theme[`base-${variant}-light`]};

  color: ${({ theme, variant }) =>
    variant === "purple" && theme["base-purple-dark"]};

  svg {
    color: ${({ theme, variant }) =>
      variant === "purple" ? theme["base-purple"] : theme["base-yellow-dark"]};
  }

  > div {
    display: ${({ state }) => (state === "empty" ? "none" : "flex")};
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;

    background: ${(props) => props.theme["base-yellow-dark"]};
    border-radius: 50%;
    top: -10px;
    right: -10px;

    > span {
      font-weight: 700;
      font-size: 0.75rem;
      color: ${({ theme }) => theme["white"]};
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Container = styled.button<ContainerPropsDois>`
  position: relative;
  max-height: 2.375rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;

  outline: none;
  border: 0;
  border-radius: 6px;
  background-color: ${({ variant, theme }) => theme[`base-${variant}-light`]};

  color: ${({ theme, variant }) =>
    variant === "purple" && theme["base-purple-dark"]};

  svg {
    color: ${({ theme, variant }) =>
      variant === "purple" ? theme["base-purple"] : theme["base-yellow-dark"]};
  }

  > div {
    display: ${({ state }) => (state === "empty" ? "none" : "flex")};
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;

    background: ${(props) => props.theme["base-yellow-dark"]};
    border-radius: 50%;
    top: -10px;
    right: -10px;

    > span {
      font-weight: 700;
      font-size: 0.75rem;
      color: ${({ theme }) => theme["white"]};
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;
