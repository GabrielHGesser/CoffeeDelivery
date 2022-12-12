import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { CheckoutCard } from "../../components/CheckoutCard";
import { DescriptionInfos } from "../../components/DescriptionInfos";
import { Input } from "../../components/Input";
import { PaymentButton } from "../../components/PaymentButton";
import { SubtitleContainer, TitleContainer } from "../../styles/styles";
import {
  CepContainer,
  Container,
  ContainerBuy,
  ContainerDescription,
  ContainerForm,
  Form,
  HouseInfos,
  InputContainer,
  LastInfos,
  PurchaseContainer,
} from "./styles";

export function Checkout() {
  return (
    <Container>
      <ContainerForm>
        <TitleContainer size="18" variant="subtitle" weight="bd">
          Complete seu pedido
        </TitleContainer>
        <Form>
          <DescriptionInfos
            icon={<MapPinLine size={22} />}
            title="Endereço de Entrega"
            subtitle="Informe o endereço onde deseja receber seu pedido"
            variant="yellow-dark"
          />

          <InputContainer>
            <CepContainer>
              <Input description="CEP" />
            </CepContainer>
            <Input description="Rua" />
            <HouseInfos>
              <Input description="Número" />
              <div className="complemento">
                <Input description="Complemento" isOptional />
              </div>
            </HouseInfos>
            <LastInfos>
              <Input description="Bairro" />
              <div className="cidade">
                <Input description="Cidade" />
              </div>
              <div className="uf">
                <Input description="UF" />
              </div>
            </LastInfos>
          </InputContainer>
        </Form>
        <PurchaseContainer>
          <DescriptionInfos
            icon={<CurrencyDollar size={22} />}
            title="Pagamento"
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            variant="purple"
          />

          <div className="paymentWays">
            <PaymentButton
              id={0}
              icon={<CreditCard size={16} />}
              title="Cartão de crédito"
            />
            <PaymentButton
              id={1}
              icon={<Bank size={16} />}
              title="cartão de débito"
            />
            <PaymentButton id={2} icon={<Money size={16} />} title="dinheiro" />
          </div>
        </PurchaseContainer>
      </ContainerForm>
      <ContainerDescription>
        <TitleContainer size="18" variant="subtitle" weight="bd">
          Cafés selecionados
        </TitleContainer>

        <ContainerBuy>
          <CheckoutCard />
          <CheckoutCard />
          <div className="infosPay">
            <div className="totalItens">
              <div>
                <SubtitleContainer
                  height="130"
                  size="14"
                  variant="text"
                  weight="rg"
                >
                  Total Itens
                </SubtitleContainer>
              </div>
              <div>
                <SubtitleContainer
                  height="130"
                  size="16"
                  variant="text"
                  weight="rg"
                >
                  R$ 29,70
                </SubtitleContainer>
              </div>
            </div>
            <div className="totalItens">
              <div>
                <SubtitleContainer
                  height="130"
                  size="14"
                  variant="text"
                  weight="rg"
                >
                  Entrega
                </SubtitleContainer>
              </div>
              <div>
                <SubtitleContainer
                  height="130"
                  size="16"
                  variant="text"
                  weight="rg"
                >
                  R$ 3,50
                </SubtitleContainer>
              </div>
            </div>
            <div className="totalItens">
              <div>
                <SubtitleContainer
                  height="130"
                  size="20"
                  variant="subtitle"
                  weight="bd"
                >
                  Total
                </SubtitleContainer>
              </div>
              <div>
                <SubtitleContainer
                  height="130"
                  size="20"
                  variant="subtitle"
                  weight="bd"
                >
                  R$ 33,20
                </SubtitleContainer>
              </div>
            </div>
          </div>

          <button className="ButtonConfirm">Confirmar pedido</button>
        </ContainerBuy>
      </ContainerDescription>
    </Container>
  );
}
