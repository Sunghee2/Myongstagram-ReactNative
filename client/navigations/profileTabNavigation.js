import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Ionicons } from "@expo/vector-icons";

import GridScreen from '../screens/profile/gridScreen';
import ListScreen from '../screens/profile/listScreen';
import TagScreen from '../screens/profile/tagScreen';
import BookmarkScreen from '../screens/profile/bookmarkScreen';

export default profileTabNavigation = createMaterialTopTabNavigator (
  {
    Grid: {
      screen: GridScreen
    },
    List: {
      screen: ListScreen
    },
    Tag: {
      screen: TagScreen
    },
    Bookmark: {
      screen: BookmarkScreen
    },
  },{
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Grid' ) {
            iconName = `ios-home${focused? '': '-outline'}`;
          } else if (routeName === 'List') {
            iconName = `ios-search${focused? '': '-outline'}`;
          } else if (routeName === 'Tag') {
            iconName = `ios-add-circle${focused? '': '-outline'}`;
          } else if (routeName === 'Bookmark') {
            iconName = `ios-heart${focused? '': '-outline'}`;
          } 
          return <Ionicons name={iconName} size={25}/>;
        },
      }),
      tabBarOptions: {
        showIcon: true,
        showLabel: false
      },
      tabBarPosition: 'top',
      swipeEnabled: false,
      animationEnabled: false,
      tabBarOptions: {
        style: {
          backgroundColor: 'white'
        }
      }
  }
);