import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import HistoryCard from "../../components/HistoryCard";
import { VictoryPie } from "victory-native";
import { addMonths, format, subMonths } from "date-fns";
import {
  Container,
  Header,
  Title,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  SelectIcon,
  Month,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CategoryProps, TransactionsProps } from "./types";
import { categories } from "../../utils/categories";
import { RFValue } from "react-native-responsive-fontsize";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ptBR } from "date-fns/locale";
import { useFocusEffect } from "@react-navigation/native";

const Resume: React.FC = () => {
  const [totalCategories, setTotalCategories] = useState<CategoryProps[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(action: "next" | "prev") {
    action === "next"
      ? setSelectedDate(addMonths(selectedDate, 1))
      : setSelectedDate(subMonths(selectedDate, 1));
  }

  async function loadData() {
    const dataKey = "@gofinance:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormated = response ? JSON.parse(response) : [];

    const expensives = responseFormated.filter(
      (expensive: TransactionsProps) =>
        expensive.type === "outcome" &&
        new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
        new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
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

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectedDate])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <MonthSelect>
        <MonthSelectButton onPress={() => handleDateChange("prev")}>
          <SelectIcon name="chevron-left" />
        </MonthSelectButton>

        <Month>{format(selectedDate, "MMMM, yyy", { locale: ptBR })}</Month>
        <MonthSelectButton onPress={() => handleDateChange("next")}>
          <SelectIcon name="chevron-right" />
        </MonthSelectButton>
      </MonthSelect>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: useBottomTabBarHeight(),
        }}
      >
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
