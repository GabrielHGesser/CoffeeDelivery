import { SubtitleContainer, TitleContainer } from "../../styles/styles";
import { Container, InfoTexts } from "./styles";

export function IntroCoffee() {
  return (
    <Container>
      <InfoTexts>
        <TitleContainer weight="exbd" size="48">
          Encontre o café perfeito para qualquer hora do dia
        </TitleContainer>
        <SubtitleContainer weight="rg" size="20" height="130">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </SubtitleContainer>
      </InfoTexts>
    </Container>
  );
}
