import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home';

const Page = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Page.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
      <Page.Screen  name="Home" component={Home} />
    </Page.Navigator>
  )
}

export default Routes