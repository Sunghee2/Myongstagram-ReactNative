import React from 'react';
import { 
  StyleSheet, 
  Text,
  View, 
  Image,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { TextInput, FlatList, ScrollView } from 'react-native-gesture-handler';
import { SimpleLineIcons } from "@expo/vector-icons";
import { connect } from 'react-redux';
import { Permissions, Notifications } from 'expo';

import { fetchPosts, addPushToken } from '../actions';
import Card from '../components/card';


class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts,
      token: '',
      isMount: false,
    }
  }

  static navigationOptions = ({ navigation }) => ({
    header:
      <View style={styles.headerContainer}>
        <View>
          <SimpleLineIcons name='camera' size={25}/>
        </View>
        <View>
          <Image 
            source={require('../image/logo.png')} 
            style={{ height: 35 }}
            resizeMode={'contain'}
          />
        </View>
        <View>
          <TouchableOpacity onPress={this.onPressReload}>
            <SimpleLineIcons name='reload' size={25}/>
          </TouchableOpacity>
        </View>
      </View>
  })

  componentWillMount() {
    AsyncStorage.getItem('user')
      .then( data => {
        data = JSON.parse(data);
        this.setState({
          token: data.pushToken,
          isMount: true
        });
      })
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  async registerForPushNotifications() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = status;
  
    if (status !=='granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
  
    if (finalStatus !== 'granted') {return;}
  
    let token = await Notifications.getExpoPushTokenAsync();

    this.props.addPushToken(token);
    this.setState({ isMount: false });
  }

  onPressReload = () => {
    this.props.fetchPosts();
  }

  renderStory() {
    return (
      <View style={styles.storyContainer}>
          <View style={styles.storyTop}>
            <Text style={styles.storyText}>스토리</Text>
            <Text style={styles.storyText}>모두 보기</Text>
          </View>
          <View style={styles.storyBottom}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: 'center',
                paddingStart: 5,
                paddingEnd: 5,
              }}>
                <Image
                  style={styles.storyItem}
                  source={require('../image/test.png')}
                />
            </ScrollView>
          </View>
        </View>
    )
  }

  render() {
    var data = [];
    if(this.state.isMount && !this.state.token) {
      this.registerForPushNotifications();
    }
    if (this.props.posts) {
      this.props.posts.map(post => {
        data.push({ key: post.id.toString(), userId: post.userId, username: post.User.username, profileImage: post.User.profileImage, image: post.image, content: post.content, createdAt: post.createdAt, like: post.Likes});
      })
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color='blue'/>
        </View>
      )
    }
    return (
      <View>
        <FlatList
          data={data}
          renderItem={ ({item}) => <Card key={item.key} item={item}/>}
          ListHeaderComponent={this.renderStory()}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts, addPushToken })(FeedScreen);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    paddingTop: Expo.Constants.statusBarHeight
  },
  storyContainer: {
    height: 100,
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    padding: 5
  }, 
  storyTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7
  },
  storyText: {
    fontSize: 12
  },
  storyBottom: {
    flex: 3,
  },
  storyItem: {
    marginHorizontal: 5,
    borderColor: 'gray',
    margin: 5,
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 100,
  }
});