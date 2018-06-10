import React from 'react';
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import NavigationService from '../navigation_service';


var { width } = Dimensions.get('window');



export default class ImageGrid extends React.Component {
  imageClicked(post) {
    NavigationService.navigate('Detail', { post: post });
  }

  renderImage() {
    return this.props.posts.map((post, index) => {
      return (
        <TouchableOpacity key={index.toString()} onPress={() => this.imageClicked(post)}>
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

  render() {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
        {this.renderImage()}
      </View>
    );
  }
}