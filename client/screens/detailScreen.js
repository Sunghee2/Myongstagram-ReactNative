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


export default class DetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: '사진'
  })

  render() {
    const post = this.props.navigation.state.params.post;
    const user = this.props.navigation.state.params.user || null;
    return (
      <View>
        <FlatList
          data={[{
            key: post.id.toString(), 
            username: user? user.username : post.User.username, 
            profileImage: user? user.profileImage : post.User.profileImage, 
            image: post.image, 
            content: post.content, 
            createdAt: post.createdAt
          }]}
          renderItem={ ({item}) => <Card key={item.key} item={item}/>}
        />
      </View>
    );
  }
}
