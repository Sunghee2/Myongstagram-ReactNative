import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    FlatList,
    ActivityIndicator,
    TouchableOpacity 
} from "react-native";
import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button } from 'native-base'
var { height, width } = Dimensions.get('window');
import { Ionicons, Foundation } from "@expo/vector-icons";
import { connect } from 'react-redux';

import { getUser, getMyPost } from '../../actions';

import Card from '../../components/card';

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    header: 
      <View style={styles.headerContainer}>
        <Ionicons
          name='md-person-add'
          size={23}
        />
        <Text style={styles.username}></Text> : <Text></Text>
        <Ionicons
          name='ios-clock-outline'
          size={25}
        />
      </View>
  }

  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }

  componentWillMount() {
    this.props.getUser();
    this.props.getMyPost();
    // const {setParams} = this.props.navigation;
    // // const {setParams} = this.props.user;
    // setParams({username: this.props.user.user.username});
  }

  // componentWillReceiveProps() {
  //   if (this.props.user) {
  //     const user = this.props.user.user;
  //     console.log("설정  " + user.username);
  //     this.props.navigation.setParams({username: user.username});
  //   }
  // }

  tabClicked(tabIndex) {
    this.setState({
      tabIndex
    });
  }

  imageClicked(post) {
    this.props.navigation.navigate('Detail', { post: post, user: this.props.user.user});
  }
  

  renderImage() {
    return this.props.user.posts.map((post, index) => {
      return (
        <TouchableOpacity key={index} onPress={() => this.imageClicked(post)}>
          <View style={[
            { width: width / 3 }, 
            { height: width / 3}, 
            { marginBottom: 2 }, 
            index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0}
          ]}>
            <Image source={{uri: post.image}} 
              style={{
                flex: 1,
                alignSelf: 'stretch',
                width: undefined,
                height: undefined,
              }}/>
          </View>
        </TouchableOpacity>
      );
    });
  }

  renderTab() {
    if (this.state.tabIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderImage()}
        </View>
      );
    } else if (this.state.tabIndex == 1) {
      var data = [];
      if (this.props.user.posts) {
        this.props.user.posts.map(post => {
          data.push({ key: post.id, username: this.props.user.user.username, profileImage: this.props.user.user.username, image: post.image, content: post.content, createdAt: post.createdAt});
        })
      }
      return (
        <View>
          <FlatList
            data={data}
            renderItem={ ({item}) => <Card key={item.key} item={item}/>}
          />
        </View>
      );
    }
  }

  render() {
    const user = this.props.user.user;
    const posts = this.props.user.posts;
    if (!user || !posts) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color='blue'/>
        </View>
      );
    }
    // setParams({username: user.username});
    return (
      <View>  
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
              <Image source={require('../../image/profile.jpg')}
                style={{width: 75, height: 75, borderRadius: 37.5}}/>
            </View>
            <View style={{flex:3}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-end'}}>
                <View style={{alignItems: 'center'}}>
                  <Text>20</Text>
                  <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text>205</Text>
                  <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Text>167</Text>
                  <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                  <Button bordered dark style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}><Text>Edit Profile</Text></Button>
                  <Button bordered dark style={{
                    flex: 1,
                    height: 30,
                    marginRight: 10, marginLeft: 5,
                    justifyContent: 'center'
                  }}>
                  <Ionicons name='ios-settings' size={20}/></Button>
                </View>
              </View>
            </View>
          </View>

          <View style={{ paddingBottom: 10 }}>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>{user.username}</Text>
              <Text></Text>
              <Text></Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
            <Button
              onPress={() => this.tabClicked(0)}
              transparent
              active={this.state.tabIndex == 0}
            >        
              <Foundation name='thumbnails' size={23}/>
            </Button>
            <Button
              onPress={() => this.tabClicked(1)}
              transparent active={this.state.tabIndex == 1}>
              <Ionicons name='ios-list-outline' size={23}/>
            </Button>
            <Button
              onPress={() => this.tabClicked(2)}
              transparent active={this.state.tabIndex == 2}>
              <Ionicons name='ios-contact-outline' size={23}/>
            </Button>
            <Button
              onPress={() => this.tabClicked(3)}
              transparent last active={this.state.tabIndex == 3}>
              <Ionicons name='ios-bookmark-outline' size={23}/>
            </Button>
          </View>

          {this.renderTab()}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { getUser, getMyPost })(ProfileScreen);

const styles = StyleSheet.create({
  Container: {
      flex: 1,
      backgroundColor: 'white'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    height: 50,
    paddingTop: Expo.Constants.statusBarHeight
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold'
  },

});