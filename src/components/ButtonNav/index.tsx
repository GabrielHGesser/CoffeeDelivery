import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, ContainerDois } from "./styles";

interface Props {
  icon: ReactNode;
  text?: string;
  variant: "purple" | "yellow";
  state: "empty" | "full";
  amountPurchases?: string;
  isLink: boolean;
}

export function ButtonNav({
  icon,
  text,
  variant,
  state,
  amountPurchases,
  isLink = false,
}: Props) {
  return (
    <>
      {isLink ? (
        // <LinkDom to={"/checkout"}>
        <ContainerDois to={"/checkout"} variant={variant} state={state}>
          {icon}
          {text}
          <div>
            <span>{amountPurchases}</span>
          </div>
        </ContainerDois>
      ) : (
        // </LinkDom>
        <Container variant={variant} state={state}>
          {icon}
          {text}
          <div>
            <span>{amountPurchases}</span>
          </div>
        </Container>
      )}
    </>
  );
}
