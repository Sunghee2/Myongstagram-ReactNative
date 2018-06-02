import React from 'react';
import { createStackNavigator } from 'react-navigation';

import IdScreen from '../screens/signin/idScreen';
import PasswordScreen from '../screens/signin/passwordScreen';


export default SigninNavigation = createStackNavigator(
  {
    CheckId: IdScreen,
    CheckPw: PasswordScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
)