import { CardsContainer } from "../../components/CardsContainer";
import { IntroCoffee } from "../../components/IntroCoffee";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <IntroCoffee />
      <CardsContainer />
    </Container>
  );
}
