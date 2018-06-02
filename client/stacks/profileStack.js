import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from "@expo/vector-icons";

import ProfileTabNavigation from '../navigations/profileTabNavigation';

export default ProfileStack = createStackNavigator (
  {
    Profile: {
      screen: ProfileTabNavigation,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 
          <Text style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>Sunghee</Text>
        ,
        headerLeft: (
          <Ionicons
            name='md-person-add'
            size={25}
            style={{marginLeft: 10}}
          />
        ),
        headerRight: (
          <Ionicons
            name='ios-clock-outline'
            size={25}
            style={{marginRight: 10}}
          />
        ),
      })
    }
  }
)