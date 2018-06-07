import React from 'react';
import { createStackNavigator } from 'react-navigation';

import LoginScreen from '../screens/loginScreen';
import TabNavigation from './tabNavigation';
import IdScreen from '../screens/signup/idScreen';
import PasswordScreen from '../screens/signup/passwordScreen';


export default RootNavigation = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  CheckId: {
    screen: IdScreen
  },
  CheckPw: {
    screen: PasswordScreen
  },
  Home: {
    screen: TabNavigation,
  },
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)