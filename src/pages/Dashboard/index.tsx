import React, { useCallback, useEffect, useState } from "react";
import HightlightCard from "../../components/HightlightCard";
import TransactionCard from "../../components/TransactionCard";
import { getBottomSpace } from "react-native-iphone-x-helper";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import {
  Container,
  Header,
  HightlightCards,
  Icon,
  LoadContainer,
  LogoutButton,
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
import { HighLightProps, ListProps } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactionsData, setTransactionsData] = useState<ListProps[]>([]);
  const [highlightData, setHighLightData] = useState<HighLightProps>(
    {} as HighLightProps
  );

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  async function loadTransactions() {
    const dataKey = "@gofinance:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entrieSum = 0;
    let expensive = 0;

    const transactionsFormated: ListProps[] = transactions.map(
      (item: ListProps) => {
        if (item.type === "income") {
          entrieSum += Number(item.amount);
        } else {
          expensive += Number(item.amount);
        }
        const amount = Number(item.amount).toLocaleString("pt-Br", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-Br", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    const total = entrieSum - expensive;

    setTransactionsData(transactionsFormated);
    setHighLightData({
      entries: {
        total: entrieSum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      expensive: {
        total: expensive.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      totalAmount: {
        total: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator size="large" color="blue" />
        </LoadContainer>
      ) : (
        <>
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
              <LogoutButton onPress={() => {}}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HightlightCards>
            <HightlightCard
              type="income"
              title="Entradas"
              amount={highlightData.entries.total}
              lastTransaction="Ultima entrada dia 13"
            />
            <HightlightCard
              type="outcome"
              title="Saídas"
              amount={highlightData.expensive.total}
              lastTransaction="Ultima entrada dia 13"
            />
            <HightlightCard
              type="total"
              title="Total"
              amount={highlightData.totalAmount.total}
              lastTransaction="Ultima entrada dia 13"
            />
          </HightlightCards>

          <Transactions>
            <Title>Listagem</Title>
            <TransactionList
              data={transactionsData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: getBottomSpace(),
              }}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
};
export default Dashboard;
