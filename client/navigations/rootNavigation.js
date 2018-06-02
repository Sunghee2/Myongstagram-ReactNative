import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/loginScreen';
import SigninScreen from '../screens/signin/signinScreen';
import TabNavigation from './tabNavigation';


export default RootNavigation = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Signin: {
    screen: SigninScreen,
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