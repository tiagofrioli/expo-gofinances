import React from 'react';
import { Amount, Container, Footer, Header, Icon, LastTransaction, Title } from './styles';
import { PropsCard } from './types';

const HightlightCard: React.FC<PropsCard> = (props) => {

 const {title, amount, lastTransaction, type} = props;

 const icon = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
  total: 'dollar-sign'
 }
 
  return (
   <Container type={type}>
    <Header>
     <Title type={type}>{title}</Title>
     <Icon name={icon[type]} type={type} />
    </Header>

    <Footer>
     <Amount type={type}>{amount}</Amount>
     <LastTransaction type={type}>{lastTransaction}</LastTransaction>
    </Footer>
   </Container>
  );
}

export default HightlightCard;