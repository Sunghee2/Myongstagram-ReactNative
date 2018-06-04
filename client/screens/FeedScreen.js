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
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";


export default class FeedScreen extends React.Component {
  static navigationOptions= ({ navigation }) => {
    headerStyle: {height:100}

    return {
      headerTitle:
        <View style={styles.headerContainer}>
          <SimpleLineIcons name='camera' size={25}/>
          <Image 
            source={require('../image/logo.png')} 
            style={{ height: 40 }}
            resizeMode={'contain'}
          />
          <Ionicons name='ios-paper-plane-outline' size={30}/>
        </View>
    }
  }

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

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
})