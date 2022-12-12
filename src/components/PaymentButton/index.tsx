import { ReactNode, useState } from "react";
import { PaymentContainer } from "./styles";

interface PaymentProps {
  icon: ReactNode;
  title: string;
  id: number;
}

export function PaymentButton({icon, title, id}: PaymentProps) {
  const [selected, setSelected] = useState(false);
  const myId = id;

  return (
    <PaymentContainer isSelected={selected}>
      {icon}
      {title}
    </PaymentContainer>
  )
}