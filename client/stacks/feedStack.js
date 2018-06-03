import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import FeedScreen from '../screens/feedScreen';

export default FeedStack = createStackNavigator (
  {
    Feed: {
      screen: FeedScreen,
      // navigationOptions: ({ navigation }) => ({
      //   headerTitle:
      //     <View style={styles.headerContainer}>
      //       <SimpleLineIcons name='camera' size={25}/>
      //       <Image 
      //         source={require('../image/logo.png')} 
      //         style={{ height: 40 }}
      //         resizeMode={'contain'}
      //       />
      //       <Ionicons name='ios-paper-plane-outline' size={30}/>
      //     </View>
      // })
    }
  }
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
});