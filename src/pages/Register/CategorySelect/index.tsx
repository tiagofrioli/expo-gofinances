import React from "react";
import { FlatList } from "react-native";
import Button from "../../../components/Forms/Button";

import { categories } from "../../../utils/categories";
import { Container, Header, Title } from "../styles";
import { Category, Footer, Icon, Name, Separator } from "./styles";
import { CategorySelectProps } from "./types";

const CategorySelect: React.FC<CategorySelectProps> = (props) => {
  const { category, setCategory, closeSelectCategory } = props;
  return (
    <Container>
      <Header>
        <Title>Categorioa</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" />
      </Footer>
    </Container>
  );
};

export default CategorySelect;
