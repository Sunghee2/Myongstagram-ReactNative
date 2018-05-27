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
      <View
        style={{
          flex: 1,
          flexDirection: 'row'
        }}>
        <View
          style={{
            flex: 1
          }}>
          <Image
            source={require('./image/test.png')}
            style={{
              height: 70,
              width: 70,
              borderRadius: 100,
            }}
          />
          <Text>Sunghee</Text>
        </View>
        <View 
          style={{
            flex: 2,
            flexDirection: 'row'
          }}>
          <Text
            style={{
              flex: 1
            }}>게시물</Text>
          <Text>팔로워</Text>
          <Text>팔로잉</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderProfileHeader()}
      </View>
    )
  } 
}

export default ProfileScreen;
