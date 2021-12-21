import React from "react";
import { Container, Icon, Title } from "./styles";
import { TypeButtonProps } from "./types";

const TransactionTypeButton: React.FC<TypeButtonProps> = (props) => {
  const { title, type, isActive, ...rest } = props;

  const icons = {
    income: "arrow-up-circle",
    outcome: "arrow-down-circle",
  };

  return (
    <Container {...rest} type={type} isActive={isActive}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
};

export default TransactionTypeButton;
