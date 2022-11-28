import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  icon: ReactNode;
  text?: string;
  variant: "purple" | "yellow";
  state: "empty" | "full";
  amountPurchases?: string;
}

export function ButtonNav({ icon, text, variant, state, amountPurchases }: Props) {
  return (
    <Container variant={variant} state={state}>
      {icon}
      {text}
      <div>
        <span>
          {amountPurchases}
        </span>
      </div>
    </Container>
  );
}
