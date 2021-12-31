import React from "react";
import { View } from "react-native";
import { categories } from "../../utils/categories";
import {
  Amount,
  Category,
  CategoryName,
  Container,
  Footer,
  Icon,
  Title,
  Date,
} from "./styles";
import { PropsTransactionCard } from "./types";

const TransactionCard: React.FC<PropsTransactionCard> = (props) => {
  const { data } = props;

  const category = categories.filter((item) => item.key == data.category)[0];

  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === "outcome" && "- "}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
