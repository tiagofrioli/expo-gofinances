import React, { useState } from "react";
import Button from "../../components/Forms/Button";
import CategorySelect from "../../components/Forms/CategorySelect";
import Input from "../../components/Forms/Input";
import TransactionTypeButton from "../../components/Forms/TransactionTypeButton";

import { Container, Fields, Form, GroupButtons, Header, Title } from "./styles";

const Register: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("");

  function handleButtonSelected(type: "income" | "outcome") {
    setSelectedButton(type);
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

          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
};

export default Register;
