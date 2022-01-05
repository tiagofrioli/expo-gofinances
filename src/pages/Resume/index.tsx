import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import HistoryCard from "../../components/HistoryCard";

import { Container, Header, Title } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TransactionsProps } from "./types";
import { categories } from "../../utils/categories";

const Resume: React.FC = () => {
  const [totalCategories, setTotalCategories] = useState<any[]>([]);

  async function loadData() {
    const dataKey = "@gofinance:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormated = response ? JSON.parse(response) : [];

    const expensives = responseFormated.filter(
      (expensive: TransactionsProps) => expensive.type === "outcome"
    );
    const totalcategory: any = [];
    categories.forEach((category) => {
      let categorySum = 0;
      expensives.forEach((expensive: TransactionsProps) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        totalcategory.push({
          name: category.name,
          total: categorySum.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          color: category.color,
        });
      }
    });

    setTotalCategories(totalcategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
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
