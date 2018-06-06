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
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import Card from '../components/card';


class FeedScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
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

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    var data = [];
    if (this.props.posts) {
      this.props.posts.map(post => {
        data.push({ key: post.id, username: post.User.username, profileImage: post.User.profileImage, image: post.image, content: post.content, createdAt: post.createdAt});
      })
    }
    console.log(data);

    return (
      <View>
        <FlatList
          data={data}
          renderItem={ ({item}) => <Card key={item.key} item={item}/>}/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(FeedScreen);

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