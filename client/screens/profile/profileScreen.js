import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Ionicons } from "@expo/vector-icons";

import ProfileTabNavigation from '../../navigations/profileTabNavigation';

const ProfileTabStack = createStackNavigator (
  {
    Profile: {
      screen: ProfileTabNavigation,
      navigationOptions: ({ navigation }) => ({
        header:
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image
                source={require('../../image/test.png')}
                style={styles.profilePhoto}
              />
              <Text style={{ fontSize: 12 }}>Sunghee</Text>
            </View>
            <View style={styles.headerRight}>
              <View>
                <Text style={styles.headerText}>게시물</Text>
              </View>
              <View>
                <Text style={styles.headerText}>팔로워</Text>
              </View>
              <View>
                <Text style={styles.headerText}>팔로잉</Text>
              </View>
            </View>
          </View>
      })
    }
  }
)

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
            <Text style={styles.username}></Text>
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
    height: 50,
    paddingTop: Expo.Constants.statusBarHeight
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray'
  },
  headerLeft: {
    flex: 2,
    alignItems: 'center',
  },
  headerRight: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profilePhoto: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  headerText: {
    fontSize: 10,
    color: 'gray'
  }
});