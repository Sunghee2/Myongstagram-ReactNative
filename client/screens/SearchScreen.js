import React from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator
} from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import _ from 'lodash';

import { searchUser, searchPost } from '../actions';
import ImageGrid from '../components/imageGrid';


class SearchScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state={
      searchValue: '',
      tabIndex: 0
    };
    this.changeSearch = _.debounce(this.search, 200);
  }
  
  search() {
    this.props.searchUser(this.state.searchValue);
    this.props.searchPost(this.state.searchValue);
  }

  handleChange = (value) => {
    const searchValue = value;

    this.setState({ searchValue }, () => {
      this.changeSearch(searchValue)
    })
  }

  tabClicked(tabIndex) {
    this.setState({
      tabIndex
    });
  }

  renderTabButton() {
    return (
      <View style={styles.tabButtonView}>
        <TouchableOpacity
          onPress={() => this.tabClicked(0)}>
          <Text style={this.state.tabIndex == 0? {color: 'black'}: {color: 'gray'}}>사람</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.tabClicked(1)}>
          <Text style={this.state.tabIndex == 1? {color: 'black'}: {color: 'gray'}}>게시물</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  renderTabList() {
    if (this.state.tabIndex == 0) {
      if (this.props.search.user) {
        return (
          <FlatList
          data={this.props.search.user}
          renderItem={ ({item}) => this.renderUserListItem(item)}
          keyExtractor={(item, index) => item.id.toString()}/>
        );
      } else {
        return (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>검색결과가 없습니다.</Text>
        );
      }
    } else if (this.state.tabIndex == 1) {
      if (this.props.search.post) {
        return (
          <ImageGrid posts={this.props.search.post}/>
        )
      } else {
        return (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>검색결과가 없습니다.</Text>
        );
      }
    } 
  }

  renderUserListItem(user) {
    return (
      <View key={user.id} style={styles.userListItem}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity>
            <Image source={ user.profileImage? { uri: user.profileImage } : require('../image/profile.jpg')} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 4, flexDirection: 'column', justifyContent: 'center' }}>
          <View>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>{user.username}</Text>
          </View>
          <View>
            <Text style={{ color: 'gray' }}>{user.name}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        <View
          style={{ paddingTop: Expo.Constants.statusBarHeight }}>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            placeholder="검색"
            onChangeText={this.handleChange}
            value={this.state.searchValue}
          />
        </View>
        <View>
          {this.renderTabButton()}
        </View>
        <View>
          {this.renderTabList()}
        </View>
      </View>
    );
  } 
}

function mapStateToProps(state) {
  return { search: state.search };
}

export default connect(mapStateToProps, { searchUser, searchPost })(SearchScreen);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgray',
    padding: 3,
    paddingLeft: 10,
    backgroundColor: '#f2f2f2',
    textDecorationColor: 'gray',
    marginBottom: 10,
    textAlign: 'center'
  },
  tabButtonView: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    borderBottomWidth: 1, 
    borderBottomColor: 'lightgray',
    padding: 10
  },
  userListItem: {
    flexDirection: 'row',
    padding: 10 
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 100
  }
});