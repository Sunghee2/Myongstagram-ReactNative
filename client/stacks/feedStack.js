import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import FeedScreen from '../screens/feedScreen';

export default FeedStack = createStackNavigator (
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle:
          <Image
            source={require('../image/logo.png')}
            style={{ 
              height: 40, 
              alignItems: 'center',
              justifyContent: 'center'
            }}
            resizeMode={'contain'}
          />,
        headerLeft: (
          <SimpleLineIcons 
            name='camera' 
            size={25}
            style={{marginLeft: 10}}
          />
        ),
        headerRight: (
          <Ionicons 
            name='ios-paper-plane-outline' 
            size={30}
            style={{marginRight: 10}}
          />
        )
      })
    }
  }
);