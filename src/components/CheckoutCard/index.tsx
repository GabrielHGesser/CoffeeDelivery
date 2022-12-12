import { Minus, Plus, ShoppingCart, Trash } from "phosphor-react";
import { SubtitleContainer } from "../../styles/styles";
import { AddCart } from "../Cards/styles";
import {
  AmountPrice,
  ButtonAmounts,
  Container,
  ContainerPrices,
} from "./styles";

export function CheckoutCard() {
  return (
    <Container>
      <div className="main">
        <img src="/public/latte.png" alt="" />
        <div className="infos">
          <SubtitleContainer
            height="130"
            size="16"
            variant="subtitle"
            weight="rg"
          >
            Expresso Tradicional
          </SubtitleContainer>

          <ContainerPrices>
            <AmountPrice>
              <ButtonAmounts>
                <Minus size={20} weight="fill" />
              </ButtonAmounts>
              <span>1</span>
              <ButtonAmounts>
                <Plus size={20} weight="fill" />
              </ButtonAmounts>
            </AmountPrice>
            <button className="remover">
              <Trash size={16} />
              <span>Remover</span>
            </button>
          </ContainerPrices>
        </div>
      </div>
      <div className="price">
        <SubtitleContainer height="130" size="16" variant="text" weight="bd">
          R$ 9,90
        </SubtitleContainer>
      </div>
    </Container>
  );
}
