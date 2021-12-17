import React from "react";
import HightlightCard from "../../components/HightlightCard";
import TransactionCard from "../../components/TransactionCard";
import { getBottomSpace } from "react-native-iphone-x-helper";
import {
  Container,
  Header,
  HightlightCards,
  Icon,
  Photo,
  Title,
  TransactionList,
  Transactions,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from "./styles";
import { PropsTransactionCard } from "../../components/TransactionCard/types";

const Dashboard: React.FC = () => {
  const data: PropsTransactionCard = [
    {
      title: "Desenvolvimento de sites",
      amount: "R$ 12.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "13/04/2021",
    },
    {
      title: "Desenvolvimento de sites",
      amount: "R$ 12.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "13/04/2021",
    },
    {
      title: "Desenvolvimento de sites",
      amount: "R$ 12.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "13/04/2021",
    },
    {
      title: "Desenvolvimento de sites",
      amount: "R$ 12.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "13/04/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/8865261?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Tiago</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HightlightCards>
        <HightlightCard
          type="income"
          title="Entradas"
          amount="R$ 21.400,99"
          lastTransaction="Ultima entrada dia 13"
        />
        <HightlightCard
          type="outcome"
          title="Saídas"
          amount="R$ 1.400,99"
          lastTransaction="Ultima entrada dia 13"
        />
        <HightlightCard
          type="total"
          title="Total"
          amount="R$ 20.400,99"
          lastTransaction="Ultima entrada dia 13"
        />
      </HightlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        />
      </Transactions>
    </Container>
  );
};
export default Dashboard;
