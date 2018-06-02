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

class ProfileScreen extends React.Component {
  renderProfileHeader() {
    return (
      <View>
        <View>
          <Image
            source={require('./image/test.png')}
          />
          <Text>Sunghee</Text>
        </View>
        <View>
          <Text>게시물</Text>
          <Text>팔로워</Text>
          <Text>팔로잉</Text>
        </View>
      </View>
    );
  }

  renderProfileTab() {
    return (
      <View>
        
{/* user */}
{/* EvilIcons */}

{/* list */}
{/* Feather */}
        <Ionicons
            name='ios-bookmark-outline'
            size={25}
            style={{marginRight: 10}}
          />
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderProfileTab()}
      </View>
    )
  } 
}

export default ProfileScreen;
