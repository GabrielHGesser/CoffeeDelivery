import { TitleContainer } from "../../styles/styles";
import { Cards } from "../Cards";
import { Container, CardGrid } from "./styles";

export function CardsContainer() {
  return (
    <Container>
      <TitleContainer size="32" variant="subtitle" weight="exbd">
        Nossos cafés
      </TitleContainer>

      <CardGrid>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </CardGrid>
    </Container>
  );
}
