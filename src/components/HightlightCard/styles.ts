import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from "styled-components/native";
import theme from '../../global/styles/theme';
import { PropsType } from './types';


export const Container = styled.View<PropsType>`
 background-color: ${props => props.type === "total" ? theme.colors.secondary : theme.colors.shape};
 width: ${RFValue(300)}px;
 border-radius: 5px;
 padding: 19px 23px;
 padding-bottom: ${RFValue(42)}px;
 margin-right: 16px;
`;

export const Header = styled.View`
 flex-direction: row;
 justify-content: space-between;
`;

export const Title = styled.Text<PropsType>`
 font-size: ${RFValue(14)}px;
 font-family: ${theme.fonts.regular};
 color: ${props => props.type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<PropsType>`
 font-size: ${RFValue(40)}px;

 ${(props => props.type === 'income'&& css`
  color: ${theme.colors.success}
 `)};

 ${(props => props.type === 'outcome'&& css`
  color: ${theme.colors.attention}
 `)};

 ${(props => props.type === 'total'&& css`
  color: ${theme.colors.shape}
 `)};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<PropsType>`
 font-family: ${theme.fonts.medium};
 font-size: ${RFValue(32)}px;
 color: ${props => props.type === "total" ? theme.colors.shape : theme.colors.text_dark};
 margin-top: 38px;
`;

export const LastTransaction = styled.Text<PropsType>`
 font-size: ${RFValue(12)}px;
 font-family: ${theme.fonts.regular};
 color: ${props => props.type === "total" ? theme.colors.shape : theme.colors.text};
`;