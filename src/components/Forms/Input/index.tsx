import React from "react";

import { Container } from "./styles";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = (props) => {
  const { ...rest } = props;
  return <Container {...rest} />;
};

export default Input;
