import React, { useState } from "react";
import { Modal } from "react-native";
import Button from "../../components/Forms/Button";
import CategorySelect from "../../components/Forms/CategorySelect";
import Input from "../../components/Forms/Input";
import TransactionTypeButton from "../../components/Forms/TransactionTypeButton";
import CategorySelectView from "./CategorySelectView";

import { Container, Fields, Form, GroupButtons, Header, Title } from "./styles";

const Register: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  function handleButtonSelected(type: "income" | "outcome") {
    setSelectedButton(type);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <GroupButtons>
            <TransactionTypeButton
              onPress={() => handleButtonSelected("income")}
              isActive={selectedButton === "income"}
              type="income"
              title="Income"
            />
            <TransactionTypeButton
              onPress={() => handleButtonSelected("outcome")}
              type="outcome"
              title="Outcome"
              isActive={selectedButton === "outcome"}
            />
          </GroupButtons>

          <CategorySelect title={category.name} onPress={handleOpenModal} />
        </Fields>
        <Button title="Enviar" />
      </Form>

      <Modal visible={openModal}>
        <CategorySelectView
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseModal}
        />
      </Modal>
    </Container>
  );
};

export default Register;
