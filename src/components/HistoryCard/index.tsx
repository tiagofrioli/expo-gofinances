import React from "react";
import { View } from "react-native";

import { Amount, Container, Title } from "./styles";
import { HsitoryCardProps } from "./types";

const HistoryCard: React.FC<HsitoryCardProps> = (props) => {
  const { amount, title, color } = props;
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
};

export default HistoryCard;
