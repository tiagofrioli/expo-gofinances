import React from "react";
import { View } from "react-native";
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

  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;
