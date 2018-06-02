import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/loginScreen';
import TabNavigation from './tabNavigation';


export default RootNavigation = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: TabNavigation,
  }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)