import React from "react";
import { View } from "react-native";
import { Category, Container, Icon } from "./styles";
import { CategoryProps } from "./types";

const CategorySelect: React.FC<CategoryProps> = (props) => {
  const { title, onPress } = props;
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelect;
