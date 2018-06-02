import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/loginScreen';
import SigninNavigation from './signinNavigation';
import TabNavigation from './tabNavigation';


export default RootNavigation = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Signin: {
    screen: SigninNavigation,
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