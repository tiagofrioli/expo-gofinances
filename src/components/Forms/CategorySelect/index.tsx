import React from "react";
import { View } from "react-native";
import { Category, Container, Icon } from "./styles";
import { CategoryProps } from "./types";

const CategorySelect: React.FC<CategoryProps> = (props) => {
  const { title } = props;
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelect;
