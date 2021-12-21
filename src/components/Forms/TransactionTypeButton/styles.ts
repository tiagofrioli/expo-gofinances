import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
  type: "income" | "outcome";
}

interface ContainerProps extends IconProps {
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px 35px;
  justify-content: center;
  margin: 12px 0;

  ${({ isActive, type }) =>
    isActive &&
    type == "outcome" &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type == "income" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) =>
    type === "income" ? theme.colors.success : theme.colors.attention};
`;
