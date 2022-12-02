import { SubtitleContainer, TitleContainer } from "../../styles/styles";
import {
  Container,
  Tags,
  ContainerPurchase,
  Prices,
  AmountPrice,
  AddCart,
  ContainerPrices,
  ButtonAmounts,
} from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

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
        <Prices>
          <p>
            R$ <span>9,90</span>
          </p>
        </Prices>
        <ContainerPrices>
          <AmountPrice>
            <ButtonAmounts>
              <Minus size={20} color="#8047F8" weight="fill" />
            </ButtonAmounts>
            <span>1</span>
            <ButtonAmounts>
              <Plus size={20} color="#8047F8" weight="fill" />
            </ButtonAmounts>
          </AmountPrice>
          <AddCart>
            <ShoppingCart size={22} weight="fill" color="#fff"/>
          </AddCart>
        </ContainerPrices>
      </ContainerPurchase>
    </Container>
  );
}
