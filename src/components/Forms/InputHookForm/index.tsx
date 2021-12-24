import React from "react";
import Input from "../Input";
import { Controller } from "react-hook-form";
import { Container } from "./styles";
import { InputHookProps } from "./types";

const InputHookForm: React.FC<InputHookProps> = (props) => {
  const { control, name, ...rest } = props;

  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
    </Container>
  );
};

export default InputHookForm;
