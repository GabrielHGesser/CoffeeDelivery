import { Container } from "./styles";

interface InputProps {
  isOptional?: boolean;
  description: string;
}

export function Input({ isOptional, description}: InputProps) {
  return (
    <Container>
      <input type="text" placeholder={description}  />
      {isOptional && <span>Opcional</span>}
    </Container>
  );
}
