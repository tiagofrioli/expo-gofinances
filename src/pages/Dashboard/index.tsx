import React from 'react';
import HightlightCard from '../../components/HightlightCard';
import { Container, Header, HightlightCards, Icon, Photo, Title, Transactions, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles';


const Dashboard: React.FC = () => {
  return (
   <Container>
    <Header>
     <UserWrapper>
      <UserInfo>
       <Photo source={{uri: 'https://avatars.githubusercontent.com/u/8865261?v=4'}} />
       <User>
        <UserGreeting>Olá,</UserGreeting>
        <UserName>Tiago</UserName>
       </User>
      </UserInfo>
      <Icon name="power" />
      </UserWrapper>
    </Header>
    <HightlightCards > 
      <HightlightCard type='income' title="Entradas" amount="R$ 21.400,99" lastTransaction="Ultima entrada dia 13" />
      <HightlightCard type='outcome' title="Saídas" amount="R$ 1.400,99" lastTransaction="Ultima entrada dia 13" />
      <HightlightCard type='total' title="Total" amount="R$ 20.400,99" lastTransaction="Ultima entrada dia 13"/>
    </HightlightCards>

    <Transactions>
      <Title>Listagem</Title>
    </Transactions>
   </Container>
  );
  }
export default Dashboard;