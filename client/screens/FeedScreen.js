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
import { TextInput, FlatList } from 'react-native-gesture-handler';

import Card from '../components/card';


export default class FeedScreen extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={[
            {key: 0, name: 'sunghee'},
            {key: 1, name: 'hayoung'}
          ]}
          renderItem={ ({item}) => <Card key={item.key} item={item}/>}/>
      </View>
    );
  }
}