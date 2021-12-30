import React, { useEffect, useState } from "react";
import { Alert, Modal } from "react-native";
import Button from "../../components/Forms/Button";
import CategorySelect from "../../components/Forms/CategorySelect";
import Input from "../../components/Forms/Input";
import InputHookForm from "../../components/Forms/InputHookForm";
import TransactionTypeButton from "../../components/Forms/TransactionTypeButton";
import CategorySelectView from "./CategorySelectView";
import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, Fields, Form, GroupButtons, Header, Title } from "./styles";
import { FormDataProps } from "./types";

const Register: React.FC = () => {
  const [transactionTypeSelected, setTransactionTypeSelected] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  const { control, handleSubmit } = useForm();
  const dataCollection = "@gofinance:transactions";

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataCollection);
      console.log(data);
    }

    loadData();
  }, []);

  function handleButtonSelected(type: "income" | "outcome") {
    setTransactionTypeSelected(type);
  }

  function handleCloseModal() {
    setOpenModal(false);
    console.log(openModal);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  async function handleRegister(form: FormDataProps) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionTypeSelected,
      category: category.key,
    };

    try {
      await AsyncStorage.setItem(dataCollection, JSON.stringify(data));
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel salvar ");
    }
    console.log(data);
    console.log(openModal);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputHookForm name="name" control={control} placeholder="Nome" />
          <InputHookForm name="amount" control={control} placeholder="Preço" />
          <GroupButtons>
            <TransactionTypeButton
              onPress={() => handleButtonSelected("income")}
              isActive={transactionTypeSelected === "income"}
              type="income"
              title="Income"
            />
            <TransactionTypeButton
              onPress={() => handleButtonSelected("outcome")}
              type="outcome"
              title="Outcome"
              isActive={transactionTypeSelected === "outcome"}
            />
          </GroupButtons>

          <CategorySelect title={category.name} onPress={handleOpenModal} />
        </Fields>
        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
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
