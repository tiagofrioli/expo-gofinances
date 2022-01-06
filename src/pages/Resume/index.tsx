import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import HistoryCard from "../../components/HistoryCard";
import { VictoryPie } from "victory-native";
import { Container, Header, Title, ChartContainer } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CategoryProps, TransactionsProps } from "./types";
import { categories } from "../../utils/categories";
import { RFValue } from "react-native-responsive-fontsize";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const Resume: React.FC = () => {
  const [totalCategories, setTotalCategories] = useState<CategoryProps[]>([]);

  async function loadData() {
    const dataKey = "@gofinance:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormated = response ? JSON.parse(response) : [];

    const expensives = responseFormated.filter(
      (expensive: TransactionsProps) => expensive.type === "outcome"
    );

    const expensiveTotal = expensives.reduce(
      (acumullator: number, expensive: TransactionsProps) => {
        return acumullator + Number(expensive.amount);
      },
      0
    );
    const totalcategory: CategoryProps[] = [];
    categories.forEach((category) => {
      let categorySum = 0;
      expensives.forEach((expensive: TransactionsProps) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const percent = `${((categorySum / expensiveTotal) * 100).toFixed(0)}%`;

        totalcategory.push({
          name: category.name,
          total: categorySum.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          color: category.color,
          totalRaw: categorySum,
          percent,
        });
      }
    });

    setTotalCategories(totalcategory);
  }

  useEffect(() => {
    loadData();
  }, []);
  console.log("TotalCategories", totalCategories);
  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <ChartContainer>
        <VictoryPie
          style={{
            labels: {
              fill: "white",
              fontSize: RFValue(18),
              fontWeight: "bold",
            },
          }}
          labelRadius={50}
          colorScale={totalCategories.map((category) => category.color)}
          data={totalCategories}
          x="percent"
          y="totalRaw"
        />
      </ChartContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 24,
          paddingBottom: useBottomTabBarHeight(),
        }}
      >
        {totalCategories.map((item, index) => (
          <HistoryCard
            key={index}
            title={item.name}
            amount={item.total}
            color={item.color}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Resume;
