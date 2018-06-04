import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import FeedScreen from '../screens/feedScreen';

export default FeedStack = createStackNavigator (
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        header:
          <View style={styles.headerContainer}>
            <SimpleLineIcons name='camera' size={25}/>
            <Image 
              source={require('../image/logo.png')} 
              style={{ height: 35 }}
              resizeMode={'contain'}
            />
            <Ionicons name='ios-paper-plane-outline' size={30}/>
          </View>
      })
    }
  }
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray'
  }
});