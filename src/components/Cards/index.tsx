import { SubtitleContainer, TitleContainer } from "../../styles/styles";
import { Container, Tags, ContainerPurchase } from "./styles";

export function Cards() {
  return (
    <Container>
      <img src="/public/expresso.png" alt="" />

      <Tags>
        <span>tradicional</span>
      </Tags>

      <TitleContainer size="20" variant="subtitle" weight="bd">
        Café com Leite
      </TitleContainer>

      <SubtitleContainer height="130" size="14" variant="label" weight="rg">
        Meio a meio de expresso tradicional com leite vaporizado
      </SubtitleContainer>

      <ContainerPurchase>
        <div>
          <p>
            R$ <span>9,90</span>
          </p>
        </div>
        <div>
          
        </div>
      </ContainerPurchase>
    </Container>
  );
}
