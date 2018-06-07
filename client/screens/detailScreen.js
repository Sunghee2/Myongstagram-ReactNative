import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextInput, FlatList, ScrollView } from 'react-native-gesture-handler';
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { connect } from 'react-redux';

import Card from '../components/card';


class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    headertitle: '사진'
  })

  render() {
    return (
      <View>
        <View>
          <FlatList
            data={this.props.post}
            renderItem={ ({item}) => <Card key={item.key} item={item}/>}
          />
        </View>
      </View>
    );
  }
}
