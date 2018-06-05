import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button,
  PermissionsAndroid,
  CameraRoll
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextInput, FlatList } from 'react-native-gesture-handler';

import Card from '../components/card';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";


class FeedScreen extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={[
            {key: '0', name: 'sunghee'},
            {key: '1', name: 'hayoung'}
          ]}
          renderItem={ ({item}) => <Card key={item.key} item={item}/>}/>
      </View>
    );
  }
}

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
    borderBottomColor: 'lightgray',
    paddingTop: Expo.Constants.statusBarHeight
  }
});