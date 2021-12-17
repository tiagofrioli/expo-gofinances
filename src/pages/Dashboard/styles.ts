import { Feather } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${theme.colors.primary};
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 18px;
`;

export const UserGreeting = styled.Text`
  color: ${theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HightlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(22)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFPercentage(14)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
`;

export const TransactionList = styled.FlatList``;
