import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Ionicons, Foundation } from "@expo/vector-icons";

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
            return <Foundation name='thumbnails' size={23}/>;
          } else if (routeName === 'List') {
            return <Ionicons name='ios-list-outline' size={23}/>;
          } else if (routeName === 'Tag') {
            return <Ionicons name='ios-contact-outline' size={23}/>;
          } else if (routeName === 'Bookmark') {
            return <Ionicons name='ios-bookmark-outline' size={23}/>;
          } 
        },
      }),
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        tabStyle: {
          height: 40
        },
        style: {
          backgroundColor: 'white'
        },
        indicatorStyle: {
          backgroundColor: 'gray'
        }
      },
      tabBarPosition: 'top',
      swipeEnabled: false,
      animationEnabled: false,
  }
);