import React from "react";
import { View } from "react-native";
import { SocialButtonProps } from "./types";

import { Container, ImageContainer, Text } from "./styles";

const SocialButton: React.FC<SocialButtonProps> = (props) => {
  const { svg: SVG, title, ...rest } = props;
  return (
    <Container {...rest}>
      <ImageContainer>
        <SVG />
      </ImageContainer>
      <Text>{title}</Text>
    </Container>
  );
};

export default SocialButton;
