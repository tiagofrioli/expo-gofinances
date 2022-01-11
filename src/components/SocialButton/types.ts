import React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

export interface SocialButtonProps extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}
