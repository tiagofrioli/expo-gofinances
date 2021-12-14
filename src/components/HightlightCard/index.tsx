import React from 'react';
import { Amount, Container, Footer, Header, Icon, LastTransaction, Title } from './styles';

const HightlightCard: React.FC = () => {
  return (
   <Container>
    <Header>
     <Title>Entrada</Title>
     <Icon name="arrow-up-circle" />
    </Header>

    <Footer>
     <Amount>R$ 17.400,00</Amount>
     <LastTransaction>Útilma entrada dia 13 de Abril</LastTransaction>
    </Footer>
   </Container>
  );
}

export default HightlightCard;