import React from 'react';
import { Container, Header, Icon, Photo, User, UserGreeting, UserInfo, UserName, UserWrapper } from './styles';


const Dashboard: React.FC = () => {
  return (
   <Container>
    <Header>
     <UserWrapper>
      <UserInfo>
       <Photo source={{uri: 'https://avatars.githubusercontent.com/u/8865261?v=4'}} />
       <User>
        <UserGreeting>Olá,</UserGreeting>
        <UserName>Tiago</UserName>
       </User>
      </UserInfo>
      <Icon name="power" />
      </UserWrapper>
    </Header>
   </Container>
  );
  }
export default Dashboard;