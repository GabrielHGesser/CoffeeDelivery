import { SubtitleContainer, TitleContainer } from "../../styles/styles";
import {
  Container,
  InfoTexts,
  Infos,
  CardsInfo,
  ExtraInfo,
  Icon,
} from "./styles";
import coffeeBg from "../../assets/coffeeImage.svg";
import { ShoppingCart, Timer, Cube, Coffee } from "phosphor-react";

export function IntroCoffee() {
  return (
    <Container>
      <Infos>
        <InfoTexts>
          <TitleContainer weight="exbd" size="48" variant="title">
            Encontre o café perfeito para qualquer hora do dia
          </TitleContainer>
          <SubtitleContainer
            weight="rg"
            size="20"
            height="130"
            variant="subtitle"
          >
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubtitleContainer>
        </InfoTexts>
        <CardsInfo>
          <ExtraInfo>
            <div className="areas">
              <Icon variant="yellow-dark">
                <ShoppingCart size={16} weight={"fill"} color="white" />
              </Icon>
              <SubtitleContainer
                height="130"
                size="16"
                variant="text"
                weight="rg"
              >
                Compra simples e segura
              </SubtitleContainer>
            </div>
            <div className="areas">
              <Icon variant="yellow">
                <Timer size={16} weight={"fill"} color="white" />
              </Icon>
              <SubtitleContainer
                height="130"
                size="16"
                variant="text"
                weight="rg"
              >
                Entrega rápida e rastreada
              </SubtitleContainer>
            </div>
          </ExtraInfo>
          <ExtraInfo>
            <div className="areas">
              <Icon variant="text">
                <Cube size={16} weight={"fill"} color="white" />
              </Icon>
              <SubtitleContainer
                height="130"
                size="16"
                variant="text"
                weight="rg"
              >
                Embalagem mantém o café intacto
              </SubtitleContainer>
            </div>
            <div className="areas">
              <Icon variant="purple">
                <Coffee size={16} weight={"fill"} color="white" />
              </Icon>
              <SubtitleContainer
                height="130"
                size="16"
                variant="text"
                weight="rg"
              >
                O café chega fresquinho até você
              </SubtitleContainer>
            </div>
          </ExtraInfo>
        </CardsInfo>
      </Infos>
      <img src={coffeeBg} alt="" />
    </Container>
  );
}
