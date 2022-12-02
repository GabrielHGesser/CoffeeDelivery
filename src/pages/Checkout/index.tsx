import { TitleContainer } from "../../styles/styles";
import { Container, ContainerDescription, ContainerForm, Form } from "./styles";

export function Checkout() {
  return (
    <Container>
      <ContainerForm>
        <TitleContainer size="18" variant="subtitle" weight="bd">
          Complete seu pedido
        </TitleContainer>
        <Form>
          <div>
            
          </div>
        </Form>
      </ContainerForm>
      <ContainerDescription>
        <TitleContainer size="18" variant="subtitle" weight="bd">
          Cafés selecionados
        </TitleContainer>
      </ContainerDescription>
    </Container>
  );
}
