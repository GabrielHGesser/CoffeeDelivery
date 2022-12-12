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
import { ReactNode } from "react";

export interface Coffee {
  id: number;
  image: string;
  tag: string[];
  title: string;
  subtitle: string;
  price: string;
}

interface Props {
  coffee: Coffee;
}

export function Cards({ coffee }: Props) {
  return (
    <Container>
      <img src={`/public/${coffee.image}`} alt="" />

      <Tags>
        {coffee.tag.map((tag) => {
          return <span>{tag}</span>;
        })}
      </Tags>

      <TitleContainer size="20" variant="subtitle" weight="bd">
        {coffee.title}
      </TitleContainer>

      <SubtitleContainer height="130" size="14" variant="label" weight="rg">
        {coffee.subtitle}
      </SubtitleContainer>

      <ContainerPurchase>
        <Prices>
          <p>
            R$ <span>{coffee.price}</span>
          </p>
        </Prices>
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
          <AddCart>
            <ShoppingCart size={22} weight="fill" color="#fff" />
          </AddCart>
        </ContainerPrices>
      </ContainerPurchase>
    </Container>
  );
}
