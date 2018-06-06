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
        <View>
          <FlatList
            data={data}
            renderItem={ ({item}) => <Card key={item.key} item={item}/>}/>
        </View>
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