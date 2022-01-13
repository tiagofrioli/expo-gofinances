import React from "react";
import AppleSvg from "../../assets/apple-icon.svg";
import GoogleSvg from "../../assets/google-icon.svg";
import GoFinancesSvg from "../../assets/gofinances-logo.svg";
import {
  Container,
  Footer,
  FooterWrapper,
  Header,
  SignInTitle,
  Title,
  TitleWrapper,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import SocialButton from "../../components/SocialButton";
import { useAuth } from "../../context/auth";
import { Alert } from "react-native";

const SignIn: React.FC = () => {
  const { signInGoogle } = useAuth();

  async function handleSignInGoogle() {
    try {
      await signInGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel conectar a conta Google");
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <GoFinancesSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>Controle suas finanças de forma muito simples</Title>
        </TitleWrapper>
        <SignInTitle>Faça seu login</SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInGoogle}
          />

          <SocialButton title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
};

export default SignIn;
