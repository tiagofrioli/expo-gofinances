import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Alert, Modal } from "react-native";
import uuid from "react-native-uuid";
import Button from "../../components/Forms/Button";
import CategorySelect from "../../components/Forms/CategorySelect";
import InputHookForm from "../../components/Forms/InputHookForm";
import TransactionTypeButton from "../../components/Forms/TransactionTypeButton";
import CategorySelectView from "./CategorySelectView";
import { Container, Fields, Form, GroupButtons, Header, Title } from "./styles";
import { FormDataProps } from "./types";

const Register: React.FC = () => {
  const [transactionTypeSelected, setTransactionTypeSelected] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  const { control, handleSubmit, reset } = useForm();
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();
  const dataCollection = "@gofinance:transactions";

  function handleButtonSelected(type: "income" | "outcome") {
    setTransactionTypeSelected(type);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  async function handleRegister(form: FormDataProps) {
    const newData = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionTypeSelected,
      category: category.key,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(dataCollection);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormated = [...currentData, newData];
      await AsyncStorage.setItem(dataCollection, JSON.stringify(dataFormated));

      reset();
      setTransactionTypeSelected("");
      setCategory({
        key: "category",
        name: "Categoria",
      });

      navigate("Listagem");
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel salvar ");
    }
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
