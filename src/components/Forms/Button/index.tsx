import React from "react";
import { Container, Title } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = (props) => {
  const { title, onPress, ...rest } = props;
  return (
    <Container onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
