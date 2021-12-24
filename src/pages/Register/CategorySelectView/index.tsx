import React from "react";
import { FlatList } from "react-native";
import Button from "../../../components/Forms/Button";

import { categories } from "../../../utils/categories";

import {
  Category,
  Container,
  Footer,
  Header,
  Icon,
  Name,
  Separator,
  Title,
} from "./styles";
import { CategoryProps, CategorySelectProps } from "./types";

const CategorySelectView: React.FC<CategorySelectProps> = (props) => {
  const { category, setCategory, closeSelectCategory } = props;

  function handleCategorySelect(category: CategoryProps) {
    setCategory(category);
  }

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
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  );
};

export default CategorySelectView;
