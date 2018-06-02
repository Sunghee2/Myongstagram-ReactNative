import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


import Card from '../../components/card';

export default class ListScreen extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={[
            {key: 0, name: 'hehe'},
            {key: 1, name: 'sunghhhh'}
          ]}
          renderItem={ ({item}) => <Card key={item.key} item={item}/>}/>
      </View>
    )
  }
}