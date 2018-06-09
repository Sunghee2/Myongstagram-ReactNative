import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'; 
import { Ionicons } from "@expo/vector-icons";

import SearchScreen from '../screens/searchScreen';
import AddPhotoScreen from '../screens/addPhotoScreen';
import NotificationScreen from '../screens/notificationScreen';
import FeedScreen from '../screens/feedScreen';
import profileScreen from '../screens/profile/profileScreen';
import EditPostScreen from '../screens/editPostScreen';
import testScreen from '../screens/profile/testScreen';
import DetailScreen from '../screens/detailScreen';
// import EditPostScreen from '../screens/editPostScreen';


const FeedStack = createStackNavigator ({ Feed: { screen : FeedScreen }, EditPost: {screen: EditPostScreen} });
const AddPhotoStack = createStackNavigator ({ AddPhoto: { screen : AddPhotoScreen } });
const ProfileStack = createStackNavigator ({ Profile: { screen: testScreen }, Detail: { screen: DetailScreen}});
// const EditPostStack = createStackNavigator ({ EditPost: { screen : EditPostScreen } });


export default TabNavigation = createBottomTabNavigator (
  {
    Home: FeedStack,
    Search: SearchScreen,
    AddPhoto: AddPhotoStack,
    Notification: NotificationScreen,
    // Profile: profileScreen,
    Profile: ProfileStack
    // EditPost: EditPostStack
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