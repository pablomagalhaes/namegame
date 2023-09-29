import React from 'react';
import { Alert, Text } from 'react-native';
import { Container, WelcomeText, GenericButton, GenericButtonText} from './styles';

import api from '../../Services/api';

const Home: React.FC = () => {


  return (
    <Container>
      <WelcomeText>Try matching the WillowThree</WelcomeText>
      <WelcomeText>employee to their photo</WelcomeText>
      <GenericButton onPress={() => Alert.alert('Button Test')}>
        <GenericButtonText>Pratice Mode</GenericButtonText>
      </GenericButton> 
      <GenericButton onPress={() => Alert.alert('Button Test')}>
        <GenericButtonText>Timed Mode</GenericButtonText>
      </GenericButton>  
    </Container>
  )
}

export default Home;