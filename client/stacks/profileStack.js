import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from "@expo/vector-icons";

import ProfileTabNavigation from '../navigations/profileTabNavigation';
import ProfileTabStack from './profileTabStack';

export default ProfileStack = createStackNavigator (
  {
    Profile: {
      screen: ProfileTabStack,
      navigationOptions: ({ navigation }) => ({
        header: 
          <View style={styles.headerContainer}>
            <Ionicons
              name='md-person-add'
              size={23}
            />
            <Text style={styles.username}>Sunghee</Text>
            <Ionicons
              name='ios-clock-outline'
              size={25}
            />
          </View>
      })
    }
  }
)

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    height: 50
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});