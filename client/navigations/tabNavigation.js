import React from 'react';
import { createBottomTabNavigator } from 'react-navigation'; 
import { Ionicons } from "@expo/vector-icons";

import SearchScreen from '../screens/searchScreen';
import AddPhotoScreen from '../screens/addPhotoScreen';
import NotificationScreen from '../screens/notificationScreen';
import feedScreen from '../screens/feedScreen';
import profileScreen from '../screens/profile/profileScreen';


export default TabNavigation = createBottomTabNavigator (
  {
    Home: feedScreen,
    Search: SearchScreen,
    AddPhoto: AddPhotoScreen,
    Notification: NotificationScreen,
    Profile: profileScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home' ) {
          iconName = `ios-home${focused? '': '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused? '': '-outline'}`;
        } else if (routeName === 'AddPhoto') {
          iconName = `ios-add-circle${focused? '': '-outline'}`;
        } else if (routeName === 'Notification') {
          iconName = `ios-heart${focused? '': '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused? '': '-outline'}`;
        }

        return <Ionicons name={iconName} size={25}/>;
      },
    }),
    tabBarOptions: {
      showLabel: false
    },
    animationEnabled: false,
    swipeEnabled: false,
  }  
);