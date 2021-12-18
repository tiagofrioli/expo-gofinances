import React from "react";
import Input from "../../components/Forms/Input";

import { Container, Form, Header, Title } from "./styles";

const Register: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </Form>
    </Container>
  );
};

export default Register;
